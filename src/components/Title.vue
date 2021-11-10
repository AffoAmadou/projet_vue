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
    background: -webkit-linear-gradient(
      89.6deg,
      #d99cf0 -2.19%,
      #927bf9 102.14%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>