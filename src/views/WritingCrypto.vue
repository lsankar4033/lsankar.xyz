<template>
  <div id="writing">
    <br />
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
  name: "WritingCrypto"
};
</script>
