<template>
  <Layout>
    <div class="container-fluid bg-light">
  <div class="container px-0 py-3 breadcrump"><a href="/">Home</a> ~ Lista prodotti</div>
</div>
    <div class="container my-4 py-4">
      <h1>Tutti i prodotti</h1>
      <p>In questa pagina troverai tutti i prodotti presenti nel sito</p>
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
        <p class="price-text text-center mb-1" v-if="product.price != '0,0'">{{ product.price }}€</p>
        <p class="price-text text-center mb-1" v-else>Offerta</p>
        <button type="button" class="btn btn-danger btn-block" v-if="product.price != '0,0'">Acquista ora</button>
         <button type="button" class="btn btn-danger btn-block" v-else>Check disponibilità</button>
      </div>
    </div>
  </div>

    <div class="container py-4">
          <Pager :info="$page.allProduct.pageInfo" linkClass="pager__link" range="3" class="pager" />
        </div>
</main>



  









  </Layout>
</template>


<style lang="scss">
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
    border-radius: 5px;
  }

</style>



<script>
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Lista di tutti i prodotti per il gaming"
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





