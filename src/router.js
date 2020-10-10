import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Writing from "./views/Writing.vue";
import WritingCrypto from "./views/WritingCrypto.vue";
import Post from "./views/Post.vue";

import posts from "./posts.js";

const lifePosts = posts.filter(p => p.category === "life");
lifePosts.sort((p1, p2) => p2.date - p1.date);

const cryptoPosts = posts.filter(p => p.category === "crypto");
cryptoPosts.sort((p1, p2) => p2.date - p1.date);

const topLevelRoutes = [
  {
    path: "/",
    component: About
  },
  {
    path: "/writing",
    component: Writing,
    props: { posts: lifePosts }
  },
  {
    path: "/writing-crypto",
    component: WritingCrypto,
    props: { posts: cryptoPosts }
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
