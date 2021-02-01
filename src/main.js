// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/Blog.vue'
import BootstrapVue from 'bootstrap-vue'



// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

//custom bt style

import '~/assets/fonts/fontawesome/css/all.css';
// import '~/assets/scss/ui.scss';
// import '~/assets/scss/responsive.scss';
// import '~/assets/scss/bootstrap.scss';
// import '~/assets/scss/main.scss';

//newlayout
import '~/assets/css/bootstrap.css'
import '~/assets/css/style.css'




export default function (Vue, { router, head, isClient }) {
  // Set google font CDN
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
  })

  // Set default layout as a global component


  Vue.component('Layout', DefaultLayout)
  Vue.component('Blog', BlogLayout)
  Vue.use(BootstrapVue)
 

}


