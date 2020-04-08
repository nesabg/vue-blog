<template>
  <div class="wrapper">
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
export default {
  props: ['phoneNumber'],
  data() {
    return {
      // name: this.getUserData.publicName,
      // imgUrl: this.getUserData.imgUrl,
      // phone: this.getUserData.phone,
      // description: this.getUserData.description
    }
  },
  methods: {
    editUser() {
      console.log('clicked');
    }
  },
 computed:{
   getUserData() {
     return this.$store.state.user
   }
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

<style>
</style>