<template>
  <div class="products">
    <b-container>
      <h1>Lista de productos</h1>
      <br/>
      <div class="list">
          <b-row>
            <Card v-for="data in products" v-bind:key="data.title" v-bind:data="data" />
          </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import productJson from '@/data/products';
import Card from '@/components/products/Card.vue';
export default {
  name: 'Products',
  components: {
    Card
  },
  data: function(){
      return{
          products: productJson
      }
  },
}
</script>

