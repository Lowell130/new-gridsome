<template>
  <Layout>
    <div class="container-fluid bg-light">
  <div class="container px-0 py-3 breadcrump"><a href="/">Home</a> ~ Product list</div>
</div>
    <div class="container my-4 py-4">
      <h1>All Products</h1>
      <p>On this page you will find all the products on the site</p>
      <!-- <ul>
      <li v-for="{ node: product } in $page.allProduct.edges" :key="product.id">
        <g-link :to="product.path">{{ product.title }}</g-link>
      </li>
    </ul>
      <Pager :info="$page.allProduct.pageInfo"/>-->
    </div>


  <!-- SINGLE PRODUCTS -->
  <main>
    
  <div class="container border rounded my-3 shadow-sm" v-for="{ node: product } in $page.allProduct.edges" :key="product.id">
    <div class="row p-4">
      <div class="col-lg-1 col-md-12 text-center">
         <g-link :to="product.path">
                      <g-image :src="getSrc(product.images)" class="img-thumbnail img-thumbnail__list single-img" :alt="product.title" />
                    </g-link>
      </div>
      <div class="col-lg-8 col-md-12 cart-info-list">
        <h2 class="mt-4 mt-sm-0 title-text text-break"><g-link :to="product.path">{{ product.title }}</g-link></h2>
        <!-- <span class="small">{{ product.brand }}</span> -->
          <span class="small" v-if="product.brand != ''"><a class="badge rounded-pill bg-danger text-white" :href="product.uRL + affiliate">{{ product.brand }}</a></span>
          <!-- <p>
                      {{product.description.substring(0,200)+"..." | strippedContent}}
                      <g-link :to="product.path">+ info</g-link>
                    </p> -->
        
      </div>
      <div class="col-lg-3 col-md-12 my-sm-auto mt-4">
        <p class="price-text text-center mb-1" v-if="product.price != '0,0'">{{ product.price }}£</p>
        <p class="price-text text-center mb-1" v-else>Offer</p>
        <button type="button" class="btn btn-danger btn-block" v-if="product.price != '0,0'">Buy Now</button>
         <button type="button" class="btn btn-danger btn-block" v-else>Check availability</button>
      </div>
    </div>
  </div>

    <div class="container py-4">
          <Pager :info="$page.allProduct.pageInfo" linkClass="pager__link" range="3" class="pager" />
        </div>
</main>



  









  </Layout>
</template>


<style lang="scss" scoped>
  .pager {
    display: inline-block;
    width: 100%;
    text-align: center;

    &__link {
      color: var(--link-color);
      text-align: center;
      text-decoration: none;
      padding: .5rem 1rem;

      &:hover:not(.active) {
        background-color: var(--bg-content-color);
        border-radius: 5px;
        color: var(--link-color);
      }
    }
  }

  .active {
    background-color: var(--bg-content-color);    
    border: 2px solid #c82333;
  }

</style>



<script>
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "List of all pc gaming products"
  },
  components: {
    Pager
  },
  methods: {
    getSrc(images) {
      const { uRL } = images;
      return images.uRL[1] || images.uRL[0];
    }
  },
  computed: {
    affiliate: function() {
      return "&tag=devnewuk-21";
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
  allProduct (sortBy: "title", order: DESC, perPage: 20, page: $page) @paginate {
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





