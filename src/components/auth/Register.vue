<template>
  <div id="regForm" class="wrapper">
    <h1>Register your free account</h1>
    <form @submit.prevent="registerFormHandler">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="$v.name.$model" />
        <template v-if="$v.name.$error">
          <p class="alert" v-if="!$v.name.required">The name is required</p>
          <p class="alert" v-else-if="!$v.name.minLength">The name must be min 3 chars</p>
        </template>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="$v.email.$model" />
        <template v-if="$v.email.$error">
          <p class="alert" v-if="!$v.email.required">The email is required</p>
          <p class="alert" v-else-if="!$v.email.email">Not valid email</p>
        </template>
      </div>
      <div class="form-group">
        <label for="phone">Phone number:</label>
        <input id="phone" type="number" v-model.number="$v.phone.$model" />
        <template v-if="$v.phone.$error">
          <p class="alert" v-if="!$v.phone.required">The phone number is required</p>
          <p class="alert" v-else-if="!$v.phone.decimal">Phone number must be only digits</p>
        </template>
      </div>
      <div class="form-group">
        <label for="imgUrl">Image url:</label>
        <input id="imgUrl" type="url" v-model="$v.imgUrl.$model" />
        <template v-if="$v.imgUrl.$error">
          <p class="alert" v-if="!$v.imgUrl.required">The image url is required</p>
          <p class="alert" v-else-if="!$v.imgUrl.url">Not valid url</p>
        </template>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description"  v-model="$v.description.$model" />
        <template v-if="$v.description.$error">
          <p class="alert" v-if="!$v.description.required">The description is required</p>
          <p class="alert" v-else-if="!$v.description.minLength">Minimum of characters is 20</p>
          <p class="alert" v-else-if="!$v.description.maxLength">Maximum of characters is 320</p>
        </template>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="$v.password.$model" />
        <template v-if="$v.password.$error">
          <p class="alert" v-if="!$v.password.required">The password is required</p>
          <p class="alert" v-else-if="!$v.password.minLength">Password must be minimum 8 symbols</p>
          <p class="alert" v-else-if="!$v.password.maxLength">Password must be maximum 16 symbols</p>
        </template>
      </div>
      <div class="form-group">
        <label for="rePassword">Repeat - password:</label>
        <input id="rePassword" type="password" v-model.trim="$v.rePassword.$model" />
        <template v-if="$v.rePassword.$error">
          <p class="alert" v-if="!$v.rePassword.sameAsPass">Passwords is not the same</p>
        </template>
      </div>
      <button :disabled="$v.$invalid">Register</button>
    </form>
    <p>
      <router-link to="/login">You have account? Login now</router-link>
    </p>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
  url,
  sameAs,
  decimal
} from "vuelidate/lib/validators";
import { db } from "@/main";
import firebase from "firebase";
export default {
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      email: "",
      imgUrl: "",
      password: "",
      rePassword: "",
      phone: "",
      description: ""
    };
  },
  methods: {
    registerFormHandler() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.setUserData(data.user);
          this.$router.replace("/login");
        })
        .catch(err => {
          alert(err);
        });
    },
    setUserData(user) {
      const userRef = db.doc(`users/${user.uid}`);
      const userData = {
        uid: user.uid,
        email: user.email,
        imageURL: this.imgUrl,
        publicName: this.name,
        phone: this.phone,
        description: this.description
      };

      return userRef.set(userData, { merge: true });
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      decimal
    },
    description: {
      required,
      minLength: minLength(20),
      maxLength: maxLength(320)
    },
    imgUrl: {
      required,
      url
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(16)
    },
    rePassword: {
      sameAsPass: sameAs("password")
    }
  }
};
</script>

<style scoped>

#regForm {
  width: 50%;
  margin-top: 30px;
  background-color: white;
  padding: 30px;
}
textarea {
  height: 80px;
}
input, textarea {
  width: 100%;
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
button:disabled {
  border: none;
  background-color: #eee;
  color: #42b983;
  cursor: progress;
}
.alert {
  color: red;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: smaller;
}
.form-group {
  margin: 20px 0;
}
a {
  text-decoration: none;
  color: #42b983;
}
h1 {
  text-align: center;
}
</style>