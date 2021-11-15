<template >
  <div class="tabs">
    <button
      v-for="tab_title in tabsItems"
      @click="updateSelectedTab(tab_title.id)"
      :key="tab_title.id"
      :class="{ active: selectedTab === tab_title.id }"
    >
      {{ tab_title.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabsItems: Array,
    selectedTab: String,
  },
  methods: {
    updateSelectedTab(tabId) {
      this.$emit("updateSelectedTab", tabId);
    },
  },
};
</script>

<style lang="scss">
.tabs {
  width: 100%;
  margin: auto;
  color: black;
  display: flex;
  button {
    flex-basis: 100%;
    text-align: center;
    padding: 15px 30px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-right: 0.5px solid white;
    color: white;
  }
}
.active {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
}
</style>
