import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Works from "../views/Works.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
