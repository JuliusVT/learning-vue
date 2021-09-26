<template>
    <div class="product">
        <b-container>
            <Detail v-bind:data="value" />
        </b-container>
    </div>
</template>
<script>
import productJson from '@/data/products';
import Detail from '@/components/products/Detail.vue';
export default {
    name: 'Product',
    components: {
        Detail
    },
    data:function() {
        return {
            product: productJson,
            value:{}
        }
    },
    computed: {
        idParameter(){ return parseInt(this.$route.params.id); },
    },
    created: function(){
        this.product.forEach(v => {
            if(v.id === this.idParameter){
                this.value = v;
            }            
        });
    }
}
</script>