<template>
  <div class="wrapper">
      <h1>React Posts</h1>
      <router-link v-for="post in posts" :key="post.uid" :to="'/single-post/' + post.uid">
          <div class="singlePost">
              <img :src="post.imgUrl" alt="">
              <div><h2>{{post.title}}</h2></div>
              <div><p>{{ post.content | descLenght }}</p></div>
          </div>
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    created(){
        this.$store.dispatch("fetchPosts");
    },
    computed: {
        posts(){
            return this.$store.state.posts.filter(post => post.category == 'react');
        }
    },
    filters: {
        descLenght(val) {
            return val.slice(0, 100) + '...'
        }
    }
}
</script>

<style scoped>
    .singlePost {
        width: 700px;
        margin: 20px auto;
        padding: 20px;
        background-color: white;
        text-align: center;
        border-radius: 20px;
        box-shadow: 0 0 10px -6px #000000;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }
    .singlePost:hover {
        transform: scale(1.02);
    }
    .singlePost h2 {
        color: #42b983
    }
img {
    height: 200px;
}
</style>