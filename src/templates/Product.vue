<template>
  <Layout>
    <div class="container-fluid bg-light">
      <div class="container px-0 py-3 breadcrump">
        <a href="/">Home</a> ~ <g-link to="/product-list/">Products</g-link> ~
        {{ $page.product.title }}
      </div>
    </div>

    <main>
      <div class="container bg-light mt-3 border rounded shadow-sm">
        <div class="row p-4">
          <div class="col-lg-3 col-md-12 text-center">
            <a target="_blank" :href="$page.product.uRL + affiliate">
              <img
                class="img-thumbnail single-img"
                data-fancybox="gallery"
                :src="getSrc($page.product.images)"
                :alt="$page.product.title"
              />
            </a>

            <div class="d-block mt-2">
              <a
                target="_blank"
                :href="$page.product.uRL + affiliate"
                v-for="img in $page.product.images.uRL.slice(0, 3)"
                :key="img.id"
                class="item-thumb"
                alt=""
              >
                <img class="inner-gallery" :src="img" />
              </a>
            </div>
          </div>
        
          <div class="col-lg-6 col-md-12 cart-info">
            <h2 class="border-bottom pb-2 title-text__inner text-break">
              {{ $page.product.title }}
            </h2>
            <!-- <span class="font-italic">{{ $page.product.brand }}</span> -->


 <span class="small" v-if="$page.product.brand != ''"><a class="badge rounded-pill bg-danger text-white" :href="$page.product.uRL + affiliate">{{ $page.product.brand }}</a></span>

            <p class="mt-2" v-if="$page.product.description != 0">
              {{ $page.product.description.substring(0,500)+" ... " | strippedContent }}<a class="badge bg-secondary text-white" :href="$page.product.uRL + affiliate">Read more</a>
                 
            <p class="mt-2 font-italic" v-else>No description available</p>
          </div>
          <div class="col-lg-3 col-md-12 rounded">
            <div class="card shadow-sm">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <div class="card-body">
                <h5
                  class="card-title price-text"
                  v-if="$page.product.price !== '0,0'"
                >
                  {{ $page.product.price }} £
                </h5>
                <h5 class="card-title price-text" v-else>Offer</h5>

                <!-- <span class="small" v-if="$page.product.discount !== '0%'"
                  >Prezzo: <del>{{ $page.product.listPrice }} £</del></span
                > -->

                <!-- <small class="label-rating text-danger" v-if="$page.product.discount !== '0%'">
                  <i class="fa fa-clipboard-check"></i>&nbsp;
                  <span>Save {{$page.product.discount}}</span> -->

                <!-- <span
                  class="d-block small"
                  v-if="$page.product.discount !== '0%'"
                  >Risparmi: {{ $page.product.discount }}</span
                >
                <span class="d-block small" v-else> -- </span> -->

                <span class="card-text small" v-if="$page.product.price !== '0,0'">Price VAT included</span>
                <hr />
                <p class="small-text mb-0">
                  <strong>PRODUCT PRICES MAY NOT BE UPDATED</strong> - This site participates in the Amazon Affiliate Program, an affiliate program that allows sites to earn an advertising commission by
                  receive an advertising commission by advertising and
                  providing links to the Amazon.co.uk website.
                </p>
              </div>

              <div class="card-footer">
                <!-- <button type="button" class="btn btn-warning button-move btn-block">Buy Now</button> -->

                <a
                  :href="$page.product.uRL + affiliate"
                  class="btn btn-warning button-move btn-block text-uppercase"
                  type="button"
                  v-if="$page.product.price !== '0,0'"
                >
                  Buy Now
                </a>

                <a
                  :href="$page.product.uRL + affiliate"
                  class="btn btn-warning button-move btn-block text-uppercase"
                  type="button"
                  v-else
                >
                  Check availability
                </a>
              </div>
            </div>
          </div>

          <!-- <button type="button" class="btn btn-warning btn-block">Acquista ora</button> -->
        </div>
      </div>
      <div class="container my-4">
        <h3 class="border-bottom pb-3 text-break">
          On offer: {{ $page.product.title }}
        </h3>
        <div class="text-break">
          On this page you will find reviews, opinions and detailed information about the product <strong>{{ $page.product.title }}</strong
          >, by <strong>{{ $page.product.brand }}</strong
          >, sold by <strong>Amazon.co.uk</strong>. Below is a table with all the detailed information on the commercial offer and for the purchase of the product <strong>{{ $page.product.title }}</strong
          >, by <strong>{{ $page.product.brand }}</strong> and reviews from
          customers who have already purchased it.
        </div>
      </div>



      <!-- INIZIO TABELLA NEW -->
      <div class="container my-4 p-1 p-sm-3 border bg-white rounded shadow-sm">
      
     
      
        <div class="col-12">
          <div class="bd-example">
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <th colspan="2">Description of the offer</th>
                  </tr>
                  <!-- <tr>
                  <td>COD.</td>
                  <td>{{$page.product.aSIN}}</td>
                </tr> -->
                  <tr>
                    <td>Reviews</td>
                    <td>
                    <span class="badge rounded-pill bg-primary text-uppercase">  <a class="text-white" :href="$page.product.uRL + affiliate"
                        >Read reviews on Amazon.co.uk</a
                      ></span>
                    </td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td><span class="badge rounded-pill bg-danger text-uppercase"><span v-if="$page.product.brand != ''"><a class="text-white" :href="$page.product.uRL + affiliate">{{ $page.product.brand }}</a></span></span></td>
                  </tr>
                  <tr>
                    <td>Sale Rank</td>
                    <td><span class="badge rounded-pill bg-warning text-uppercase">{{ $page.product.salesRank }}</span></td>
                  </tr>

                  <tr>
                    <td>Price</td>
                    <td v-if="$page.product.price !== '0,0'">
                    <span class="badge rounded-pill bg-success text-uppercase">  {{ $page.product.price }}£</span>
                    </td>
                    <td v-else><span class="badge rounded-pill bg-info text-uppercase"><a class="text-white" :href="$page.product.uRL + affiliate">Check offer</a></span></td>
                  </tr>
                  <!-- <tr>
                    <td>Price</td>
                    <td v-if="$page.product.listPrice !== '0,0'">
                      {{ $page.product.listPrice }}£
                    </td>
                    <td v-else>--</td>
                  </tr> -->
                  <!-- <tr>
                    <td>% di sconto</td>
                    <td v-if="$page.product.discount !== '0%'">
                      {{ $page.product.discount }}
                    </td>
                    <td v-else>--</td>
                  </tr> -->
                </tbody>
              </table>
      
                  <small>*Sale Rank (MAY NOT BE UPDATED) - Position ranking best sellers on Amazon.co.uk</small>
         
            </div>
          </div>
        </div>
      
</div>
     


      <!-- FINE BOX FINE PAGINA    -->

      <div class="container">
        <h3 class="big-text my-4 py-4">You might be interested in</h3>
      </div>

<div class="container pb-4 mb-4">
      <QFeaturedSidebar v-slot="{ sidebar: sidebar_prod }">
        <div class="container bg-white border rounded my-3 shadow-sm"  v-for="sidebar in sidebar_prod"
          :key="sidebar.id">
    <div class="row p-4">
      <div class="col-lg-1 col-md-12 text-center">
         <g-link :to="sidebar.path">
                      <g-image :src="getSrc(sidebar.images)" class="img-thumbnail img-thumbnail__list single-img" :alt="sidebar.title" />
                    </g-link>
      </div>
      <div class="col-lg-8 col-md-12 cart-info-list">
        <h2 class="mt-4 mt-sm-0 title-text text-break"><g-link :to="sidebar.path">{{ sidebar.title }}</g-link></h2>
        <!-- <span class="small">{{ sidebar.brand }}</span> -->
          <span class="small" v-if="sidebar.brand != ''"><a class="badge rounded-pill bg-danger text-white" :href="sidebar.uRL + affiliate">{{ sidebar.brand }}</a></span>
          
          <!-- <p>
                      {{sidebar.description.substring(0,200)+"..." | strippedContent}}
                      <g-link :to="sidebar.path">+ info</g-link>
                    </p> -->
        
      </div>
      <div class="col-lg-3 col-md-12 my-sm-auto mt-4">
        <p class="price-text text-center mb-1" v-if="sidebar.price != '0,0'">{{ sidebar.price }}£</p>
        <p class="price-text text-center mb-1" v-else>Offer</p>
        <a :href="sidebar.uRL + affiliate" type="button" class="btn btn-warning btn-block text-uppercase" v-if="sidebar.price != '0,0'">Buy Now</a>
       <a :href="sidebar.uRL + affiliate" type="button" class="btn btn-warning btn-block text-uppercase" v-else>Check availability</a>
      </div>
    </div>
  </div>
        <!-- <div
          class="container border-bottom my-2"
          v-for="sidebar in sidebar_prod"
          :key="sidebar.id"
        >
          <div class="row py-2">
            <div class="col-lg-2 col-md-12 text-center">
              <g-link :to="sidebar.path">
                <img
                  class="img-thumbnail single-img"
                  :src="getSrc(sidebar.images)"
                  :alt="sidebar.title"
                />
              </g-link>
            </div>
            <div class="col-lg-10 col-md-12 cart-info-list">
              <h2 class="mt-4 mt-sm-0 title-text">
                <g-link :to="sidebar.path">{{ sidebar.title }}</g-link>
              </h2>
        
               <span class="small" v-if="sidebar.brand != ''"><a :href="sidebar.uRL + affiliate">{{ sidebar.brand }}</a></span>
            </div>
          </div>
        </div> -->
      </QFeaturedSidebar>
</div>
      <!-- FINE BOX FINE PAGINA    -->
    </main>
 
  </Layout>
</template>

<style scoped>
@media (max-width: 768px) {
  .img-thumbnail {
    max-height: 400px;
  }
 
}


</style>



<page-query>
query Product ($id: ID!) {
  product (id: $id) {
    id
    title
   
    salesRank
    brand
    price
	path
	listPrice
	description 
  discount
   
    images {
      uRL
    }
    uRL
  }
}
</page-query>



<script>

export default {
  metaInfo() {
    return {
      title:
        "Review - " + this.$page.product.title.substring(0, 70) + "...",
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.product.title,
        },
        //  { property: "og:type", content: 'product'},
        { property: "og:title", content: this.$page.product.title },
        { property: "og:description", content: this.ogDesc },
        {
          property: "og:url",
          content: `http://notebooksales.co.uk/` + this.postUrl,
        },
        { property: "og:image", content: this.ogImageUrl },
        // { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.product.title },
        { name: "twitter:description", content: this.ogDesc },
        // { name: "twitter:site", content: "@cossssmin" },
        // { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
  },
  components: {
    QFeaturedSidebar: () => import("../queries/QSidebarProd.vue")
   
  },

  methods: {
    getSrc(images) {
      const { uRL } = images;
      return images.uRL[1] || images.uRL[0];
    },
  },

  filters: {
    strippedContent: function (string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    },
  },
  computed: {
    affiliate: function () {
      return "&tag=devnewuk-21";
    },

    ogImageUrl() {
      return (
        this.$page.product.images.uRL[0] || this.$page.product.images.uRL[1]
      );
    },
    ogDesc() {
      return this.$page.product.title.substring(0, 250);
    },
    postUrl() {
      return this.$page.product.path;
    },
  },
};
</script>
