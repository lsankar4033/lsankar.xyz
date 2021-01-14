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

      <br />
      <hr />
      <br />

      <div id="subscribe">
        <p>
          Interested in being notified when I write a new post? Subscribe below:
        </p>
        <br />
        <br />

        <vue-mailchimp-email-signup-form
          :element-id="'email-signup'"
          :url="
            'https://gmail.us7.list-manage.com/subscribe/post?u=1417363863053479cba16f5df&id=e02324eaa4'
          "
        />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#subscribe {
  text-align: center;
  font-size: 14px;
}
.subscribe-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
}

#email-signupmce-EMAIL {
  font-size: 14px;
}

#email-signupmc-embedded-subscribe {
  font-size: 14px;
  background-color: #999;
}

#email-signupmc-embedded-subscribe:hover {
  background-color: #aaa;
}

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

#content p,
li {
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
