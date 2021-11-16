<template >
  <div class="store">
    <img :src="playstore" alt="" class="play" />
    <img :src="appstore" alt="" class="appstore" />
  </div>
</template>

<script>
export default {
  name: "Store",
  props: {
    playstore: String,
    appstore: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.store {
  width: 30vw;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  .play {
    width: 9vw;
  }
  .appstore {
    width: 10vw;
  }
}
</style>