<template>
  <div class="accueil">
    <Header />
    <!-- <Title /> -->

 
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Header from "../components/header.vue";
// import Tab from "../components/Tab.vue";
// import Tabs from "../components/Tabs.vue";

export default {
  name: "Accueil",
  components: {
    Title,
    Header,
    // Tab,
    // Tabs,
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