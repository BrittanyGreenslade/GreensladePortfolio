<template>
  <div id="app">
    <page-header />
    <about />
    <contact />
    <router-view />
    <page-footer />
  </div>
</template>
<script>
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

export default {
  components: {
    PageHeader,
    About,
    Contact,
    PageFooter,
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
#app {
  min-height: 100vh;
  width: 100%;
  display: grid;
}
body {
  font-family: "Poppins", sans-serif;
}

.pageContainer {
  margin-top: 6%;
  place-self: center;
  width: 90%;
}
</style>
