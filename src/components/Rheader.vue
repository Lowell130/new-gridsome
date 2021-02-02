<template>
  <header>
  <b-navbar toggleable="lg" type="dark" variant="dark">

        
        <b-navbar-brand href="/">
           <img src="/img/logo.svg" alt="" width="35" height="35" class="mx-3 spot">VTC.co.uk
        </b-navbar-brand>

<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       
         <b-nav-item href="/" class="text-uppercase">Home</b-nav-item>
        <b-nav-item href="/product-list/" class="text-uppercase">all product</b-nav-item>
   
         <b-nav-item href="/search/" class="text-uppercase">search</b-nav-item>
      </b-navbar-nav>

     
    </b-collapse>
  </b-navbar>
  </header>
</template>




<script>
export default {
  name: "Rheader",
};
</script>
