<template>
  <div>
    <h1>Register your free account</h1>
    <form @submit.prevent="registerFormHandler">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="imgUrl">Image url:</label>
        <input id="imgUrl" type="url" v-model="imgUrl" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="url" v-model="password" />
      </div>
      <div class="form-group">
        <label for="rePassword">Repeat - password:</label>
        <input id="rePassword" type="url" v-model="rePassword" />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
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
</style>