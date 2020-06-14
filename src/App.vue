<template>
  <div id="main">
    <v-container id="container">
      <v-row class="mb-6" no-gutters>
        <v-col class="nav" id="nav" :cols="12">
          <router-link to="/">About</router-link>
          |
          <router-link to="/writing">Writing</router-link>
          |
          <a href="https://twitter.com/lakshmansankar">Twitter</a>
          |
          <a href="https://github.com/lsankar4033/">Github</a>

          <br />
          <br />

        </v-col>

        <v-col :cols="auto">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#container {
  max-width: 700px;
}

#nav {
  text-align: center;
}

#main {
  font-family: "Roboto", sans-serif;
  padding-top: 50px;
}

.nav a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
  margin-right: 2px;
}

.nav a:hover {
  color: #3e434a;
}
</style>
