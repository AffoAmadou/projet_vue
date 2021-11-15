<template>
  <div class="last_chapter">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Last_chapter",
  props: {
    title: String,
    text: String,
  },
};
</script>

<style lang="scss">
.last_chapter {
  width: 40vw;
  margin: auto;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20vh auto;
  margin-bottom: 10vh;
  h1 {
    font-size: 30px;
    background: -webkit-linear-gradient(
      89.6deg,
      #d99cf0 -2.19%,
      #927bf9 102.14%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 11px;
  }
}
</style>