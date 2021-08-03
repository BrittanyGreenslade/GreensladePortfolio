<template>
  <div id="headerContainer">
    <div id="nameAndLogo">
      <img class="logo" src="../assets/bLogo.png" alt="b logo" />
      <h2 id="name">Brittany Greenslade</h2>
    </div>
    <div id="nav">
      <router-link :to="{ path: '/', hash: '#about' }">About</router-link>
      <router-link to="/works">Works</router-link>
      <router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link>
      <a target="_blank" href="https://www.linkedin.com/in/brittany-greenslade/"
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
  width: 450px;
  height: 100px;
  grid-template-columns: 1fr 4fr;
  margin-left: 20px;
  margin-top: 10px;
}

#name {
  align-self: center;
  justify-self: start;
  margin-bottom: 10px;
  font-size: 26px;
}
#headerContainer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  max-height: 15vh;
  position: fixed;
  background: white;
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
  margin-right: 30px;
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
