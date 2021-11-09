<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <h2>{{ title2 }}</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: "Title",
  props: {
    title: String,
    title2: String,
  },
};
</script>

<style lang="scss">
.title {
  text-align: center;
  h1 {
    padding-top: 215px;
    font-weight: 800;
    font-size: 60px;
  }
  h2 {
    font-weight: 800;
    font-size: 50px;
    padding-bottom: 216px;
  }
}
</style>