<template>
  <div>
    <nav>
      <div>
        <ul>
          <li>
            <router-link to="/foo">Home</router-link>
          </li>
          <li>
            <router-link to="/foo">VueJS</router-link>
          </li>
          <li>
            <router-link to="/foo">Angular</router-link>
          </li>
          <li>
            <router-link to="/foo">React</router-link>
          </li>
        </ul>
        <ul class="right">
          <li>
            <router-link to="/create-topic">Create topic</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
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
  border-radius: 10px;
  text-decoration: none;
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