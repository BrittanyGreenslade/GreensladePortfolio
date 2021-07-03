<template>
  <div>
  <p>Brittany Greenslade</p>
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contact</router-link>
  <router-link to="/works">Projects</router-link>
  </div>
</template>

<script>
  export default {
    name:"Header",
  }
</script>

<style scoped>
p{
/* check if this works */
font-family: 'Poppins', sans-serif;
font-weight: 500;
}
</style>