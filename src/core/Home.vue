<template>
  <div class="wrapper">
    <div class="header">
      <h1>Welcome to our blog</h1>
      <p>
        If you sign up you will be able to create posts in our three categories. Anonymous users will be able to read your posts, only logged in users will be able to read the comments under your posts.
        You will be able to edit or delete your posts completely.
      </p>
    </div>
    <div class="vuejs">
      <h2>Recent post from VueJS</h2>
      <div class="single-item" v-for="post in getVueData" :key="post.uid">
        <h3>{{post.title}}</h3>
        <p>{{post.content | sliceData}}</p>
      </div>
    </div>
    <div class="angular">
      <h2>Recent post from Angular</h2>
      <div class="single-item" v-for="post in getNgData" :key="post.uid">
        <h3>{{post.title}}</h3>
        <p>{{post.content | sliceData}}</p>
      </div>
    </div>
    <div class="react">
      <h2>Recent post from React</h2>
      <div class="single-item" v-for="post in getReactData" :key="post.uid">
        <h3>{{post.title}}</h3>
        <p>{{post.content | sliceData}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    getVueData() {
      return this.$store.state.posts
        .filter(post => post.category == "vuejs")
        .slice(-3);
    },
    getNgData() {
      return this.$store.state.posts
        .filter(post => post.category == "angular")
        .slice(-3);
    },
    getReactData() {
      return this.$store.state.posts
        .filter(post => post.category == "react")
        .slice(-3);
    }
  },
  filters: {
    sliceData(val) {
      return val.slice(0, 100) + "...";
    }
  }
};
</script>

<style scoped>
.header {
  width: 70%;
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  text-align: center;
}
h1,h2,h3,h4 {
  color: #42b983;
}
.single-item {
  width: 27%;
  height: 180px;
  vertical-align: top;
  margin: 15px;
  padding: 15px;
  display: inline-block;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 10px -6px #000000;
}
</style>