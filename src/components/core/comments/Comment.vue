<template>
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
      <div class="single-comment" v-for="(comment, i) in comments" :key="i">
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

<script>
import moment from "moment";
import firebase from "firebase/app";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { db } from "@/main";

export default {
  props: {
    comments: {
      type: Array
    },
    id: {
      type: String
    }
  },
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
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user.publicName;
    }
  },
  filters: {
    moment(val) {
      return moment(val).format("MMMM Do YYYY, h:mm:ss a");
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
}
.single-comment {
  border: 1px solid #42b983;
  padding: 20px;
  margin-bottom: 20px;
}
.add-comment {
  background-color: white;
  padding: 20px;
  margin: 20px;
}
.left-side {
  display: flexbox;
  position: relative;
  width: 40%;
  padding: 20px;
}
.right-side {
  display: inline-block;
  width: 50%;
  background: white;
  margin-top: 20px;
  padding: 0 20px 20px 20px;
  vertical-align: top;
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
#auth-name,
h4 > span {
  color: orange;
}
</style>