import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Writing from "./views/Writing.vue";

import HereWeGoAgain from "./views/Writing/HereWeGoAgain.vue";

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
    },
    {
      path: "/here-we-go-again",
      name: "here-we-go-again",
      component: HereWeGoAgain
    }
  ]
});
