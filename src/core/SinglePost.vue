<template>
  <div class="wrapper">
    <div class="section">
      <div class="left-side">
        <img :src="getPost.imgUrl" alt />
        <template v-if="abbleToEdit">
          <span>
            <button id="edit">Edit post</button>
          </span>
          <span>
            <button id="delete">Delete post</button>
          </span>
        </template>
      </div>
      <div class="right-side">
        <h1>{{ getPost.title }}</h1>
        <p>{{ getPost.content }}</p>
        <div class="author">
          <span>Author: {{ getPost.authorName}}</span>
          <span>
            Category:
            <strong>{{ getPost.category}}</strong>
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
              <label for="name">Your name</label>
              <input id="name" type="text" v-model="name" />
            </div>
            <div class="form-group">
              <label for="name">Your comment</label>
              <textarea id="name" type="text" v-model="comment"></textarea>
            </div>
            <button :disabled="$v.$invalid">Send comment</button>
          </form>
        </div>
        <div class="comments right-side">
          <h3>Comments:</h3>
          <div class="singleComment" v-for="(comment, i) in getPost.comments" :key="i">
              <h4><em>Author of comment:</em> {{ comment.name }}</h4>
              <p>{{ comment.comment}}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { db } from "../main";
import firebase from "firebase/app";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  props: ["id"],
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      comment: ""
    };
  },
  methods: {
    addComment() {
      let data = {
        name: this.name,
        comment: this.comment
      };
      db.collection("categories")
        .doc(this.id)
        .update({ comments: firebase.firestore.FieldValue.arrayUnion(data) }).then(() => {
            this.name = '';
            this.comment = '';
        })
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
        return this.getPost.authorId == this.$store.state.user.uid
    }
  },
  validations: {
    name: {
      required
    },
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
}
.right-side {
  display: flexbox;
  width: 50%;
  padding: 20px;
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
</style>