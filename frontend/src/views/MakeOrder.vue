<template>
  <div class="makeorder">
    <h1>Pay</h1>

    <div class="make-order-box">
      <div class="left-right-box">
        <h2>Your order</h2>
        <div class="order-list">
          <ul
            class="cart-list"
            v-for="(product, index) in products"
            :key="product.title"
          >
            <li class="cart-item">
              <img
                class="thumbnail"
                :src="require('@/assets/' + product.imgFile)"
              />

              <ul class="item-infos">
                <li class="title">{{ product.title }}</li>
                <li class="short">{{ product.shortDesc }}</li>
                <li class="numb">{{ product.serial }}</li>
              </ul>
              <a class="remove-cartitem-btn" @click="removeCartItem(index)">Remove Item</a>
              <h3 class="item-price">{{ product.price }}</h3>
            </li>
          </ul>
          <div class="line"></div>
          <div class="bottom-cart">
            <div class="total-price">
              <h4 class="total-price-text">TOTAL</h4>
              <h4 class="total-price-numb">{{ totalPrice }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="input-details">
        <div class="left-right-box">
          <div class="left-right-box" v-if="$store.state.loggedIn">
            <h2>Your details</h2>
            <label>Name</label>
            <input v-model="user.name" type="text" />
            <label>Street</label>
            <input v-model="user.street" type="text" />
            <div class="two-input-box">
              <div>
                <label>Zip code</label>
                <input v-model="user.zip" type="text" />
              </div>
              <div>
                <label>City</label>
                <input v-model="user.city" type="text" />
              </div>
            </div>
          </div>
          <div class="left-right-box" v-else>
            <h2>Your details</h2>
            <label>Name</label>
            <input type="text" />
            <label>Street</label>
            <input type="text" />
            <div class="two-input-box">
              <div>
                <label>Zip code</label>
                <input type="text" />
              </div>
              <div>
                <label>City</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <h2>Payment</h2>
          <label>Card Owner</label>
          <input type="text" />
          <label>Card number</label>
          <input type="text" />
          <div class="two-input-box">
            <div>
              <label>Valid until</label>
              <input type="text" />
            </div>
            <div>
              <label>CVV</label>
              <input type="text" />
            </div>
          </div>
          <a class="reg-btn" @click="makeOrder()">Submit Order</a>
        </div>
      </div>
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
  computed: {
    products() {
      return this.$store.state.cartProducts;
    },
    totalPrice() {
     this.$store.commit('CALCULATETOTALCOST');
      return this.$store.state.totalPriceCart;
    },

    user() {
      return this.$store.state.loggedInUser.user;
    },
  },
  methods: {
    async makeOrder() {
      this.$store.commit("SENDINORDER", this.$store.state.cartProducts);
      await this.$store.dispatch("makeOrder", this.$store.state.cartProductsID);
      this.$store.commit("EMPTYCART");

      this.$router.push("/orderdone");
    },
     removeCartItem(index) {
     this.$store.commit('REMOVEFROMCART', index)
      this.$store.commit('CALCULATETOTALCOST')
     
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
.cart-item {
  margin-top: 10px;
}
.make-order-box {
  display: flex;
}
.left-right-box {
  display: flex;
  flex-direction: column;
}
.order-list {
  background-color: white;
  min-width: 450px;
  height: 500px;
}
.input-details {
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 30px;

  h3 {
    font-family: Open sans;
    margin: 0px 0 0px 0;
  }
  label {
    color: rgba(0, 0, 0, 0.6);

    font-family: Open Sans;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
  }
}
input {
  padding: 6px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  border-radius: 2px;
  background-color: transparent;
  min-width: 190px;

  margin-bottom: 15px;
}
h2 {
  margin: 15px 0 15px 0;
}
.reg-btn {
  background-color: black;

  color: #fff;
  padding: 10px 20px;
  border-radius: 2px;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
.two-input-box {
  display: flex;
  flex-direction: row;
}
.remove-cartitem-btn {
  background-color: rgb(110, 38, 38);
  color: #fff;
  padding: 8px 8px;
  border-radius: 2px;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  width: 90px;
  cursor: pointer;
}
</style>
