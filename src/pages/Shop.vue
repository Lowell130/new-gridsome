<template>
  <main class="container px-4">
    
    <div> <b-button v-b-modal.modal-1>{{ cart.length }} in cart</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
      <h1>Carrello</h1>   
      <div v-for="(item, index) in cart" :key="index">
        <p>{{ item.name }} - {{ item.price }}</p>
        <!-- <button @click="addToCart(item)" class="btn btn-info mb-4">
          Add alla sacca
        </button> -->
      
        <button @click="removeToCart(item)" class="btn btn-info mb-4">
          Remove
        </button>
      </div>  
  </b-modal></div>
  <button @click="goCart('item')" class="btn btn-danger">item</button>


    <button @click="goCart('cart')" class="btn btn-warning">view cart</button>
   <hr />

  <div>
 
</div>
   


   

   
    <!-- <div v-if="page === 'item'"> -->
      <h1>Lista prodotti</h1>
      <div v-for="(item, index) in items" :key="index">
        <p>{{ item.name }} - {{ item.price }}</p>
        <button @click="addToCart(item)" class="btn btn-info mb-4">
          Add alla sacca
        </button>
        <br />
        <!-- <button @click="removeToCart(item)" class="btn btn-info mb-4">
          Remove
        </button> -->
      </div>
    <!-- </div> -->

  </main>
</template>

<script>
export default {
  data: () => {
    return {
        
    //   page: "item",
      cart: [],
      items: [
        {
          name: "porcodio",
          price: "9,00€",
        },
        {
          name: "cristo in croce",
          price: "4,00€",
        },
        {
          name: "la madonna",
          price: "3,00€",
        },
      ],
    };
  },
  methods: {
    addToCart(item) {
      //  this.cart.push(item);
      if (this.cart.indexOf(item) === -1) {
        this.cart.push(item);     
      }
    },
    removeToCart(item) {
      this.cart.splice(this.cart.indexOf(item), 1);      
    },
 

    // goCart(page) {
    //   this.page = page;
    // },
   
  },
};
</script>


