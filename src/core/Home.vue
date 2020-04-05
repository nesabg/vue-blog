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
        <router-link :to="'/single-post/' + post.uid">
        <div class="div-img"><img :src="post.imgUrl" alt=""></div>
        <h3>{{post.title}}</h3>
        <p>{{post.content | sliceData}}</p>
        </router-link>
      </div>
    </div>
    <div class="angular">
      <h2>Recent post from Angular</h2>
       <div class="single-item" v-for="post in getNgData" :key="post.uid">
        <router-link :to="'/single-post/' + post.uid">
        <div class="div-img"><img :src="post.imgUrl" alt=""></div>
        <h3>{{post.title}}</h3>
        <p>{{post.content | sliceData}}</p>
        </router-link>
      </div>
    </div>
    <div class="react">
      <h2>Recent post from React</h2>
      <div class="single-item" v-for="post in getReactData" :key="post.uid">
        <router-link :to="'/single-post/' + post.uid">
        <div class="div-img"><img :src="post.imgUrl" alt=""></div>
        <h3>{{post.title}}</h3>
        <p>{{post.content | sliceData}}</p>
        </router-link>
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
  margin: 30px auto;
  padding: 30px 150px;
  background-color: white;
  text-align: center;
}
h1,h2,h3,h4 {
  color: #42b983;
}
h2 {
  color: white;
  padding: 10px 0;
  background-color: #42b983;
  text-align: center;
}
.single-item {
  width: 27%;
  height: 360px;
  margin: 15px;
  padding: 15px;
  display: inline-block;
  text-align: center;
  vertical-align: top;
  background-color: white;
  box-shadow: 0 0 10px -6px #000000;
}
.div-img {
  width: 80%;
  height: 180px;
  margin: 0 auto;
  padding: 10px;
  display: inline-block;
}
img {
  width: 100%;
}
.vuejs, .angular, .react {
  text-align: center;
}
</style>