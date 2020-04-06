<template>
  <div class="wrapper">
    <h1>React Posts</h1>
    <div v-for="post in posts" :key="post.uid">
      <div class="single-post">
        <div class="content">
          <div>
            <h2><router-link :to="'/single-post/' + post.uid">{{post.title}}</router-link></h2>
          </div>
          <div>
            <p>{{ post.content | reduceLength }}</p>
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
  computed: {
    posts() {
      return this.$store.getters.getCategoryPost('react');
    }
  },
  filters: {
    reduceLength(val) {
      return val.slice(0, 100) + "...";
    }
  }
};
</script>

<style scoped>
p {
    margin-bottom: 30px;
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

</style>