<template>
	<Layout>
	  
	  
	  
	<div class="hero">
		  <div class="hero__content">
			  <p class="intro-text py-0 px-0 mx-0 my-0">Hot Gamer Hardware</p>
			  <h1 class="big-text">Best Products for PC Gamers</h1>
			  <a href="/product-list" class="btn btn-primary button text-uppercase intro-text">All Products</a>
		  </div>
		   <video autoplay muted loop id="bg-video">
			  <source src="/videos/bg-video.mp4" type="video/mp4">
		  </video>
	  </div>
  
	  
  
   <main class="container">
		  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
			<h1 class="spot">ggcomputers.co.uk</h1>
			<p class="lead text-left">Components, desktops, laptops, accessories and more for the best pc gamers. Buy hardware products for gaming in offer at the best prices and always available. Browse the catalog looking for the component or accessories you need for your gaming sessions. The best gaming hardware products from Amazon.co.uk</p>
		  </div>
  
  
  <div class="container border rounded my-3 shadow-sm" v-for="pro in $page.allProduct.edges" :key="pro.id">
	  <div class="row p-4">
		<div class="col-lg-1 col-md-12 text-center">
		  <!-- <img class="img-thumbnail single-img" src="2.jpg"> -->
  <g-link :to="pro.node.path">
				  <g-image :src="getSrc(pro.node.images)" :alt="pro.node.title" class="img-thumbnail img-thumbnail__list single-img" />
				</g-link>
		</div>
		<div class="col-lg-8 col-md-12 cart-info-list">
		  <h2 class="mt-4 mt-lg-0 title-text text-break"><g-link :to="pro.node.path">{{ pro.node.title }}</g-link></h2>
		<!-- <span class="small">{{ pro.node.brand }}</span> -->
			  <span class="small" v-if="pro.node.brand != ''"><a class="badge rounded-pill bg-danger text-white" :href="pro.node.uRL + affiliate">{{ pro.node.brand }}</a></span>
			</div>
		<div class="col-lg-3 col-md-12 my-sm-auto mt-4">
  
   
  
		  <p class="price-text text-center mb-1" v-if="pro.node.price !=='0,0'">{{ pro.node.price }} £</p>
		  <p class="price-text text-center mb-1" v-else>Offer</p>
		
	<a 
						 :href="pro.node.uRL+affiliate"
						  class="btn btn-danger btn-block"
						>Buy Now</a>
  
		</div>
  
  
	  </div>
	</div>
  
  
  
   <h3 class="big-text my-4 py-4">You might be interested in</h3>
  
  
	<!-- <div class="row row-cols-1 row-cols-md-3 mb-3 text-center"> -->
	<QFeaturedPosts v-slot="{ posts: featured_posts }">
			<div class="col" v-for="fpost in featured_posts" :key="fpost.id">
			  <div class="card mb-4 shadow-sm">
				  
				
  
  
	<g-link :to="fpost.path">
						<img :src="getSrc(fpost.images)" :alt="fpost.title" class="card-img-top" />
					  </g-link>
  
			  <div class="card-body">
			   
			   <p class="price-text text-center mb-1" v-if="fpost.price !=='0,0'">{{ fpost.price }} £</p>
			   <p class="price-text text-center mb-1" v-else>Offer</p>
			  
				<a
						  :href="fpost.uRL+affiliate"
						  class="btn btn-danger btn-block" v-if="fpost.price !=='0,0'">Buy Now</a>
						   <a
						  :href="fpost.uRL+affiliate"
						  class="btn btn-danger btn-block" v-else>Check availability</a>
			  </div>
			</div>
			</div>
			 </QFeaturedPosts>
		  <!-- </div> -->
  
  
   
  
  
   </main>
	
  
  
  
  
   
  
  
		 
	</Layout>
  </template>
  
  
  <style scoped>
  
  @media (max-width: 575.98px) { 
	   .spot {
	  font-size: 1.2em;
  } 
   }
  
  </style>
  
  
  <page-query>
  query {
	allProduct (limit: 20, sortBy: "salesRank", order: ASC, skip: 220) {
	  edges {
		node {
		  id
		  title
		  price
		  brand
		  discount
		  salesRank
		  listPrice
		  path
		  uRL       
		  images {
			uRL
		  }
		}
	  }
	}
  }
  </page-query>
  
  <script>
  export default {
	metaInfo: {
	  title: "Gaming PC products always available at the best prices on Amazon.co.uk"
	},
  
	methods: {
	  getSrc(images) {
		const { uRL } = images;
		return images.uRL[1] || images.uRL[0];
	  }
	},
  
	components: {
	  QFeaturedPosts: () => import("../queries/QFeaturedProd.vue")
	},
	filters: {
	  strippedContent: function(string) {
		return string.replace(/<\/?[^>]+>/gi, " ");
	  }
	},
	computed: {
	  affiliate: function() {
		return "&tag=devnewuk-21";
	  },
	  reviews: function() {
		return "#customerReviews";
	  }
	}
  };
  </script>
  
  