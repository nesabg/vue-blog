<template slot:info>
  <div class="wrapper">
    <h1>Detail page for user: {{ userData.publicName }}</h1>
    <div id="main-info">
      <div class="user-image">
        <img :src="userData.imageURL" alt />
      </div>
      <div class="user-meta">
        <h4>Phone number: {{ userData.phone }}</h4>
        <h4>Email addres: {{ userData.email }}</h4>
        <p>
          <strong>Description:</strong>
          <br />
          {{ userData.description}}
        </p>
        <router-link to="/edit-user" ><button id="edit">Edit profile</button></router-link>
      </div>
    </div>
    <div class="single-post-detail" v-for="post in posts" :key="post.uid">
      <div class="post-title">
        <router-link :to="'single-post/' + post.uid">
          <h4></h4>
          <p>
            <span>{{post.title}}</span>
            <span style="margin-left: 50px">Category: {{post.category}}</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.user;
    },
    posts() {
      return this.$store.state.posts.filter(
        post => post.authorId == this.userData.uid
      );
    }
  }
};
</script>

<style scoped>
#wrapper {
  width: 1280px;
  margin: 0 auto;
}
.user-image {
  width: 30%;
  display: inline-block;
  overflow: hidden;
  margin: 0 30px 0 0;
}
.user-meta {
  width: 65%;
  display: inline-block;
  vertical-align: top;
}
h1 {
  text-align: center;
  color: #42b983;
}
#main-info {
  margin-bottom: 30px;
}
.single-post-detail {
  height: 60px;
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid #42b983;
}
.user-image img {
  width:  100%;
}
.post-title {
  display: inline-block;
  width: 70%;
  margin-left: 20px;
  vertical-align: top;
}
#edit {
  width: 20%;
  margin: 10px 0;
  padding: 7px 40px;
  border: none;
  display: inline-block;
  background-color: #42b983;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>