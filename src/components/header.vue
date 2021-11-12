<template>
  <div class="header">
    <Nav />
    <Title title="Les meilleurs concerts," title2="en avant-première." />
    <Tabs>
      <Tab title="Tab 1">Hello From Tab 1</Tab>
      <Tab title="Tab 2">Hello From Tab 2</Tab>
      <Tab title="Tab 3">Hello From Tab 3</Tab>
      <Tab title="Tab 4">Hello From Tab 4</Tab>
      <Tab title="Tab 5">Hello From Tab 5</Tab>
    </Tabs>
    <!-- <Concert /> -->
  </div>
</template>

<script lang="ts">
import Nav from "./Nav.vue";
import Title from "./Title.vue";
import Tab from "../components/Tab.vue";
import Tabs from "../components/Tabs.vue";
export default {
  name: "Header",
  props: {},
  components: {
    Nav,
    Title,
    Tab,
    Tabs,
  },
};
</script>

<style lang="scss">
.header {
  height: 2459px;
  background: radial-gradient(
    51.9% 336.54% at 51.9% 50%,
    #241b4d 0%,
    #1b1b1b 100%
  );
  border-radius: 0px 0px 150px 150px;
}
</style>