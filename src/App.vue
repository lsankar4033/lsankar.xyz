<template>
  <div id="main">
    <v-container>
      <v-row class="mb-6" no-gutters>
        <v-col :cols="3">
          <div id="nav">
            <router-link to="/">
              <h2>Lakshman Sankar</h2>
            </router-link>
            -------------------------

            <br />
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
          </div>
        </v-col>

        <v-col :cols="auto">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
#main {
  width: 1000px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  padding-top: 60px;
}

#nav a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

#nav a:hover {
  color: #3e434a;
}
</style>
