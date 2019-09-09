<template>
  <div id="main">
    <v-container>
      <v-row class="mb-6" no-gutters>
        <v-col class="nav" id="desktop-nav" :cols="3">
          <router-link to="/">
            <h2>Lakshman Sankar</h2>
          </router-link>

          <br />

          <router-link to="/">Present</router-link>

          <br />
          -
          <br />

          <router-link to="/past">Past</router-link>

          <br />
          -
          <br />

          <router-link to="/projects">Projects</router-link>
        </v-col>

        <v-col class="nav" id="mobile-nav" :cols="12">
          <router-link to="/">
            <h2>Lakshman Sankar</h2>
          </router-link>

          <br />

          <router-link to="/">Present</router-link>
          |
          <router-link to="/past">Past</router-link>
          |
          <router-link to="/projects">Projects</router-link>

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

<style>
@media (max-width: 768px) {
  #desktop-nav {
    display: none;
  }
}

@media (min-width: 768px) {
  #mobile-nav {
    display: none;
  }
}

#mobile-nav {
  text-align: center;
}

#main {
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  padding-top: 60px;
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
