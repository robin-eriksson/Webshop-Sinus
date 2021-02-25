<template>
  <div class="login-box">
    <input placeholder="Email" type="text" class="usr-input" v-model="user.email"/>
    <input placeholder="Password" type="password" class="psw-input" v-model="user.password" />
    <a class="login-btn" @click="Login">Login</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async Login() {
      
      await this.$store.dispatch("fetchUser", this.user);
      this.$store.commit('CLOSEPOPUPS')
    },
  },
};
</script>

<style lang="scss" scoped>
.login-box {
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  justify-content: flex-start;
  height: 180px;
  width: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  cursor: default;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.15);
}
.login-btn {
  background-color: black;
  color: #fff;
  padding: 8px 20px;
  border-radius: 30px;
  font-family: Open Sans;
  align-self: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  padding-right: 20px;
  cursor:pointer;
}
input {
  padding: 6px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  border-radius: 2px;
  background-color: transparent;
  margin: 20px 20px 0px 20px;
}
</style>
