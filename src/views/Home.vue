<template>
  <div class="home">
    <b-container>
      <h1>Destacados</h1>
      <br/>
      <div class="list">
          <b-row>
            <Card v-for="data in featuredProducts" v-bind:key="data.title" v-bind:data="data" />
          </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/products/Card.vue'
import productJson from '@/data/products'
export default {
  name: 'Home',
  components: {
    Card
  },
  data: function(){
      return{
          products: productJson
      }
  },
  computed: {
     featuredProducts: function() {
       return this.products.filter(function(product) {
         return product.feature
     })
   }
  }
}
</script>
