<template>
  <el-dialog :title="groupTitle" :visible="dialogStatus" :fullscreen="isphone()" width="680px" top="5vh" @close="handleClose" @open="openDialog">
    <div v-loading="loading" :style="{'height':isphone() ? 'auto' : clientHeight +'px', 'overflow-y': 'auto'}" element-loading-text="数据载入中">
      <el-input v-model="keys" placeholder="搜索节点" clearable prefix-icon="el-icon-search" @change="searchNode" />
      <v-tree ref="tree" :data="treedata" :multiple="true" :halfcheck="true" class="padding-left-20" />
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button v-if="authCheck(29)" :loading="vloading" type="primary" icon="el-icon-success" @click="save">提交</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
import { rulesRead, rulesEdit } from '@/api/system/userGroup'
import { publicMixin } from '@/api/mixins'

export default {
  mixins: [publicMixin],
  props: ['dialogStatus', 'rlid', 'groupTitle'],
  data() {
    return {
      treedata: [],
      keys: '',
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      treeform: [], // 权限节点[]
      loading: false,
      vloading: false,
      data: []
    }
  },
  computed: {
    ...mapState({
      clientHeight: state => (state.clientHeight + 200) * 0.9 - 170
    })
  },
  methods: {
    // 打开
    openDialog() {
      if (this.rlid) {
        this.getRead()
      }
    },
    // 关闭
    handleClose() {
      this.treeform = []
      this.formData = ''
      this.$emit('CB-dialogStatus', false)
    },
    // 检索
    searchNode() {
      this.$refs.tree.searchNodes(this.keys)
    },

    // 获取角色组权限
    getRead() {
      this.loading = true
      rulesRead(this.rlid)
        .then(rs => {
          this.treedata = rs
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    // 保存
    save() {
      this.getArray(this.treedata)
      const rules = this.treeform.toString()
      if (!rules) {
        this.$message.error('请先选择权限！')
        return
      }
      this.vloading = true
      rulesEdit({ id: this.rlid, rules: rules })
        .then(rs => {
          this.$message({
            type: 'success',
            message: '提交成功'
          })
          this.$emit('CB-dialogStatus', 1)
          this.clear()
          this.vloading = false
        })
        .catch(() => {
          this.$emit('CB-dialogStatus', false)
          this.vloading = false
          this.treeform = []
        })
    },
    // 过滤出所有权限节点
    getArray(data) {
      const that = this
      for (const item of data) {
        if (item.checked) {
          that.treeform.push(item.id)
          if (item.children && item.children.length > 0) {
            that.getArray(item.children)
          }
        }
      }
    },
    // 清除数据
    clear() {
      this.xloading = false
      this.loading = false
      this.keys = ''
      this.treeform = []
      this.treedata = []
    }
  }
}
</script>
