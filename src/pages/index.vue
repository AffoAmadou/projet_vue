<template>
  <div class="accueil">
    <Header />
    <!-- <Title /> -->

    <Tabs>
      <Tab title="Tab 1">Hello From Tab 1</Tab>
      <Tab title="Tab 2">Hello From Tab 2</Tab>
      <Tab title="Tab 3">Hello From Tab 3</Tab>
      <Tab title="Tab 4">Hello From Tab 4</Tab>
      <Tab title="Tab 5">Hello From Tab 5</Tab>
    </Tabs>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Header from "../components/header.vue";
import Tab from "../components/Tab.vue";
import Tabs from "../components/Tabs.vue";

export default {
  name: "Accueil",
  components: {
    Title,
    Header,
    Tab,
    Tabs,
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