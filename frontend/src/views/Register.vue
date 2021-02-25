<template>
  <div class="register">
    <div class="reg-img-container">
      <p>Join the rolling family</p>
      <img class="reg-image" src="@/assets/skate-hero-1.jpg" />
    </div>
    <div class="reg-bottom">
      <div class="reg-text">
        <h3>
          Cowabunga
        </h3>
        <p>
          <strong>
            Skate ipsum dolor sit amet, rip grip hip grab 540 pivot nose
            Tracker. Gnar bucket Skateboard Shuffle casper slide 180 boneless
            layback hardware nosebone.
          </strong>
        </p>

        <p>
          Skate ipsum dolor sit amet, rip grip hip grab 540 pivot nose Tracker.
          Gnar bucket Skateboard Shuffle casper slide 180 boneless layback
          hardware nosebone.
        </p>
      </div>
      <div class="reg-input">
        <h3>
          Register
        </h3>
        <label>Name</label>
        <input v-model="newUser.name" />
        <label>Email</label>
        <input v-model="newUser.email" />
        <label>Password</label>
        <input type="password" v-model="newUser.password" />
        <label>Confirm password</label>
        <input type="password" v-model="confirmPassword" />
        <a class="reg-btn" @click="registerNewUser">Register</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        adress: {
          street: "",
          zip: "",
          city: "",
        },
      },
      confirmPassword: "",
    };
  },
  methods: {
    async registerNewUser() {
      if (this.newUser.password == this.confirmPassword) {
        await this.$store.dispatch("registerUser", this.newUser).then(() => {
          this.$router.push("/products");
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
.reg-img-container {
  height: 425px;
  position: relative;
  overflow: hidden;

  p {
    font-family: Open sans;
    color: white;
    font-size: 40px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
}
.reg-image {
  display: block;
  width: 100%;
  position: static;
  top: 12%;
  transform: translateY(-12%);
}

.reg-bottom {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.reg-text {
  margin-right: 10px;
}
input {
  padding: 6px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  border-radius: 2px;
  background-color: transparent;
}
.reg-input {
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: Open sans;
    margin: 30px 0 0px 0;
  }
  label {
    color: rgba(0, 0, 0, 0.6);

    font-family: Open Sans;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
  }
}
.reg-text h3 {
  font-family: Open sans;
  margin: 30px 0 15px 0;
}
.reg-text p {
  color: rgba(0, 0, 0, 0.6);

  font-family: Open Sans;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  margin: 0px 0 20px 0;
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
}
</style>
