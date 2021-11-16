<template>
  <div class="footer">
    <div class="buuk"><router-link to="/">Buuk</router-link></div>
    <div class="footer_menu">
      <div class="links">
        <router-link to="/">Conditions de ventes</router-link>
      </div>
      <div class="links">
        <router-link to="/">Mentions légales</router-link>
      </div>
      <div class="links tel">
        <router-link to="/">Un problème ? +33 4 50 44 56 03</router-link>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
export default {
  name: "Footer",
};
</script>


<style lang="scss">
.footer {
  width: 95vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
    margin-top: 30vh;
  .buuk {
    background: -webkit-linear-gradient(
      89.6deg,
      #d99cf0 -2.19%,
      #927bf9 102.14%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 25px;
  }
  .footer_menu {
    display: flex;
    align-items: center;

    .links {
      a {
        padding-left: 2vw;
      }
    }
  }
  .tel {
    font-weight: 600;
  }
}
</style>