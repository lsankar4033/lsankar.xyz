<template>
  <div id="main">
    <v-container id="container">
      <v-row class="mb-6" no-gutters>
        <v-col class="nav" id="nav" :cols="12">
          <router-link to="/">About</router-link>
          |
          <router-link to="/writing-crypto">Crypto</router-link>
          |
          <router-link to="/writing">Life</router-link>
          <br />
          <br />
        </v-col>

        <v-col :cols="auto">
          <router-view id="content" />
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
  max-width: 600px;
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

#content p {
  font-size: 14px;
  line-height: 1.65em;
}

#content a {
  color: #111;
  margin-right: 2px;
}

#content a:hover {
  color: #666;
}
</style>
