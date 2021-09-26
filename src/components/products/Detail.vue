<template>
    <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
        <b-col md="6">
            <div :style="{'background-image':'url(../' + data.img + ')','background-size':'contain','background-position':'center','background-repeat':'no-repeat','height':'400px'}"></div>
        </b-col>
        <b-col md="6">
            <b-card-body :title="data.name">
            <b-card-text>
                {{data.description}}
            </b-card-text>
            </b-card-body>
        </b-col>
        </b-row>
    </b-card>
</template>
<script>
export default {
    name: 'Detail',
    components:{},
    props:{
        data: Object,
    }
}
</script>