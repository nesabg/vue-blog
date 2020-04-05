<template>
  <div class="wrapper">
    <h1>Detail page for user: {{ userData.publicName }}</h1>
    <div>
      <img :src="userData.imageURL" alt />
      <h4>Phone number: {{ userData.phone }}</h4>
      <h4>Email addres: {{ userData.Email }}</h4>
      <p>
        Description:
        <br />
        {{ userData.description}}
      </p>
      <button id="edit">Edit profile</button>
      <button id="delete">Delete profile</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
#wrapper {
  width: 1280px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  color: #42b983;
}
img {
  margin: 0 30px 30px 0;
  float: left;
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
#delete {
  width: 20%;
  float: right;
  margin: 10px 0;
  padding: 7px 40px;
  border: none;
  display: inline-block;
  background-color: #c41b1b;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>