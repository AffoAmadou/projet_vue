<template >
  <div
    class="tab_content"
    v-show="title == selectedTitle"
  >
    <!--  v-bind:style -->
    <!-- <p>{{Image}}</p> -->
    <slot />
  </div>
</template>

<script>
import { inject } from "vue";
// import Angele from "../images/Angele.png";*
//import Image from "../images/Angele.png";

export default {
  props: ["title"],
  data: () => ({
    // Image,
  }),

  setup() {
    let selectedTitle = inject("selectedTitle");

    return {
      selectedTitle,
    };
  },
};
</script>

<style lang="scss">
.tab_content {
  height: 355px;
  background-color: tomato;
  width: 80%;
  margin: auto;
  background-size: cover;
  border-radius: 0 0 30px 30px ;
}
</style>
