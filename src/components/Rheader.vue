<template>

  <!-- <header class="fixed-top" style="">
  <b-navbar toggleable="lg" type="dark" variant="dark">        
        <b-navbar-brand href="/index2/">
           <img src="/img/logo.svg" alt="" width="45" height="45" class="mx-auto spot">siteName
        </b-navbar-brand>
  </b-navbar>
  </header> -->

  <header>
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <div class="d-flex">
    
      <!-- <div class="bookmark"><i class="fas fa-heart"></i></div> -->
    </div>
  </div>
</nav>
  
</header>












  
</template>

<style scoped>

.bookmark {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 900;
    background: #8bc34a;
    line-height: 50px;
    text-align: center;
    color: white;
}

</style>


<script>
export default {
 data() {
    return {
      siteName:process.env.GRIDSOME_SITE_NAME    
    };
  },
  name: "Rheader",
};

</script>

