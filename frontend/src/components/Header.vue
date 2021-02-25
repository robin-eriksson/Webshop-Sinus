<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <a href="#"><img src="@/assets/sinus-logo.svg" /> </a>
      </div>
      <div class="menu">
        <ul>
        <a @click="goToProducts" >  <li class="nav-item">Products</li></a> 
          <a @click="goToRegister" v-if="!$store.state.loggedIn" > <li class="nav-item">Register</li></a> 
          <!-- Register/MyAccount -->
          <li class="nav-item" >
           <div class="login-nav-text" v-if="!$store.state.loggedIn" @click="openLogin()">Login</div> 
 
            <div>
              <transition name="fade" appear>
                <Login class="login" v-if="$store.state.showLogin" />
              </transition>
            </div>
            <a class="my-profile" v-if="$store.state.loggedIn" @click="goToMyProfile()">
               <img class="profile-icon" src="@/assets/profile-image.png" />
            </a>
          </li>
          <li class="nav-cart">
            <transition name="fade" appear>
              <div class="cart-counter" v-if="cartProducts.length > 0">
                {{ cartProducts.length }}
              </div>
            </transition>
            <a @click="openCart()">
              <img class="cart-icon" src="@/assets/cart-icon.png" />
            </a>
            <transition name="fade" appear>
              <Cart class="cart" v-if="$store.state.showCart" />
            </transition>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Cart from "@/components/Cart";
import Login from "@/components/Login";
export default {
  components: { Cart, Login },
  data() {
    return {
     
      

      products: [],
      counter: 0,
    };
  },
  methods: {

    async goToMyProfile(){
   this.$store.commit('CLOSEPOPUPS')
   await this.$store.dispatch('fetchUserOrders')
    this.$router.push('/myprofile')
  },
goToRegister(){
   this.$store.commit('CLOSEPOPUPS')
    this.$router.push('/register')
  },
  goToProducts(){
     this.$store.commit('CLOSEPOPUPS')
    this.$router.push('/products')
  },
    openCart() {
       this.$store.commit('MANAGECARTPOPUP')
      
       
    },
     openLogin() {
      this.$store.commit('MANAGELOGINPOPUP')
       
    },
    cartCounter() {},
  },
  computed: {
    cartProducts() {
      return this.$store.state.cartProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
.header {
  min-width: 880px;
  position: relative;
}
.cart-counter {
  background-color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 15px;
  position: absolute;
  text-align: center;
  margin-left: 25px;
  line-height: 14px;
  font-family: Open sans;
  font-weight: bold;
  padding-bottom: -10px;
  vertical-align: middle;
}
.header .navbar {
  width: auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.logo img {
  max-width: 250px;
  min-width: 200px;
}
.menu ul {
  display: flex;
  align-items: center;
}
.menu .nav-item {
  list-style-type: none;
  padding: 0 25px;
  cursor: pointer;
  font-size: 19px;
  font-family: Open sans;
}
.nav-cart{
  padding: 0 0 0 25px;
}
.cart-icon {
  width: 44px;
  margin-top: 7px;
  cursor:pointer;
}
.profile-icon {
  width: 40px;
  margin-top: 7px;
  margin-right: -20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s;
}
.cart {
  margin-left: -130px;
  z-index: 3;
}
.login{
  margin-top:13px ;
  margin-left: -130px;
   z-index: 3;
}
.login-nav-text{
   font-family: Open sans;
}
</style>
