// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'notebooksales.co.uk',
  siteDescription: 'Notebook at best prices on Amazon.co.uk',
  titleTemplate: '%s - notebooksales.co.uk',
  siteUrl: 'http://notebooksales.co.uk/',



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
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Product',
            indexName: 'Product',
            fields: ['title', 'discount', 'path', 'price', 'salesRank', ' uRL', 'brand', 'listPrice', 'description']
            
            }
        ],
        searchFields: ['title']
      }
    }
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
