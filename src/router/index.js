import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/activity',
    component: Layout,
    redirect: '/activity/table',
    name: 'activity',
    meta: { title: '活动管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/activity/list'),
        meta: { title: '活动列表', icon: 'table' }
      },
      {
        path: 'create',
        name: 'form',
        component: () => import('@/views/activity/form'),
        meta: { title: '添加活动', icon: 'table' }
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('@/views/activity/personal'),
        meta: { title: '艺术家以及主办方', icon: 'table' }
      },
      { path: 'detail', component: () => import('@/views/activity/detail'), hidden: true }
    ]
  },
  {
    path: '/community',
    component: Layout,
    name: 'community',
    meta: { title: '圈子管理', icon: 'example' },
    children: [
      {
        path: 'topic',
        name: 'topic',
        component: () => import('@/views/community/topic'),
        meta: { title: '话题管理', icon: 'table' }
      },
      {
        path: 'post',
        name: 'post',
        component: () => import('@/views/community/post'),
        meta: { title: '帖子管理', icon: 'table' }
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('@/views/community/comment'),
        meta: { title: '评论管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name: 'user',
    meta: { title: '用户管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/user/list'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'black',
        name: 'black',
        component: () => import('@/views/user/black'),
        meta: { title: 'black', icon: 'table' }
      }
    ]
  },
  {
    path: '/project',
    component: Layout,
    name: 'project',
    meta: { title: '项目库', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/project/index'),
        meta: { title: '项目库', icon: 'table' }
      },
      {
        path: 'create',
        name: 'form',
        component: () => import('@/views/project/form'),
        meta: { title: '添加项目', icon: 'table' }
      }
    ]
  },
  {
    path: '/referee',
    component: Layout,
    name: 'referee',
    meta: { title: '公共裁判库', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/referee/index'),
        meta: { title: '公共裁判库', icon: 'table' }
      },
      {
        path: 'create',
        name: 'form',
        component: () => import('@/views/referee/form'),
        meta: { title: '添加裁判', icon: 'table' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
