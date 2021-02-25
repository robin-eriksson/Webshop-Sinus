<template>
  <div class="cart-box">
    <ul class="cart-list" v-for="product in products" :key="product._id">
      <li class="cart-item">
        <img class="thumbnail" :src="require('@/assets/' + product.imgFile)" />

        <ul class="item-infos">
          <li class="title">{{ product.title }}</li>
          <li class="short">{{ product.shortDesc }}</li>
          <li class="numb">{{ product.serial }}</li>
        </ul>

        <h3 class="item-price">{{ product.price }}</h3>
      </li>
    </ul>
    <div class="line"></div>
    <div class="bottom-cart">
      <div class="total-price">
        <h4 class="total-price-text">TOTAL</h4>
        <h4 class="total-price-numb">{{ totalPrice }}</h4>
      </div>
      <a class="to-cart-btn" @click="goToMakeOrder">Go to cart</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numb: 0,
    };
  },
  methods: {
    goToMakeOrder() {
      this.$store.commit("CLOSEPOPUPS");
      this.$router.push("/makeorder");
    },
  },
  computed: {
    products() {
      return this.$store.state.cartProducts;
    },
    totalPrice() {
      this.$store.commit('CALCULATETOTALCOST');
      return this.$store.state.totalPriceCart;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
.cart-box {
  width: 300px;
  height: auto;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-size: 10px;
  font-family: bold;
  text-align: center;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.15);
  cursor: default;
}

li {
  list-style-type: none;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 35px 5px 10px;
}
.cart-list {
  margin-top: 10px;
}
.to-cart-btn {
  background-color: black;
  color: #fff;
  padding: 8px 20px;
  border-radius: 30px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  padding-right: 20px;
  cursor:pointer;
}

.thumbnail {
  width: 50px;
  height: 50px;
  background-color: #e5e5e5;
  border-radius: 15%;
  
}
.title {
  font-family: Open sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
}
.short {
  color: rgba(0, 0, 0, 0.6);

  font-family: Open Sans;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  margin-top: -5px;
}
.numb {
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
}
.item-infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: -40px;
}
.item-price {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  align-self: flex-start;

  margin-top: 3px;
}

.total-price {
  display: flex;
  justify-content: space-between;
  margin: 15px 25px 30px 25px;
  margin-bottom: 50px;
}
.total-price-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: #000000;
}
.total-price-numb {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}
.line {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10px 25px 0px 25px;
}
.bottom-cart {
  height: 140px;
}
</style>
