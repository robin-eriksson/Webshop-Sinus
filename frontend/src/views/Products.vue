<template>

  <div class="products">
    <div class="product-list">
      <a class="product-item" v-for="product in productList" :key="product.id">
        <a class="overlayButton1" @click="viewOverlay(product)"></a>
        <a class="overlayButton2" @click="viewOverlay(product)"></a>
        <Product v-bind:product="product" />
      </a>
    </div>
    <transition name="fade" appear>
      <div class="overlay-container">
        <div
          class="modal-overlay"
          @click="showModal = !showModal"
          v-if="showModal"
        ></div>

        <ProductView
          class="productview-box"
          v-bind:viewProduct="viewProduct"
          v-if="showModal"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Product from "@/components/Product";
import ProductView from "@/components/ProductView";


export default {
  data() {
    return {
      showModal: false,
      viewProduct: this.Product,
     
    };
  },
  methods: {
    viewOverlay(product) {
      this.showModal = true;
      this.viewProduct = product;
    },
  },
  components: { Product, ProductView },

  // async mounted() {
  //   this.products = await API.fetchProducts();
  // },
  computed: {
     productList(){
      return this.$store.state.productList
    }
    
  },
  async created(){
      await this.$store.dispatch('fetchProducts')
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";

.modal-overlay {
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.85);
}
.productview-box {
  position: absolute, sticky;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  min-width: 1000px;
 
}

.overlayButton1 {
  cursor: pointer;
  width: 275px;
  height: 330px;
  margin-top: 60px;
  position: absolute;
 
}
.overlayButton2 {
  cursor: pointer;
  width: 225px;
  height: 370px;
  margin-top: 5px;
  position: absolute;
  
}
.overlay-container{
  display:flex;
}
</style>
