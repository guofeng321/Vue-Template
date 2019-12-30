<template>
  <div id="app">
    <p class="testcolor">哈哈哈</p>  
    <p>
      <span @click="openp('shopList')">aaa</span>
      <span @click="openp1('shopList1')">bbb</span>
    </p>
    <transition name="slide-left">
    <router-view></router-view>
     </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    openp(name){
      console.log(this.$router, name);
      this.$router.push({
        name: 'shopList1',
      })
    },
    openp1(name){
      console.log(this.$router, name);
      this.$router.push({
        name: 'shopList',
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.testcolor{
  color: @color1;
}

// .slide-fade{
//   position: absolute;left:0;right: 0;
// }
// .slide-fade-enter-active {
//   transition: all 1.2s ease;
// }
// .slide-fade-leave-active {

//   transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
// }
// .slide-fade-enter, .slide-fade-leave-to
// {
//   left:0;right: 0;
//   transform: translateX(50px);
//   opacity: 0;
// }


.child-view {
    position: absolute;
    width:100%;
    transition: all 1.4s ;
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
</style>
