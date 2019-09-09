<template>
  <div>
    <a class="social-link" href="https://github.com/lsankar4033/">
      <img src="../assets/github-small.png" />
      <img src="../assets/github-small-hover.png" />
    </a>

    <a class="social-link" href="https://twitter.com/lakshmansankar">
      <img src="../assets/twitter.png" />
      <img src="../assets/twitter-hover.png" />
    </a>

    <a class="social-link" href="https://www.strava.com/athletes/3008746">
      <img src="../assets/strava.png" />
      <img src="../assets/strava-hover.png" />
    </a>

    <a class="social-link" href="https://medium.com/@lakshmansankar">
      <img src="../assets/medium.png" />
      <img src="../assets/medium-hover.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialIcons"
};
</script>

<style scoped>
a.social-link:hover img:first-child {
  display: none;
}

a.social-link:hover img:last-child {
  display: inline;
}

a.social-link img:last-child {
  display: none;
}
</style>
