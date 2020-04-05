<template>
  <div>
    <nav>
      <div>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/vuejs-posts">VueJS</router-link>
          </li>
          <li>
            <router-link to="/angular-posts">Angular</router-link>
          </li>
          <li>
            <router-link to="/react-posts">React</router-link>
          </li>
        </ul>
        <ul class="right" v-if="!isLoggedIn">
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
        <ul class="right" v-else-if="isLoggedIn">
          <li>
            <router-link to="/create-post">Create post</router-link>
          </li>
          <li>
            <router-link to="/user-detail">User detail</router-link>
          </li>

          <li>
            <a @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.state.isLoggedIn = false;
          this.$router.replace("/");
        });
      console.log("clicked");
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #42b983;
}
nav > div {
  width: 1280px;
  margin: 0 auto;
}
ul {
  padding: 0;
  list-style-type: none;
  display: inline-block;
}
li {
  display: inline-block;
}
a {
  color: white;
  padding: 5px 15px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
a:hover {
  background-color: white;
  color: #42b983;
}

.right {
  float: right;
}
</style>