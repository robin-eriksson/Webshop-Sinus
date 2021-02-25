<template>
  <div class="orderdone">
    <div class="th-img-container">
      <p>Thank You!</p>
      <img class="thanks-image" src="@/assets/skate-hero-1.jpg" />
    </div>
    <div class="thanks-text">
      <h3>
        Your order is being processed, go out and skate while you wait
      </h3>
      <p>
        The X-wing was descended from Incom Corporation's Clone Wars–era
        starfighters, namely the Aggressive ReConnaissance-170 starfighter,
        Clone Z-95 Headhunter, and Z-95 Headhunter. Incom's engineers strove to
        build a well-rounded, hyperdrive-equipped snubfighter with no
        exploitable weakness.
      </p>
    </div>
    <a class="coolio-btn" @click="goToProducts">Go Home</a>
  </div>
</template>

<script>
export default {

   methods: {
    
goToProducts(){
    this.$router.push('/products')
  },
   }
};
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
.th-img-container {
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
.thanks-image {
  display: block;
  width: 97%;
  position: static;
   top: 12%;
  transform: translateY(-12%);
}
.thanks-text h3{
 font-family: Open sans;
 margin: 30px 0 15px 0;
}
.thanks-text p{
 color: rgba(0, 0, 0, 0.6);

  font-family: Open Sans;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  margin: 0px 0 20px 0;
}
.coolio-btn{
  background-color: black;
  
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: Open Sans;  
  font-size: 14px;
font-style: normal;
font-weight: 400;
text-decoration: none;
cursor: pointer;


}
</style>
