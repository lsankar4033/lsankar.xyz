import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Writing from "./views/Writing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "about",
      component: About
    },
    {
      path: "/writing",
      name: "writing",
      component: Writing
    }
  ]
});
