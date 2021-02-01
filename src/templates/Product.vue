<template>
  <Layout>
    <div class="container-fluid bg-light">
      <div class="container px-0 py-3 breadcrump">
        <a href="/">Home</a> ~ <g-link to="/product-list/">Prodotti</g-link> ~
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
              {{ $page.product.description.substring(0,500)+" ... " | strippedContent }}<a class="badge bg-secondary text-white" :href="$page.product.uRL + affiliate">Leggi il resto</a>
                 
            <p class="mt-2 font-italic" v-else>Nessuna descrizione disponibile</p>
          </div>
          <div class="col-lg-3 col-md-12 rounded">
            <div class="card shadow-sm">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <div class="card-body">
                <h5
                  class="card-title price-text"
                  v-if="$page.product.price !== '0,0'"
                >
                  {{ $page.product.price }} €
                </h5>
                <h5 class="card-title price-text" v-else>Offerta</h5>

                <!-- <span class="small" v-if="$page.product.discount !== '0%'"
                  >Prezzo: <del>{{ $page.product.listPrice }} €</del></span
                > -->

                <!-- <small class="label-rating text-danger" v-if="$page.product.discount !== '0%'">
                  <i class="fa fa-clipboard-check"></i>&nbsp;
                  <span>RISPARMI {{$page.product.discount}}</span> -->

                <!-- <span
                  class="d-block small"
                  v-if="$page.product.discount !== '0%'"
                  >Risparmi: {{ $page.product.discount }}</span
                >
                <span class="d-block small" v-else> -- </span> -->

                <span class="card-text small" v-if="$page.product.price !== '0,0'">Prezzo IVA inclusa</span>
                <hr />
                <p class="small-text mb-0">
                  <strong>I PREZZI DEI PRODOTTI POTREBBERO NON ESSERE AGGIORNATI</strong> - Questo sito partecipa al Programma Affiliazione Amazon Europe
                  S.r.l., un programma di affiliazione che consente ai siti di
                  percepire una commissione pubblicitaria pubblicizzando e
                  fornendo link al sito Amazon.it.
                </p>
              </div>

              <div class="card-footer">
                <!-- <button type="button" class="btn btn-danger button-move btn-block">Acquista ora</button> -->

                <a
                  :href="$page.product.uRL + affiliate"
                  class="btn btn-danger button-move btn-block"
                  type="button"
                  v-if="$page.product.price !== '0,0'"
                >
                  Acquista
                </a>

                <a
                  :href="$page.product.uRL + affiliate"
                  class="btn btn-danger button-move btn-block"
                  type="button"
                  v-else
                >
                  Check disponibilità
                </a>
              </div>
            </div>
          </div>

          <!-- <button type="button" class="btn btn-danger btn-block">Acquista ora</button> -->
        </div>
      </div>
      <div class="container my-4">
        <h3 class="border-bottom pb-3 text-break">
          In offerta: {{ $page.product.title }}
        </h3>
        <div class="text-break">
          In questa pagina troverete recensioni, opinioni e informazioni
          dettagliate sul prodotto <strong>{{ $page.product.title }}</strong
          >, di <strong>{{ $page.product.brand }}</strong
          >, venduto da <strong>Amazon.it</strong>. Di seguito una tabella con
          tutte le informazioni dettagliate sull'offerta commerciale e per
          l'acquisto del prodotto <strong>{{ $page.product.title }}</strong
          >, di <strong>{{ $page.product.brand }}</strong> e le recensioni dei
          clienti che lo hanno già acquistato.
        </div>
      </div>



      <!-- INIZIO TABELLA NEW -->
      <div class="container my-4 p-1 p-sm-3 border rounded shadow-sm">
        <div class="col-12">
          <div class="bd-example">
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <th colspan="2">Descrizione dell'offerta</th>
                  </tr>
                  <!-- <tr>
                  <td>COD.</td>
                  <td>{{$page.product.aSIN}}</td>
                </tr> -->
                  <tr>
                    <td>Recensioni clienti</td>
                    <td>
                      <a :href="$page.product.uRL + affiliate"
                        >Leggi le recensioni</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td><span v-if="$page.product.brand != ''"><a :href="$page.product.uRL + affiliate">{{ $page.product.brand }}</a></span></td>
                  </tr>
                  <tr>
                    <td>Sale Rank</td>
                    <td>{{ $page.product.salesRank }}</td>
                  </tr>

                  <tr>
                    <td>Prezzo</td>
                    <td v-if="$page.product.price !== '0,0'">
                      {{ $page.product.price }}€
                    </td>
                    <td v-else>--</td>
                  </tr>
                  <!-- <tr>
                    <td>Prezzo</td>
                    <td v-if="$page.product.listPrice !== '0,0'">
                      {{ $page.product.listPrice }}€
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
              <ul>
                <li>
                  <small
                    >*Sale Rank - Posizione classifica più venduti su
                    Amazon.it</small
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- FINE BOX FINE PAGINA    -->

      <div class="container">
        <h3 class="big-text my-4 py-4">Potrebbero interessarti</h3>
      </div>

<div class="container pb-4 mb-4">
      <QFeaturedSidebar v-slot="{ sidebar: sidebar_prod }">
        <div class="container border rounded my-3 shadow-sm"  v-for="sidebar in sidebar_prod"
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
        <p class="price-text text-center mb-1" v-if="sidebar.price != '0,0'">{{ sidebar.price }}€</p>
        <p class="price-text text-center mb-1" v-else>Offerta</p>
        <button type="button" class="btn btn-danger btn-block" v-if="sidebar.price != '0,0'">Acquista ora</button>
         <button type="button" class="btn btn-danger btn-block" v-else>Check disponibilità</button>
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

 .img-thumbnail {
    max-height: 300px;
    padding:10px;
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
        "Recensione - " + this.$page.product.title.substring(0, 70) + "...",
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
          content: `http://giocomputers.it/` + this.postUrl,
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
    QFeaturedSidebar: () => import("../queries/QSidebarProd.vue"),
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
      return "&tag=newdev-21";
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
