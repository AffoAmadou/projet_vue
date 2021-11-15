<template>
  <div class="header">
    <Nav />
    <Title title="Les meilleurs concerts," title2="en avant-première." />
    
    <!-- <Concert /> -->
  </div>
</template>

<script lang="ts">
import Nav from "../Header_eco/Nav.vue";
import Title from "../Header_eco/Title.vue";

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