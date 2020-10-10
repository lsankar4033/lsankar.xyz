import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Writing from "./views/Writing.vue";
import WritingCrypto from "./views/WritingCrypto.vue";
import Post from "./views/Post.vue";

import posts from "./posts.js";

const topLevelRoutes = [
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
    path: "/writing-crypto",
    name: "writing-crypto",
    component: WritingCrypto
  }
];

const postRoutes = [];
for (const post of posts) {
  postRoutes.push({
    path: post.path,
    component: Post,
    props: { body: post.body }
  });
}

Vue.use(Router);

export default new Router({
  routes: topLevelRoutes.concat(postRoutes)
});
