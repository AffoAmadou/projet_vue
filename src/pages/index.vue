<template>
  <div class="accueil">
    <Header />
    <Title />
    <Tab />
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Header from "../components/header.vue";
import Nav from "../components/Nav.vue";
import Tab from "../components/Tab.vue";

export default {
  name: "Accueil",
  components: {
    Title,
    Header,
    // Nav,
  },
};
</script>

<style lang="scss">
.accueil {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
}
</style>