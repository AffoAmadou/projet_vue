<template>
  <nav class="nav">
    <div class="links">
      <div class="r-links buuk"><router-link to="/">Buuk</router-link></div>
      <div class="r-links"><router-link to="/">Accueil</router-link></div>
      <div class="r-links">
        <router-link to="/Concert">Tous les concerts</router-link>
      </div>
      <div class="r-links">
        <router-link to="/">Concerts</router-link>
      </div>
    </div>
    <p>+33 4 50 67 33 22</p>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.nav {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  // padding-left: 20px;
  border-bottom: 1px solid #595959;
  .links {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-right: 50px;

    .r-links {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      &:hover {
        border-bottom: 1px solid #d48ae6;
      }

      a {
        font-size: 15px;
        line-height: 25.2 px;
        padding-right: 20px;
        padding-left: 20px;
        text-decoration: none;
        color: white;
        cursor: pointer;
      }
    }
    .buuk {
      border-right: 1px solid #595959;
      // margin-left:26px;
    }
    &:hover {
      border-bottom: none;
    }
  }
  p {
    font-size: 10px;
  }
}
</style>