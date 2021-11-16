<template>
  <div class="card">
    <div class="date">
      <p>le 20 janvier</p>
    </div>
    <div class="info">
      <h3 class="name">sadju</h3>
      <p class="location">paris ouest</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.card {
  // height: 100%;
  height: 100%;
  min-width: 19vw;

  background: rgb(159, 159, 223);
  border-radius: 10px;
  float: none;
  margin: 0 0.25%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  zoom: 1;
  .date {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
  .info {
    padding: 10px;
  }
}
</style>