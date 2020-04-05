<template>
  <div class="wrapper">
    <h1>Vuejs Posts</h1>
    <div v-for="post in posts" :key="post.uid">
      <div class="single-post">
        <div class="content">
          <div>
            <h2><router-link :to="'/single-post/' + post.uid">{{post.title}}</router-link></h2>
          </div>
          <div>
            <p>{{ post.content | descLenght }}</p>
          </div>
          <div>
            <router-link class="btn" :to="'/single-post/' + post.uid">Read more</router-link>
            <span class="author">by: {{post.authorName}}</span>
          </div>
        </div>
        <div class="img">
          <router-link :to="'/single-post/' + post.uid"><img :src="post.imgUrl" alt /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts.filter(post => post.category == "vuejs");
    }
  },
  filters: {
    descLenght(val) {
      return val.slice(0, 100) + "...";
    }
  }
};
</script>

<style scoped>
p {
    margin-bottom: 30px;
}
.single-post {
  width: 100%;
  height: 200px;
  display: inline-block;
  margin: 10px auto;
  padding: 30px;
  background-color: white;
  text-align: left;
  vertical-align: top;
  box-shadow: 0 0 10px -6px #000000;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.singlePost:hover {
  transform: scale(1.01);
}
.singlePost h2 a{
  color: #42b983;
}
.img {
  width: 30%;
  display: inline-block;
}
.img > a > img {
  width: 100%;
  height: 200px;

}
.img > a {
  text-decoration: none !important;
  border: none !important;
  background-color: transparent !important;
}
.content {
  width: 60%;
  padding: 20px 40px;
  display: inline-block;
  vertical-align: top;
}
a:hover {
    text-decoration: underline;
}
a.btn {
    padding: 5px 20px;
    border: 1px solid #42b983;
    color:  #42b983;
}
a.btn:hover {
    padding: 5px 20px;
    border: 1px solid #42b983;
    color:  white;
    background-color: #42b983;
    text-decoration: none;
}
.author {
    float: right;
    color: red; 
}
</style>