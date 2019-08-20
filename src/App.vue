<template>
  <div id="main">
    <v-container>
      <v-row
        class="mb-6"
        no-gutters
      >

        <v-col :cols=4>
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </v-col>

        <v-col :cols=auto>
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
  color: #3f3844;
  font-family: monospace;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
