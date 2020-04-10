<template>
  <div class="wrapper" id="editForm">
    <h1>Edit user info</h1>
    <form @submit.prevent="editUser">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="$v.name.$model" />
        <template v-if="$v.name.$error">
          <p class="alert" v-if="!$v.name.required">The name is required</p>
          <p class="alert" v-else-if="!$v.name.minLength">The name must be min 3 chars</p>
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
        <textarea id="description" v-model="$v.description.$model" />
        <template v-if="$v.description.$error">
          <p class="alert" v-if="!$v.description.required">The description is required</p>
          <p class="alert" v-else-if="!$v.description.minLength">Minimum of characters is 20</p>
          <p class="alert" v-else-if="!$v.description.maxLength">Maximum of characters is 320</p>
        </template>
      </div>
      <button :disabled="$v.$invalid">Edit</button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  url,
  decimal
} from "vuelidate/lib/validators";
import { db } from '@/main';
export default {
  data() {
    return {
      name: "",
      imgUrl: "",
      phone: "",
      description: "",
      uid: ''
    };
  },
  methods: {
    editUser() {
      let data = {
        publicName: this.name,
        phone: this.phone,
        imageURL: this.imgUrl,
        description: this.description
      };
      db.collection("users")
        .doc(this.uid)
        .set(data, { merge: true })
        .then(() => {
          this.$router.replace('user-detail');
        });
    }
  },
  mounted() {
    let data = this.$store.getters.getUserInfo;
    this.name = data.publicName;
    this.imgUrl = data.imageURL;
    this.phone = data.phone;
    this.description = data.description;
    this.uid = data.uid;
  },
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      minLength: minLength(3)
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
    }
  }
};
</script>

<style scoped>
#editForm {
  width: 50%;
  margin-top: 30px;
  background-color: white;
  padding: 30px;
}
textarea {
  height: 80px;
}
input,
textarea {
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