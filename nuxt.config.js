/**
 * nuxt.js 配置文件
 */
module.exports = {
  target: 'static',
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/realworld_nuxtjs/' : '',
    linkActiveClass: 'active', // nuxt-link激活添加的类名
    // 自定义路由规则
    extendRoutes(routes, resolve) {
      // 清除 nuxt.js基于 pages 目录默认生成的路由表规则
      routes.splice(0)

      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '', //默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home/'),
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/'),
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/'),
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/'),
            },
            {
              path: '/settings/',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/'),
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/'),
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/'),
            },
          ]
        }
      ])
    }
  },
  generate: {
    fallback: 'index.html'
  }
}