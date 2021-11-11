<template >
  <div class="tab_content" v-show="title == selectedTitle">
    <slot />
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: ["title"],
  setup() {
    let selectedTitle = inject("selectedTitle");

    return {
      selectedTitle,
    };
  },
};
</script>

<style lang="scss">

.tab_content{
  height: 355px;
  background-color: brown;
  width: 80%;
  margin: auto;
}
</style>
