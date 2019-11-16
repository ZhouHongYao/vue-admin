/**
 * @author zhy 2019-1-4
 * @description mixins混入分发
 */
import {
  read
} from '@/api/index'

var i = null
// 教师验证
export const checkTeacher = {
  methods: {
    async changeTeacher(name, type) {
      return new Promise((resolve, reject) => {
        let url = '/admin-api/t-check/'
        if (type && type == 2) {
          url = '/admin-api/t-has/'
        }
        read(url + name).then(rs => {
          var data = rs
          if (rs.length == 1) {
            return resolve(rs[0])
          } else if (rs.length > 1) {
            let hrl = '<div class="padding-top-20">'
            rs.forEach(item => {
              hrl = hrl + '<label class="el-radio"><input type="radio" name="singleDoorCt" value="' + item.id + '" class="el-radio__input"/>' + item.name + '(' + item.account + ')' + '</label>'
            })
            hrl = hrl + '</div>'
            this.$alert(hrl, {
              dangerouslyUseHTMLString: true,
              title: '确认教师工号',
              confirmButtonText: '确定'
            }).then((rs) => {
              let flag = false
              var radio = document.getElementsByName('singleDoorCt')
              radio.forEach(item => {
                if (item.checked) {
                  const value = item.value
                  const arr = data.find(it => {
                    return it.id == value
                  })
                  flag = true
                  return resolve(arr)
                }
              })
              if (!flag) {
                this.$message({
                  message: '请选择工号！',
                  type: 'error'
                })
              }
            }).catch(() => {
              return reject({
                'err': ''
              })
            })
          } else {
            return reject({
              'err': ''
            })
          }
        }).catch(() => {
          return reject({
            'err': ''
          })
        })
      })
    },
    // 修复enter、blur重复调用
    m_change() {
      const n = new Date().getTime()
      if (i && (n - i) < 1000) {
        i = null
        return true
      } else {
        i = n
      }
    },
    // 教师验证
    checkTeacher(name, type) {
      if (this.m_change()) {
        return
      }
      if (!name || this.form.uid) return
      const loading = this.$loading({
        lock: true,
        text: '数据获取中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.6)'
      })
      this.changeTeacher(name, type).then(rs => {
        this.form.uid = rs.id
        this.form.account = rs.account
        this.form.sex = rs.sex || ''
        this.form.phone = rs.phone || ''
        this.form.email = rs.email || ''
        loading.close()
      }).catch(() => {
        this.form.uid = null
        loading.close()
        if (type !== 2) {
          this.form.name = ''
          this.form.account = ''
        }
      })
    },
    // 清除教师
    clear_teaher() {
      this.form.uid = null
      this.form.account = null
    },
    async changeStudent(name) {
      return new Promise((resolve, reject) => {
        const url = '/admin-api/s-check/' + name
        read(url).then(rs => {
          var data = rs
          if (rs.length == 1) {
            return resolve(rs[0])
          } else if (rs.length > 1) {
            let hrl = '<div class="padding-top-20">'
            rs.forEach(item => {
              hrl = hrl + '<label class="el-radio"><input type="radio" name="singleDoorCt" value="' + item.id + '" class="el-radio__input"/>' + item.name + '(' + item.account + ')' + '</label>'
            })
            hrl = hrl + '</div>'
            this.$alert(hrl, {
              dangerouslyUseHTMLString: true,
              title: '确认学生工号',
              confirmButtonText: '确定'
            }).then((rs) => {
              let flag = false
              var radio = document.getElementsByName('singleDoorCt')
              radio.forEach(item => {
                if (item.checked) {
                  const value = item.value
                  const arr = data.find(it => {
                    return it.id == value
                  })
                  flag = true
                  return resolve(arr)
                }
              })
              if (!flag) {
                this.$message({
                  message: '请选择学号！',
                  type: 'error'
                })
              }
            }).catch(() => {
              return reject({
                'err': ''
              })
            })
          } else {
            return reject({
              'err': ''
            })
          }
        }).catch(() => {
          return reject({
            'err': ''
          })
        })
      })
    }
  }
}

export const publicMixin = {
  methods: {
    // 判断角色是否是学生
    currentRole() {
      return this.$store.state.user.userinfo.group == 3
    },
    // 判断是否能取消报名
    isBm(time) {
      const newtime = new Date(time)
      const now = new Date()
      return time ? newtime.getTime() > now.getTime() : true
    },
    // 判断是否能提交
    isTj(time) {
      const newtime = new Date(time)
      const now = new Date()
      return time ? newtime.getTime() > now.getTime() : true
    },
    // 是否是手机
    isphone() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    // 返回上一页
    backout() {
      const visitedViews = this.$store.state.tagsView.visitedViews
      this.$store
        .dispatch('delView',
          visitedViews.find(item => {
            return item.name === this.$route.name
          })
        )
        .then(() => {
          this.$router.go(-1)
        })
    },
    // 限制数字
    stint(val) {
      return val ? val.replace(/\D/g, '') : null
    },
    // 替换回车符
    Trim(str) {
      return str ? str.toString().replace(/\n|\r\n/g, '<br/>').replace(/\ /g, '&nbsp;') : '--'
    }
  }
}
