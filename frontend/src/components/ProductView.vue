<template>
  <div ref="overlay-box" class="product-view">
    <div class="left-image">
      <img class="image-view" :src="require('@/assets/'+viewProduct.imgFile)" />
    </div>
    <div class="right-side">
      <h3 class="title-view">{{viewProduct.title}}</h3>
      <h5 class="short-desc-view">{{viewProduct.shortDesc}}</h5>
      <p class="description-view">
        {{viewProduct.longDesc}}
      </p>
      <h4 class="price-view">{{viewProduct.price}} sek</h4>
      <a class="btn-view" @click="addToCart(viewProduct)">
        <img class="icon-view" src="@/assets/icon-bag-white.svg" />
        <h3 class="btn-view-text">Add to cart</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
     viewProduct: Object,
  },
   methods:{
    addToCart(product){
      this.$store.commit('ADDTOCART', product)
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
.product-view {
  width: 1000px;
  height: 600px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}

.left-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e5e5e5;
}
.image-view {
  max-width: 500px;
  padding-top: 100px;
  
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px;
}
.title-view {
  font-family: Open sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 10px;
}
.short-desc-view {
  color: rgba(0, 0, 0, 0.6);
  font-size: 20px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 50px;
}
.description-view {
  color: rgba(0, 0, 0, 0.6);
  font-family: Open Sans;
  margin-bottom: 20px;
}
.price-view {
  font-family: Open Sans;
  font-weight: 700;
  font-size: 24px;
}
.btn-view {
  align-self: center;
  background-color: black;
  color: #fff;
  padding: 8px 20px;
  border-radius: 30px;
  width: 170px;
  cursor:pointer;
  
  display: flex;
 justify-content: space-evenly;
  padding: 10px;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  font-size: 15px;
}
.icon-view{
    max-height: 22px;
}
.btn-view-text{
font-family: Open Sans;
font-weight: 500;
}
</style>
