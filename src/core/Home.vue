<template>
  <div class="wrapper">
    <h1>Home component</h1>
    {{ posts }}
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style>
</style>