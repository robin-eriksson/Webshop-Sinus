import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
   state: {
    showCart: false,
    showLogin: false,
  loggedIn: false,
  token: "",
  loggedInUser: {},
  userOrders:[],
  cartProducts: [],
  cartProductsID: [],
  productList: [],
  totalPriceCart: 0,
  },
  mutations: {
  
    ADDTOCART(state, newProduct){
      state.cartProducts.push(newProduct)
    },
    EMPTYCART(state) {
      state.cartProducts = []
    },
    CART(state){
      state.showCart = true;
    },
    CLOSEPOPUPS(state){
      state.showLogin = false;
      state.showCart = false;
    },
    GETPRODUCTS(state, products){
      state.productList = products
    },
    GETUSERORDERS(state, products)
    {
      state.userOrders = products;
    },
    LOGIN(state, user){

      state.token = user.token
      state.loggedInUser = user
      state.loggedIn = true
    },
    LOGOUT(state){
      state.token = ""
      state.loggedInUser = {}
      state.loggedIn = false
    },
    MANAGECARTPOPUP(state){
      state.showCart = !state.showCart;
      state.showLogin = false;
    },
    MANAGELOGINPOPUP(state){
      state.showLogin = !state.showLogin;
      state.showCart = false;
    },

    REMOVEFROMCART(state,index){
  
      state.cartProducts.splice(index,1)
    },
    CALCULATETOTALCOST(state){
      state.totalPriceCart = 0;
      state.cartProducts.forEach((product) => {
        state.totalPriceCart += product.price;
      });
    },
    SENDINORDER(state, order){
    for(const product of order)
    {state.cartProductsID.push(product._id)}
    }
  },
  actions: {

    async makeOrder(context, order){

      await axios.post('http://localhost:5000/api/orders/',{items: order}, {
        headers: {Authorization: context.state.token}})
    },
    async fetchProducts(context){
      await axios.get('http://localhost:5000/api/products/').then(
        (result) => context.commit('GETPRODUCTS',result.data))
    },
    async fetchUser(context,user) {
      await axios.post('http://localhost:5000/api/auth/', {email: user.email, password: user.password}).then(
        (response) => context.commit('LOGIN', response.data))
    },
    async fetchUserOrders(context) {
      await axios.get('http://localhost:5000/api/orders/', {
        headers: {Authorization: context.state.token}}).then(
          (response) => context.commit('GETUSERORDERS', response.data))
    },
    async registerUser(_, user){
      await axios.post('http://localhost:5000/api/register/', {
        email: user.email,   
        name: user.name, 
        password: user.password,
        repeatPassword: user.password,
        adress:{
          city: user.adress.city,
          street: user.adress.street,
          zip: user.adress.zip,
        }
      })
    },
  },
  modules: {
  },
  
  getters:{
  
   } 
  }
)
