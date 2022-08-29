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
.pageContainer {
  place-self: center;
  width: 90%;
  place-items: center;
  margin-top: 10%;
}

.twentyTwoPt {
  font-size: 22px;
}
.projectDesc,
.projectLink {
  font-size: 16px;
  text-align: center;
}
.projectLink {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.projectCtrDsktp {
  grid-template-rows: 0.1 fr 1fr 0.1fr 0.5fr;
  min-height: 600px;
}

.twoLinksCtr,
.threeLinksCtr {
  display: grid;
  grid-auto-flow: column;
  place-self: center;
  place-items: center;
}
.twoLinksCtr {
  width: 80%;
}
.threeLinksCtr {
  width: 100%;
}

.projectCtrDsktp,
.projectCtrMbl {
  display: grid;
  place-items: center;
  border: 1px solid black;
  border-radius: 10px;
  place-self: center;
  box-shadow: 5px 5px lightgrey;
  padding: 10px;
}

.projectCtrMbl {
  height: 900px;
}
.appPicDesktop {
  width: 280px;
  height: 250px;
}
.appPicMbl {
  height: 350px;
  width:250px
}
.projectTitle {
  font-size: 20px;
  text-align: center;
}
.projectLink {
  font-size: 16px;
}
@media only screen and (min-width: 600px) {
  .projectLink {
    font-size: 18px;
  }
  .twoLinksCtr {
    width: 60%;
  }
  .projectDesc,
  .projectLink {
    font-size: 20px;
  }
  .projectTitle {
    font-size: 22px;
  }
  .appPicDesktop {
    width: 300px;
    height: 280px;
  }
  .appPicMbl{
      width:300px;
      height:280px
  }
  .projectCtrDsktp,
  .projectCtrMbl {
    padding: 20px;
    box-shadow: 5px 5px lightgrey;
    width: 400px;
  }
}
@media only screen and (min-width: 1050px) {
  .projectCtrDsktp,
  .projectCtrMbl {
    display: grid;
    place-items: center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 5px 5px lightgrey;
    width: 500px;
  }
  .thirtyPt {
    font-size: 30px;
  }
  .appPicDesktop {
    width: 400px;
    height:280px;
  }
  .pageContainer {
    margin-top: 80px;
  }
  .appPicMbl {
    height: 554px;
  }
  .projectTitle {
    font-size: 24px;
  }
  .projectCtrMbl {
    height: 1050px;
    grid-template-rows: 0.25fr 1.5fr 0.25fr 0.5fr;
  }
  .projectLink:hover {
    color: #735290;
  }
}
</style>
