<template>
  <div class="wrapper">
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! This Page Could Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
        <router-link to="/"> To Homepage</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 30%;
  top: 30%;
  -webkit-transform: translate(-30%, -30%);
      -ms-transform: translate(-30%, -30%);
          transform: translate(-30%, -30%);
}

.notfound {
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  padding: 0px 15px;
}

.notfound .notfound-404 {
  position: relative;
  height: 150px;
  line-height: 150px;
  margin-bottom: 25px;
}

.notfound .notfound-404 h1 {
  font-family: 'Titillium Web', sans-serif;
  font-size: 186px;
  font-weight: 900;
  margin: 0px;
  text-transform: uppercase;
  background: url('../../assets/text.png');
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
}

.notfound h2 {
  font-family: 'Titillium Web', sans-serif;
  font-size: 26px;
  font-weight: 700;
  margin: 0;
}

.notfound p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px;
  text-transform: uppercase;
}

.notfound a {
  font-family: 'Titillium Web', sans-serif;
  display: inline-block;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  border: none;
  background: #42b983;
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 1px;
  margin-top: 15px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.notfound a:hover {
  opacity: 0.8;
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-404 {
    height: 110px;
    line-height: 110px;
  }
  .notfound .notfound-404 h1 {
    font-size: 120px;
  }
}
</style>