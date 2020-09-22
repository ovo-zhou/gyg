<template>
    <div v-html="content" class="adDetail"></div>
</template>
<script>
export default {
    data(){
        return{
            content:""
        }
    },
    created(){
        this.content=this.$route.query.content
    }
}
</script>
<style scoped>
.adDetail{
    width: 1080px;
    margin: 0px auto;
    /* background: aqua; */
}
</style>