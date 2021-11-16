<template>
  <div class="header">
    <Nav />
    <Title :title="title1" :title2="title2" />

    <!-- <Concert /> -->
  </div>
</template>

<script lang="ts">
import Nav from "../Header_eco/Nav.vue";
import Title from "../Header_eco/Title.vue";

export default {
  name: "Header",
  props: {
    title1: String,
    title2: String,
  },
  components: {
    Nav,
    Title,
  },
};
</script>

<style lang="scss">
</style>