const c1 = () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/workspace/new-gridsome/src/templates/Product.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--product-list-vue" */ "/workspace/new-gridsome/src/pages/Product-list.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--search-vue" */ "/workspace/new-gridsome/src/pages/Search.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/workspace/new-gridsome/src/pages/Blog.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/workspace/new-gridsome/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/workspace/new-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/product/:title/:aSIN/",
    component: c1
  },
  {
    path: "/product-list/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/search/",
    component: c3
  },
  {
    path: "/blog/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
