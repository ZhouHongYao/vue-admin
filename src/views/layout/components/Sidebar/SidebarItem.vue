<template>
  <div class="menu-wrapper">
    <div v-for="(item,i) in routes" :key="i">
      <template v-if="!item.hidden&&item.children">
        <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children && !item.alwaysShow" :key="item.children[0].name" :to="item.path+'/'+item.children[0].path">
          <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
            <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon" />
            <svg-icon v-else-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon" />
            <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{ item.children[0].meta.title }}</span>
          </el-menu-item>
        </router-link>

        <router-link v-else-if="item.alwaysShow" :key="item.children[0].name" :to="item.path+'/'+item.children[0].path">
          <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
            <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-else :key="item.name" :index="item.name||item.path">
          <template slot="title">
            <svg-icon v-if="item.meta&&item.meta.icon &&!item.alwaysShow" :icon-class="item.meta.icon" />
            <span v-if="item.meta&&item.meta.title && !item.alwaysShow" slot="title">{{ item.meta.title }}</span>
          </template>
          <div v-for="(child,y) in item.children" :key="y">
            <template v-if="!child.hidden">
              <sidebar-item v-if="child.children" :key="child.path" :is-nest="true" :routes="[child]" class="nest-menu" />
              <router-link v-else :key="child.name" :to="item.path+'/'+child.path">
                <el-menu-item :index="item.path+'/'+child.path">
                  <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon" />
                  <span v-if="child.meta&&child.meta.title" slot="title">{{ child.meta.title }}</span>
                </el-menu-item>
              </router-link>
            </template>
          </div>

        </el-submenu>

      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array,
      default: () => []
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }
  }
}
</script>

