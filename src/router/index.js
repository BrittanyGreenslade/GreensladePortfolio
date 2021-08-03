import Vue from "vue";
import VueRouter from "vue-router";
import WorksPage from "../views/WorksPage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/works",
    name: "Works",
    component: WorksPage,
  },
  {
    path: "/",
    name: "Contact",
    component: ContactPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  //this is to make our router-links scroll within the page rather than between pagess
  scrollBehavior(to) {
    let position = {};
    if (to.hash) {
      position.selector = to.hash;
      //ensures top of about section isn't cut off when navigating to the top
      if (to.hash === "#about") {
        position.offset = { y: 250 };
      }
      if (document.querySelector(to.hash)) {
        return position;
      }
    }
  },
});

export default router;
