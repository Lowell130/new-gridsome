import plugin_gridsome_plugin_flexsearch_7 from "/workspace/new-gridsome/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_7,
    options: {"pathPrefix":"","siteUrl":"http://notebooksales.co.uk/","collections":[{"typeName":"Product","indexName":"Product","fields":["title","discount","path","price","salesRank"," uRL","brand","listPrice","description"]}],"searchFields":["title"],"chunk":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  }
]
