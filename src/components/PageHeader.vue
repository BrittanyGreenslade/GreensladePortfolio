<template>
  <div id="headerContainer">
    <div id="nameAndLogo">
      <img src="../assets/bLogo.png" alt="b logo" />
      <p id="name">Brittany Greenslade</p>
    </div>
    <div id="nav">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/works">Projects</router-link>
      <a href="https://www.linkedin.com/in/brittany-greenslade-1946961aa/"
        >LinkedIn</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
};
</script>

<style scoped>
#nameAndLogo {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
#name {
  align-self: end;
}
#headerContainer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 95%;
}
img {
  width: 50px;
}
#nav {
  place-self: end;
  display: grid;
  grid-auto-flow: column;
  column-gap: 10px;
}
#nav a {
  text-decoration: none;
  color: black;
}
#nav a:hover {
  color: #735290;
  font-weight: bold;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
