<template>
  <el-dialog :visible="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="false" title="添加管理员" width="500px" top="30vh" @close="cleardialog" @open="openDialog">
    <el-form ref="form" v-loading="loading" :rules="rules" :model="form" label-width="100px" label-suffix="：" @submit.native.prevent>
      <el-form-item label="用户组">
        {{ groupTitle }}
      </el-form-item>
      <el-form-item label="教师姓名" prop="name">
        <el-input v-model="form.name" placeholder="填写教师姓名" clearable @blur="checkTeacher(form.name)" @keyup.enter.native="checkTeacher(form.name)" @change="clear_teaher()" />
      </el-form-item>
      <el-form-item label="备注信息" prop="beizhu">
        <el-input v-model="form.beizhu" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" maxlength="100" placeholder="设置当前账号的备注信息，非必填项" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button v-waves :loading="loadingBiao" :disabled="form.account ? false : '' " icon="el-icon-success" type="primary" @click="createData"> 保存数据</el-button>
    </div>
  </el-dialog>
</template>
<script>
import waves from '@/directive/waves' // 水波纹指令
import { userSet } from '@/api/system/user'
import { checkTeacher } from '@/api/mixins'

const form = {
  uid: null,
  account: '',
  group: null,
  name: '',
  beizhu: ''
}
export default {
  directives: {
    waves
  },
  mixins: [checkTeacher],
  props: ['dialogFormVisible', 'group', 'groupTitle'],
  data() {
    return {
      loading: false,
      loadingBiao: false,
      form: form,
      rules: {
        name: [
          {
            required: true,
            message: '请填写当前用户姓名！',
            trigger: 'blur'
          },
          {
            min: 2,
            message: '用户姓名最小为2位！',
            trigger: 'blur'
          },
          {
            max: 20,
            message: '用户姓名最大设置为20位！',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    // 打开
    openDialog() {
      this.form.group = this.group
    },
    // 关闭
    cleardialog() {
      this.resetTemp()
      this.$emit('CB-dialogStatus', false)
    },
    // 添加保存
    createData() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.loadingBiao = true
          userSet(this.form)
            .then(rs => {
              this.$message({
                type: 'success',
                message: '提交成功'
              })
              this.loadingBiao = false
              this.resetTemp()
              this.$emit('CB-dialogStatus', 1)
            })
            .catch(() => {
              this.loadingBiao = false
            })
        }
      })
    },
    // 重置表单
    resetTemp() {
      this.form = form
      this.$refs['form'].resetFields()
    }
  }
}
</script>
