<template>
  <div id="writing">
    <br />

    <!--
    <p style="text-align: center;">
      The best way to follow my writing is to follow
      <a href="https://github.com/lsankar4033/lakshmansankar.com/"
        >this github repo</a
      >
    </p>
    <p style="text-align: center;">
      Look for commits starting with "[New Post]"
    </p>
    -->
    <div v-for="post in posts" v-bind:key="post.path">
      <br />
      <router-link v-bind:to="post.path">{{ post.title }}</router-link>
      <br />
      <em>--{{ post.date.toDateString() }}</em>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
  name: "Writing"
};
</script>
