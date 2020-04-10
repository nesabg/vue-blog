<template>
  <div class="wrapper">
    <div class="section-one" v-if="getPost">
      <div class="left-side">
        <img :src="getPost.imgUrl" alt />
        <template v-if="abbleToEdit">
          <span>
            <router-link :to="'/edit-post/' + id">
              <button id="edit">Edit post</button>
            </router-link>
          </span>
          <span>
            <button id="delete" @click="deletePost">Delete post</button>
          </span>
        </template>
      </div>
      <div class="right-side">
        <h1>{{ getPost.title }}</h1>
        <p id="content">{{ getPost.content }}</p>
        <div class="author">
          <span>
            Author:
            <span id="auth-name">{{ getPost.authorName}}</span>
          </span>
          <span>
            Category:
            <strong>
              <router-link :to="'/' + getPost.category + '-posts'">{{ getPost.category}}</router-link>
            </strong>
          </span>
        </div>
      </div>
    </div>
    <div>
      <template v-if="isLoggedUser">
        <comment :comments="comments" :id="id"></comment>
      </template>
      <template v-else>
        <p>Register and login to see comments of this blog</p>
      </template>
    </div>
  </div>
</template>

<script>
import { db } from "@/main";
import Comment from "./comments/Comment.vue";

export default {
  components: {
    comment: Comment
  },
  props: {
    id: {
      type: String
    }
  },
  methods: {
    deletePost() {
      if (confirm("Are you sure want to delete this post?")) {
        db.collection("categories")
          .doc(this.id)
          .delete()
          .then(() => {
            this.$router.replace("/");
          })
          .catch(err => {
            alert(err);
          });
      }
    }
  },
  computed: {
    getPost() {
      return this.$store.getters.getSinglePost(this.id);
    },
    isLoggedUser() {
      return this.$store.state.isLoggedIn;
    },
    abbleToEdit() {
      return this.getPost.authorId == this.$store.getters.getUserInfo.uid;
    },
    comments() {
      return this.getPost.comments.slice(0).reverse();
    }
  }
};
</script>

<style scoped>
.left-side {
  display: inline-block;
  position: relative;
  width: 40%;
  padding: 20px;
}
.left-side img {
  width: 100%;
  margin-top: 30px;
}
.right-side {
  display: inline-block;
  width: 50%;
  background: white;
  margin-top: 20px;
  padding: 0 20px 20px 20px;
  vertical-align: top;
}
.author span {
  margin-right: 30px;
}
h1 {
  text-align: center;
  color: #42b983;
}
.author a,
#auth-name,
h4 > span {
  color: orange;
}
#content {
  text-align: justify;
  line-height: 1.7;
}
.section-one {
  width: 100%;
  padding-bottom: 30px;
  margin-bottom: 30px;
  display: flex;
  border-bottom: 1px solid #42b983;
}
</style>