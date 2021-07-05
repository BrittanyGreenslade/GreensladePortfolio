<template>
  <div>
    <img src="../assets/bLogo.png" alt="b logo" />
    <p>Brittany Greenslade</p>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/works">Projects</router-link>
    <a href="https://www.linkedin.com/in/brittany-greenslade-1946961aa/"
      >LinkedIn</a
    >
  </div>
</template>

<script>
export default {
  name: "page-header",
};
</script>

<style scoped>
p {
  /* check if this works */
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
img {
  width: 50px;
}
</style>
