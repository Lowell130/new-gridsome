<template>

  <header>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="d-flex justify-content-center">

        
        <b-navbar-brand href="/">
           <img src="/img/logo.svg" alt="" width="45" height="45" class="mx-auto spot">{{ siteName }}
        </b-navbar-brand>


  </b-navbar>
  </header>












  
</template>

<style scoped>
.navbar-brand {
    display: grid;
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

