<template>
  <div id="post" v-html="body"></div>
</template>

<script>
export default {
  props: ["body"],
  name: "Post"
};
</script>

<style>
#title {
  text-align: center;
  color: #313131;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}
</style>
