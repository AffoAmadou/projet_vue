<template>
  <div class="header">
    <Nav />
    <Title title="Les meilleurs concerts," title2="en avant-première." />
    
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