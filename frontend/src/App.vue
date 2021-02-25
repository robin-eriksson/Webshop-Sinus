<template>
  <div id="app">
  <Header />
  <router-view/>
   <Footer/>
  </div>
</template>

<script>

import Header from "@/components/Header";
 
import Footer from "@/components/Footer";
export default {
  data(){return{
 

  };
  },
  components: { Header, Footer},
  mounted(){
  
  },
  computed:{
    //  getDb(){
    // return this.$store.dispatch("dbProducts", {self: this})
    // },
  }
}
</script>

<style lang="scss">

</style>
