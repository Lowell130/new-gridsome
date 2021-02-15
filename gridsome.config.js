// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.GRIDSOME_SITE_NAME,
  siteDescription: process.env.GRIDSOME_SITE_DESCRIPTION,
  titleTemplate: '%s - ' + process.env.GRIDSOME_SITE_NAME,
  siteUrl: process.env.GRIDSOME_SITE_URL,

 
 
 

  plugins: [
   
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/about'],
        config: {
          '/product/*': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    },
 
  ],
  templates: {
    Product: [
      {
        path: '/product/:title/:aSIN',
        component: './src/templates/Product.vue'
      }
    
    ]
  
  }
}
