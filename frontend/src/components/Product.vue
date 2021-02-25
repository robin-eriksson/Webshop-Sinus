<template>
    <div class="product">
    <header class="top">
      <h3 class="title">{{product.title}}</h3>
      <a class="icon"
       @click="addToCart(product)"
      ><img class="icon-bag" src="@/assets/icon-bag-black.svg"/>
      </a>
    </header>
    <div class="short-desc">{{product.shortDesc}}</div>
    <div class="body">
      <div><img class="image" :src="require('@/assets/'+product.imgFile)"/></div>
    </div>
    <div class="price-tag">
      <h4 class="price">{{product.price}}</h4>
      <p class="currency">SEK</p>
    </div>
  </div>

</template>

<script>
export default {
props: {
    product: Object,
  },
  methods:{
    addToCart(product){
      this.$store.commit('ADDTOCART', product)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
.product {
  background-color: #fff;
  width: 283px;
  height: 380px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Open Sans;
  margin:5px;
  
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-family: Open sans;
  font-style: normal;
  font-weight: bold;
}
.icon{
  background-color: #eeeeee;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon img {
  width: 15px;
}
.image {
  max-width: 240px;
  align-self: flex-end;
  margin-bottom: -6rem;
}
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.short-desc {
  color: rgba(0, 0, 0, 0.6);

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  margin-top: -25px;
}
.price-tag {
  background-color: black;
  color: #fff;
  padding: 8px 20px;
  border-radius: 30px;
  display: flex;
  width: 105px;
  font-family: Open Sans;
  margin-left: -13px;
  justify-content: center;


  .price {
    font-family: Open Sans;
    font-weight: 700;
    font-size: 20px;
     margin-right: 5px;
  }
  .currency {
    font-family: Open Sans;
    font-weight: 400;
    font-size: 12px;
  }
 
}
</style>