<template>
  <div id="app">
    <page-header />
    <about />
    <contact />
    <router-view />
  </div>
</template>
<script>
import PageHeader from "./components/PageHeader.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

export default {
  components: {
    PageHeader,
    About,
    Contact,
  },
};
</script>
PageHeader
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
/* font-family: 'Poppins', sans-serif; */
* {
  padding: 0;
  margin: 0;
}
html {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
}
body {
  height: 100vh;
  display: grid;
  place-items: center;
  width: 100vw;
  font-family: "Poppins", sans-serif;
}

html {
  width: 100%;
}
body {
  width: 100%;
}

#app {
  height: 100vh;
  display: grid;
  width: 100%;
  display: grid;
  place-items: center;
}
.pageContainer {
  place-self: center;
  width: 90%;
}
</style>
