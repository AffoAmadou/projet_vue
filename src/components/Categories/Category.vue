<template>
  <div class="category">
    <h2 class="title">R n B</h2>
    <div class="card_container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "../Categories/Card.vue";
export default {
  name: "Category",
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.category {
  height: 50vh;
  width: 70vw;
  margin: auto;
  background: #f3eeff;
  border-radius: 47px;
  margin-top: 10vh;
  padding: 20px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    text-align: left;
    background: -webkit-linear-gradient(89.6deg, #211c39 100%, #927bf9 102.14%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .card_container {
    height: 85%;
    white-space: nowrap;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    display: flex;
  }
}
</style>