<template>
    <b-col sm="12" md="6" lg="4" class="mb-4">
        <router-link :to="'producto/' + data.id">
            <b-card>
                <!-- <b-card-img :src="data.img" /> -->
                <div :style="{'background-image':'url(' + data.img + ')','background-size':'contain','background-position':'center','background-repeat':'no-repeat','height':'250px'}"></div>
                <b-card-body :title="data.name" />    
            </b-card>
        </router-link>
    </b-col>
</template>
<script>
export default {
    name: 'Card',
    components:{
    },
    props: {
        data: Object,
    },
}
</script>
<style>
    .products img{
        width: 200px!important;
        align-self: center;
    }
    .products a{
        text-decoration: none!important;;
    }
</style>