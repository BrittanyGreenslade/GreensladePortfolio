<template>
  <div id="footer">
    <!-- <a href="">top</a> -->
    <!-- <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/works">Projects</router-link> -->
    <!-- <a href="https://www.linkedin.com/in/brittany-greenslade/">LinkedIn</a> -->
    <p>2023 Brittany Greenslade</p>
  </div>
</template>

<script>
export default {
  name: "page-footer",
};
</script>

<style scoped>
#footer {
  place-self: center;
  /* border-top: 1px solid black; */
  width: 100%;
  text-align: center;
  height: 10vh;
  display: grid;
  place-items: center;
  border-top: 1px solid black;
}
@media only screen and (min-width: 600px) {
  #footer {
    border: none;
  }
}
</style>
