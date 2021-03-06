const c1 = () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/workspace/new-gridsome/src/templates/Product.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--search-vue" */ "/workspace/new-gridsome/src/pages/Search.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--shop-vue" */ "/workspace/new-gridsome/src/pages/Shop.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/workspace/new-gridsome/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/workspace/new-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/product/:title/:aSIN/",
    component: c1
  },
  {
    path: "/search/",
    component: c2
  },
  {
    path: "/shop/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
