<template>
  <nav class="nav">
    <div class="links">
      <router-link to="/">Buuk</router-link>
      <router-link id="acc" to="/">Accueil</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/concerts">Concerts</router-link>
    </div>
    <tel>+33 4 50 67 33 22</tel>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@600;800&display=swap");

tel {
  font-size: 20px;
  line-height: 25.2 px;
}
.nav {
  height: 75px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 52px;
  padding-left: 20px;
  border-bottom: 1px solid #595959;
  a {
    font-size: 20px;
    line-height: 25.2 px;
    padding-right: 20px;
    padding-left: 20px;
    text-decoration: none;
    color: white;
    &:active {
      color: #d48ae6;
    }
  }
}

#acc {
  border-left: 3px solid 000;
}
</style>