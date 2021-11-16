<template>
  <div class="card" :style="`background-image:url('${data.backgroundImage}')`">
    <div class="date">
      <p>{{ data.date }}</p>
    </div>
    <div class="info">
      <h3 class="name">{{ data.name }}</h3>
      <p class="location">{{ data.place }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: {
    data: Object,
  },
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

  border-radius: 10px;
  float: none;
  margin: 0 0.25%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-size: cover;
  background-repeat: no-repeat;
  zoom: 1;
  .date {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    p{
      font-size: 9px;
      font-weight: 400;
    }
  }
  .info {
    padding: 10px;
    .name{
      font-size: 15px;
      font-weight: 800;
    }
    .location{
       font-size: 14px;
      font-weight: 300;
    }
  }
}
</style>