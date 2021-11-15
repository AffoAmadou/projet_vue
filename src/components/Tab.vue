<template >
  <div
    class="tab"
    :style="`background-image:url('${currentConcert.backgroundImage}')`"
  >
    <div class="tab_content">
      <div class="tab_text">
        <h2>{{ currentConcert.date }}</h2>
        <p>{{ currentConcert.text }}</p>
      </div>
      <button>Réserver</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    currentConcert: Object,
  },
  data() {
    // Image,
    return {};
  },
};
</script>

<style lang="scss">
.tab {
  min-height: 355px;
  margin: auto;
  background-size: cover;
  border-radius: 0 0 30px 30px;
  display: flex;
  align-items: flex-end;
  .tab_content {
    width: 95%;
    margin: 0 auto;
    padding: 31px;
    display: flex;
    justify-content: space-between;
  }
  button {
    background: linear-gradient(72.83deg, #d48ae6 0%, #9a82fc 100%);
    border-radius: 14px;
    padding: 10px 20px;
    border: none;
  }
}
</style>
