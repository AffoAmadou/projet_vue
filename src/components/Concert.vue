<template>
  <div class="concert">
    <Tabs
      :tabsItems="tabsItems"
      v-model:selectedTab="this.selectedTab"
      @update-selected-tab="this.updateSelectedTab"
    />
    <Tab
      v-model:currentConcert="
        tabsItems.filter((obj) => obj.id === this.selectedTab)[0]
      "
    />
  </div>
</template>

<script>
import Tab from "./Tab.vue";
import Tabs from "./Tabs.vue";

export default {
  name: "Concert",
  data() {
    return{
      selectedTab: "angele"
    }
  },
  props: {
    tabsItems: Array,
  },
  components: {
    Tab,
    Tabs,
  },
  methods: {
    updateSelectedTab(tabId) {
      this.selectedTab = tabId;
    },
  },
};
</script>

<style lang="css">
.concert {
  width: 80%;
  margin: auto;
  padding: 20px;
}
</style>
