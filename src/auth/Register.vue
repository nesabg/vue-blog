<template>
  <div>
    <h1>Register your free account</h1>
    <form @submit.prevent="registerFormHandler">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="name" @blur="$v.name.$touch" />
        <template v-if="$v.name.$error">
            <span class="alert" v-if="!$v.name.required">The name is required</span>
            <span class="alert" v-else-if="!$v.name.minLength">The name must be min 3 chars</span>
        </template>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" @blur="$v.email.$touch"/>
        <template v-if="$v.email.$error">
            <span class="alert" v-if="!$v.email.required">The email is required</span>
            <span class="alert" v-else-if="!$v.email.email">Not valid email</span>
        </template>
      </div>
      <div class="form-group">
        <label for="imgUrl">Image url:</label>
        <input id="imgUrl" type="url" v-model="imgUrl" @blur="$v.imgUrl.$touch" />
        <template v-if="$v.imgUrl.$error">
            <span class="alert" v-if="!$v.imgUrl.required">The image url is required</span>
            <span class="alert" v-else-if="!$v.imgUrl.url">Not valid url</span>
        </template>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" @blur="$v.password.$touch"/>
        <template v-if="$v.password.$error">
            <span class="alert" v-if="!$v.password.required">The password is required</span>
            <span class="alert" v-else-if="!$v.password.minLength">Password must be minimum 8 symbols</span>
            <span class="alert" v-else-if="!$v.password.maxLength">Password must be maximum 16 symbols</span>
        </template>
      </div>
      <div class="form-group">
        <label for="rePassword">Repeat - password:</label>
        <input id="rePassword" type="password" v-model.trim="$v.rePassword.$model" />
        <template v-if="$v.rePassword.$error">
            <span class="alert" v-if="!$v.rePassword.sameAsPass">Passwords is not the same</span>
        </template>
      </div>
      <button :disabled="$v.$invalid">Submit</button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength, email, url, sameAs } from 'vuelidate/lib/validators';
//import { helpers } from 'vuelidate/lib/validators';
export default {
mixins: [validationMixin],
  data() {
    return {
      name: "",
      email: "",
      imgUrl: "",
      password: "",
      rePassword: ""
    };
  },
  methods: {
      registerFormHandler() {
          console.log('Form send')
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
          sameAsPass: sameAs('password')
      }
  }
};
</script>

<style scoped>
input {
  width: 200px;
  padding: 7px 10px;
  margin: 10px;
  display: inline-block;
  border: 1px solid green;
  border-radius: 10px;
}

label {
  width: 100px;
  padding: 7px 10px;
  display: inline-block;
  background-color: green;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
}
button {
  padding: 7px 40px;
  display: inline-block;
  background-color: transparent;
  border: 2px solid green;
  border-radius: 10px;
  color: green;
  font-size: 16px;
  cursor: pointer;
}
button:disabled {
  border: 2px solid grey;
  color: grey;
  cursor:progress;
}
.alert {
    color: red;
}
</style>