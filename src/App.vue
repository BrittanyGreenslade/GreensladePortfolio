<template>
  <div id="app">
    <page-header class="header" />
    <about-page v-if="routePath == `/`" />
    <contact-page v-if="routePath == `/`" />
    <works-page v-if="routePath == `/works`" />
    <page-footer />
  </div>
</template>
<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
import AboutPage from "./views/AboutPage.vue";
import WorksPage from "./views/WorksPage.vue";
import ContactPage from "./views/ContactPage.vue";
export default {
  components: {
    PageFooter,
    WorksPage,
    AboutPage,
    PageHeader,
    ContactPage,
  },
  computed: {
    routePath() {
      return this.$route.path;
    },
  },
};
</script>
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
#app > div {
  display: grid;
}
body {
  font-family: "Poppins", sans-serif;
}
.header {
  position: fixed;
  background: white;
}
.appPicDesktop {
  width: 400px;
}
.appPicMbl {
  height: 554px;
}
.pageContainer {
  place-self: center;
  width: 90%;
  place-items: center;
  margin-top: 10%;
}

.thirtyPt {
  font-size: 30px;
}
.twentyTwoPt {
  font-size: 22px;
}
.projectDesc,
.projectLink {
  font-size: 20px;
  text-align: center;
}
.projectLink {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.projectLink:hover {
  color: #735290;
}
.projectCtrDsktp,
.projectCtrMbl {
  display: grid;
  place-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 5px 5px lightgrey;
}
.projectCtrDsktp {
  grid-template-rows: 0.1 fr 1fr 0.1fr 0.5fr;
  width: 500px;
  min-height: 500px;
}
.projectCtrMbl {
  grid-template-rows: 0.25fr 1.5fr 0.25fr 0.5fr;
  min-height: 980px;
  width: 600px;
}
.twoLinksCtr,
.threeLinksCtr {
  display: grid;
  grid-auto-flow: column;
  place-self: center;
  place-items: center;
}
.twoLinksCtr {
  width: 60%;
}
.threeLinksCtr {
  width: 100%;
}
</style>
