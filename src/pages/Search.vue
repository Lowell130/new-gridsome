<template>
  <Layout>

  <div class="container-fluid bg-light">
  <div class="container px-0 py-3 breadcrump"><a href="/">Home</a> ~ Cerca</div>
</div>
<main>
   <div class="container my-4 py-4">
        <h1>Ricerca</h1>
      <p>In questa pagina potrai effettuare una ricerca in tutto il catalogo</p>
           <div class="input-group mt-4 pt-4">
            <input id="search" v-model="searchTerm" name="searchtext" value="" class="form-control" type="text">
             <span class="input-group-append">
              <button class="btn btn-outline-secondary border-left-0 border" type="button">
                    <i class="fa fa-search"></i>
              </button>
            </span>
          
        </div>
     
    </div>


<!-- START NEW SEARCH -->
 <div class="container bg-light mt-3 border rounded" v-for="result in searchResults"
        :key="result.id"
        :to="result.path"
      >
      <div class="row p-4">
     
        <div class="col-lg-9 col-md-12 cart-info">
          <h2 class="title-text title-text__inner text-break"><g-link :to="result.path">{{result.title}}</g-link></h2>
         
          <!-- <span class="font-italic">{{result.brand}}</span> -->
          <span class="font-italic" v-if="result.brand != ''"><a :href="result.uRL + affiliate">{{ result.brand }}</a></span>
          <!-- <p class="mt-2">{{result.description}}</p> -->
        </div>
        <div class="col-lg-3 col-md-12 mt-3 rounded">

          <div class="card shadow-sm">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
            <h5 class="card-title price-text" v-if="result.price !== '0,0'">{{ result.price }} €</h5>
            <h5 class="card-title price-text" v-else>Offerta</h5>
            <span class="small" v-if="result.discount !== '0%'">Prezzo: <del>{{ result.listPrice }} €</del></span>
            <span class="small v-else"> -- </span>
            
             <!-- <small class="label-rating text-danger" v-if="result.discount !== '0%'">
                  <i class="fa fa-clipboard-check"></i>&nbsp;
                  <span>RISPARMI {{result.discount}}</span> -->
            
            
            <span class="d-block small" v-if="result.discount !== '0%'">Risparmi: {{result.discount}}</span>
            <span class="d-block small" v-else> -- </span>
            
            
            <span class="card-text small" v-if="result.price !== '0,0'">Prezzo IVA inclusa</span>
            <!-- <hr />
            <p class="small-text mb-0">Questo sito partecipa al Programma Affiliazione Amazon Europe S.r.l., un
              programma di affiliazione che consente ai siti di percepire una commissione pubblicitaria pubblicizzando e
              fornendo link al sito Amazon.it.</p> -->

          </div>

            <!-- <div class="card-footer">
              
              <a :href="uRL+affiliate" target="_blank" class="btn btn-danger button-move btn-block" type="button">
                 
                    Acquista
                  </a>
            </div> -->
          </div>

        </div>

        <!-- <button type="button" class="btn btn-danger btn-block">Acquista ora</button> -->


      </div>
    </div>


   

 


    </main>
  </Layout>
</template>




<script>
import { Pager } from "gridsome";
import Search from "gridsome-plugin-flexsearch/SearchMixin";
export default {
    metaInfo: {
    title: "Ricerca tra tutti i prodotti nel catalogo gaming"
  }, 
  mixins: [Search],
  components: {
    Pager
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










