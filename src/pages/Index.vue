<template>
  <Layout>



<main>
    <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">

       

        <div class="col" v-for="{ node: product } in products" :key="product.id">
          <div class="card h-100 shadow-sm">
           
               <g-link :to="product.path">
                      <g-image :src="getSrc(product.images)" class="card-img-top" :alt="product.title" />
                    </g-link>
             <!-- <div class="label-top shadow-sm">Asus Rog</div>  -->
              <div class="label-top shadow-sm" v-if="product.brand != ''"><a class="text-white" :href="product.uRL + affiliate">{{ product.brand }}</a></div>
            <div class="card-body">
              <div class="clearfix mb-3">
                <span class="float-start badge rounded-pill bg-success" v-if="product.price != '0,0'">{{ product.price }}{{ indexValue }}</span>
                 <span class="float-start badge rounded-pill bg-danger" v-else><a class="text-white small text-uppercase" :href="product.uRL + affiliate">{{ indexInfo }}</a></span>
                <span class="float-end"><a :href="product.uRL + affiliate" class="small text-muted text-uppercase">{{ indexReviews }}</a></span>
              </div>
              <h5 class="card-title"><g-link target="_blank" :to="product.path">{{ product.title }}</g-link></h5>
             

           
              
<div class="d-grid gap-2 my-4">
              <!-- <div class="text-center "> -->
                <a :href="product.uRL + affiliate" class="btn btn-warning">{{ indexOffer }}</a>
              <!-- </div> -->
</div>
              <div class="clearfix mb-1">
                <!-- <span class="float start amz-hp">by Amazon.it</span> -->
              <span class="float-start"><a :href="product.uRL + affiliate"><i class="fas fa-question-circle"></i></a></span>
                    <span class="float-end"><a :href="product.uRL + affiliate"><i class="fas fa-plus"></i></a></span>
              </div>

            </div>
          </div>
        </div>



       
       
        </div>
      </div>


        <ClientOnly>
    <infinite-loading @infinite="loadingProductsHandler"></infinite-loading>
  </ClientOnly>
    
  </main>









  <!-- SINGLE PRODUCTS -->


  </Layout>
</template>


<style scoped>



 

</style>



<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {

  metaInfo: {
    title: process.env.GRIDSOME_SITE_INDEX_DESC,
  },
  components: {
    InfiniteLoading
  },
  data () {
    return {
      products: [],
      currentPage: 1,
      indexValue:process.env.GRIDSOME_INDEX_VALUE,
      indexOffer:process.env.GRIDSOME_INDEX_OFFER_BUTTON,
      indexInfo:process.env.GRIDSOME_INDEX_MORE_INFO,
      indexReviews:process.env.GRIDSOME_INDEX_REVIEWS
    }
  },
  created () {
    this.products.push(...this.$page.allProduct.edges)
  },
  methods: {
    getSrc(images) {
      const { uRL } = images;
      return images.uRL[1] || images.uRL[0];
    },
    async loadingProductsHandler ($state) {
      if (this.currentPage > this.$page.allProduct.pageInfo.totalPages) {
        $state.complete()

        return
      }

      const { data } = await this.$fetch(
        `/${this.currentPage + 1}`
      )

      const { allProduct } = data

      if (allProduct.edges.length) {
        this.currentPage = allProduct.pageInfo.currentPage
        this.products.push(...allProduct.edges)

        $state.loaded()

        return
      }

      $state.complete()
    }
  },
  computed: {
    affiliate: function() {
      return "&tag=newdev-21";
    },
    reviewsAmz: function() {
      return "#customerReviews";
    }
  },
   filters: {
     strippedContent: function(string) {
       return string.replace(/<\/?[^>]+>/gi, " ");
     }
   }
};
</script>

<page-query>
query AllProducts ($page: Int) {
  allProduct (sortBy: "price", order: DESC, perPage: 18, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        price
        salesRank
        uRL
        brand
        listPrice
        images {
          uRL
        }
        description
        discount
      }
    }
  }
}
</page-query>





