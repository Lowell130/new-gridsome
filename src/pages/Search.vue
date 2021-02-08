<template>
  <Layout>

  <div class="container-fluid bg-light">
  <div class="container px-0 py-3 breadcrump"><a href="/">Home</a> ~ Search</div>
</div>
<main>
   <div class="container my-4 py-4">
        <h1>Search</h1>
      <p>In this page you will be able to search in the whole catalog</p>
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
 <div class="container bg-light my-4 border rounded" v-for="result in searchResults"
        :key="result.id"
        :to="result.path"
      >
      <div class="row p-4">
     
        <div class="col-lg-9 col-md-12 cart-info">
          <h2 class="title-text title-text__inner text-break"><g-link :to="result.path">{{result.title}}</g-link></h2>
         
          <!-- <span class="font-italic">{{result.brand}}</span> -->
          <span v-if="result.brand != ''"><a class="badge rounded-pill bg-danger text-uppercase" :href="result.uRL + affiliate">{{ result.brand }}</a></span>
          <!-- <p class="mt-2">{{result.description}}</p> -->
        </div>
        <div class="col-lg-3 col-md-12 mt-3 rounded">

          <div class="card shadow-sm">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
            <h5 class="card-title price-text" v-if="result.price !== '0,0'">{{ result.listPrice }} £</h5>
            <h5 class="card-title price-text" v-else>Offer</h5>
            
            <!-- <span class="small" v-if="result.discount !== '0%'">Price: <del>{{ result.listPrice }} £</del></span> -->
           
            
             <!-- <small class="label-rating text-danger" v-if="result.discount !== '0%'">
                  <i class="fa fa-clipboard-check"></i>&nbsp;
                  <span>RISPARMI {{result.discount}}</span> -->
            
            
            <!-- <span class="d-block small" v-if="result.discount !== '0%'">Save: {{result.discount}}</span> -->
           
            
            
            <span class="card-text small" v-if="result.price !== '0,0'">Price VAT included</span>
            <!-- <hr />
            <p class="small-text mb-0">This site participates in the Amazon Europe S.r.l. Affiliate Program, an affiliate program that allows sites to earn an advertising commission by advertising and providing links to the Amazon.co.uk site.</p> -->

          </div>

            <!-- <div class="card-footer">
              
              <a :href="uRL+affiliate" target="_blank" class="btn btn-warning button-move btn-block" type="button">
                 
                    Buy Now
                  </a>
            </div> -->
          </div>

        </div>

        <!-- <button type="button" class="btn btn-warning btn-block">Buy Now</button> -->


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
    title: "Search all notebbok and portable pc catalog"
  }, 
  mixins: [Search],
  components: {
    Pager
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










