<template>
  <div class="wrapper">
    <div class="section" v-if="getPost">
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
    <template v-if="isLoggedUser">
      <div class="section">
        <div class="add-comment left-side">
          <p>Add a comment to the post</p>
          <form @submit.prevent="addComment">
            <div class="form-group">
              <label for="name">Your comment</label>
              <textarea id="name" type="text" v-model="comment"></textarea>
            </div>
            <button :disabled="$v.$invalid">Send comment</button>
          </form>
        </div>
        <div class="comments right-side">
          <h3>Comments:</h3>
          <div class="single-comment" v-for="(comment, i) in getPost.comments" :key="i">
            <p>{{ comment.comment}}</p>
            <h4>
              <em>by: </em>
              <span>{{ comment.name }}</span>
              <p style="font-size: 10px">creted on: {{comment.dateCreate | moment}}</p>
            </h4>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <p>Register and login to see comments of this blog</p>
    </template>
  </div>
</template>

<script>
import { db } from "../main";
import firebase from "firebase/app";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import moment from "moment";

export default {
  props: ["id"],
  mixins: [validationMixin],
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    addComment() {
      let data = {
        name: this.currentUser,
        comment: this.comment,
        dateCreate: Date.now()
      };
      db.collection("categories")
        .doc(this.id)
        .update({ comments: firebase.firestore.FieldValue.arrayUnion(data) })
        .then(() => {
          this.comment = "";
        });
    },
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
  filters: {
    moment(val) {
      return moment(val).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  computed: {
    getPost() {
      return this.$store.state.posts.filter(post => post.uid == this.id)[0];
    },
    isLoggedUser() {
      return this.$store.state.isLoggedIn;
    },
    abbleToEdit() {
      return this.getPost.authorId == this.$store.state.user.uid;
    },
    currentUser() {
      return this.$store.state.user.publicName;
    }
  },
  validations: {
    comment: {
      required
    }
  }
};
</script>

<style scoped>
.section {
  width: 100%;
  padding-bottom: 30px;
  margin-bottom: 30px;
  display: flex;
  border-bottom: 1px solid #42b983;
}
.left-side {
  display: flexbox;
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
.add-comment {
  background-color: white;
  padding: 20px;
  margin: 20px;
}
input {
  width: 100%;
  padding: 7px 0;
  margin: 0 0 20px 0;
  display: inline-block;
  border: none;
  border-bottom: 1px solid #42b983;
}
textarea {
  width: 100%;
  height: 100px;
  padding: 7px 0;
  margin: 0;
  display: inline-block;
  border: none;
  border-bottom: 1px solid #42b983;
}
label {
  display: inline-block;
  font-size: 16px;
  color: #42b983;
  cursor: pointer;
}
button {
  width: 100%;
  margin: 10px 0;
  padding: 7px 40px;
  border: none;
  display: inline-block;
  background-color: #42b983;
  color: white;
  font-size: 16px;
  cursor: pointer;
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
.single-comment {
  border: 1px solid #42b983;
  padding: 20px;
  margin-bottom: 20px;
}
</style>