<template>
  <div class="profile-box">
    <h2>My Profile</h2>
    <div>
    <div class="profile-details">
      <div class="left-profile">
        <img class="profile-image" src="@/assets/profile-image.png" />
        <h4 class="profile-name">Name: {{ user.name }}</h4>
        <h4 class="profile-email">Email: {{ user.email }}</h4>
       
      </div>

      <div class="right-profile">
        <h4 class="profile-email">Street:{{ user.adress.street }}</h4>
        <h4 class="profile-email">Zip code:{{ user.adress.zip }}</h4>
        <h4 class="profile-email">City:{{ user.adress.city }}</h4>
       
      </div>
     
    </div>
     <div class="profile-buttons" >
          <a class="logout-btn" @click="logout">Log out</a>
         <a class="edit-btn" >Edit profile</a>
      </div>
</div>
    <h2>Order history</h2>
    <div class="order-history">
      <ul class="orders-list" v-for="order in userOrders" :key="order._id">
        <li class="order-item">
          <div class="item-box">
            <h3>Order ID:</h3>
            <h4>{{ order._id }}</h4>
          </div>
          <div class="item-box">
             <h4><b>Status: </b>{{ order.status }}</h4>
            <h4><b>Total products: </b>{{ order.items.length }}</h4>
            <h4><b>Total price: </b>{{ order.orderValue }} kr</h4>
           
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.loggedInUser.user;
    },
    userOrders() {
      return this.$store.state.userOrders;
    },
  },
  methods: {
    async getOrders() {
      this.tabToggle = true;
      await this.$store.dispatch("fetchUserOrders");
    },
     logout() {
     this.$store.commit('LOGOUT')
      this.$router.push('/products')
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
.profile-box {
  display: flex;
  flex-direction: column;
}
h2 {
  font-family: Open Sans;
  font-weight: 600;
  margin-bottom: 10px;
}
h3 {
  font-family: Open Sans;
  font-weight: 600;
}
h4 {
  font-family: Open Sans;
  font-weight: 500;
}
.profile-image {
  max-width: 100px;
  align-self: center;
  margin-bottom: 10px;
}
.profile-details {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #404040;
  color: #fff;
  padding: 20px;
  width: auto;
  height: 250px;
  margin-bottom: 10px;

  h4 {
    font-family: Open Sans;
    font-weight: 500;
  }
}
.order-history {
  background-color: #fff;
  width: auto;
}
.right-profile {
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  text-align: c;
  flex: 1;
}
.left-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  flex: 1;
  h4{
    margin: 0px 0 10px 0;

  }
}
.edit-btn {
  background-color: black;
  color: #fff;
  padding: 10px 20px;
  border-radius: 2px;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  width: 150px;
  align-self: center;
  
}
.logout-btn {
  background-color: rgb(110, 38, 38);
  color: #fff;
  
  padding: 10px 20px;
  border-radius: 2px;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  width: 150px;
  cursor:pointer;
  
}
.orders-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.order-item {
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  
  padding: 10px 20px;
  border-radius: 2px;
  min-height: 100px;

}
.item-box{
  flex: 1,
}
.profile-buttons{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}


</style>
