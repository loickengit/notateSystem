import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/pages/Common'
import Login from '@/pages/Login'
import Saliency from '@/pages/Saliency'
import Attribute from '@/pages/Attribute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/common',
      name: 'common',
      component: Common
    },
    {
      path: '/saliency',
      name: 'saliency_view',
      component: Saliency
    },
    {
      path: '/attribute',
      name: 'attribute',
      component: Attribute
    }
  ]
})

//
// export default new Router({
//   routes: [
//     {
//       path: '/space',
//       name: 'Space',
//       component: space,
//       children: [{
//         path: '/album',
//         component: albumList
//       }, {
//         path: '/activity/:uid',
//         component: activityList,
//         name:'Activity'
//       }, {
//         path: '/friend',
//         component: friendList
//       }, {
//         path:'/photo/:aid／:albumName',
//         name:'photoList',
//         component: albumPhoto
//       }]
//     }
//   ]
// })
