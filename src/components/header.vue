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

</style>