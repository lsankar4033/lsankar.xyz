import Vue from "vue";
import Router from "vue-router";
import Present from "./views/Present.vue";
import Past from "./views/Past.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "present",
      component: Present
    },
    {
      path: "/past",
      name: "past",
      component: Past
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    }
  ]
});
