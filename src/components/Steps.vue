<template>
  <div class="steps">
    <div class="number">{{ id }}</div>
    <div class="text">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Steps",
  props: {
    id: String,
    title: String,
    text: String,
  },
};
</script>

<style lang="scss">
.steps {
  // width: 80%;
  // margin: auto;
  width: 250px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  position: relative;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20vh;
  .number {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #d79cf1 0%, #967df9 100%);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -15px;
    left: 30px;
  }
  .text {   
    h3 {
      background: -webkit-linear-gradient(
        89.6deg,
        #d99cf0 -2.19%,
        #927bf9 102.14%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size:18px;
    }
    p{
        font-size: 14px;
    }
  }
}
</style>