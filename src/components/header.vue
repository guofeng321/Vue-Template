<template>
<div class="header-nav">
    <i v-on:click="back" v-if="isback">&#xe611;</i>
    <p>{{title}}</p>
</div>
</template>

<script>
export default {
    name: "Header",
 props: {
     title: {
			type: String,
			required: true
        },
     isback: {
         type: Boolean,
         default: true,
     }
 },
 methods: { 
     back(){
        this.$router.go(-1);//返回上一层
    },
 },
}
</script>

<style lang="scss" scoped>
    .header-nav{
        position: relative;
        line-height: 46px;
        background-color: #0ec6b4;
        color: #fff;
        i{
            position: absolute;
            left: 10px;
            top: 0;
            bottom: 0;
        }
        p{
            
            text-align: center;    
        }
    }
</style>
