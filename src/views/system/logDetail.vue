<template>
  <el-dialog :visible="dialogStatus" :fullscreen="isphone()" title="查看日志信息" top="15vh" close-on-press-escape @close="cleardialog" @open="openDialog">
    <div :style="{'height':isphone() ? 'auto' : clientHeight +'px', 'overflow-y': 'auto'}">
      <el-row v-loading="loading" element-loading-text="节点数据载入中">
        <el-col :span="10" class="padding-5">操作用户：
          <span class="text-dark">{{ caData.name }}</span>
        </el-col>
        <el-col :span="14" class="padding-5">请求RUL：
          <span class="text-dark">{{ caData.url }}</span>
        </el-col>
        <el-col :span="10" class="padding-5">请求方式：
          <span class="text-dark">{{ caData.method }}</span>
        </el-col>
        <el-col :span="14" class="padding-5">请求IP：
          <span class="text-dark">{{ caData.ip }}</span>
        </el-col>
        <el-col :span="10" class="padding-5">操作时间：
          <span class="text-dark">{{ caData.add_time }}</span>
        </el-col>
      </el-row>
      <el-row class="margin-top-20">
        <json-editor ref="jsonEditor" v-model="data" />
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import { mapState } from 'vuex'
import JsonEditor from '@/components/JsonEditor'
import { publicMixin } from '@/api/mixins'

export default {
  components: { JsonEditor },
  mixins: [publicMixin],
  props: ['dialogStatus', 'caData'],
  data() {
    return {
      data: {},
      loading: false
    }
  },
  computed: {
    ...mapState({
      clientHeight: state => (state.clientHeight + 200) * 0.7 - 170
    })
  },
  methods: {
    openDialog() {
      this.data = JSON.parse(this.caData.data)
    },
    // 关闭弹框
    cleardialog() {
      this.clear()
      this.$emit('CB-dialogStatus', false)
    },
    clear() {
      this.data = {}
    }
  }
}
</script>
