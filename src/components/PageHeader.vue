<template>
  <div id="headerContainer">
    <div id="nameAndLogo">
      <img class="logo" src="../assets/bLogo.png" alt="b logo" />
      <h2 id="name">Brittany Greenslade</h2>
    </div>
    <div id="nav">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/works">Projects</router-link>
      <a href="https://www.linkedin.com/in/brittany-greenslade/">LinkedIn</a>
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
  width: 450px;
  grid-template-columns: 1fr 4fr;
}
#name {
  align-self: end;
  justify-self: start;
  margin-bottom: 15px;
}
#headerContainer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 95%;
  place-self: center;
}
.logo {
  width: 80px;
}
#nav {
  justify-self: end;
  align-self: center;
  display: grid;
  grid-auto-flow: column;
  column-gap: 10px;
}
#nav a {
  font-size: 20px;
  text-decoration: none;
  color: black;
}
#nav a:hover {
  color: #735290;
  font-weight: bold;
}
</style>
