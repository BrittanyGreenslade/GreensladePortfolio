<template>
  <div id="app">
    <div id="nav">
      <page-header />
      <about />
      <contact />
    </div>
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
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
