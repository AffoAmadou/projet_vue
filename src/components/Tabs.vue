<template >
  <div class="tabs">
    <div class="tabs_header">
      <ul>
        <li
          v-for="title in tabTitles"
          :key="title"
          @click="selectedTitle = title"
        >
          {{ title }}
        </li>
      </ul>
    </div>
    //*Tab
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue"; //*Provide é per utilizzare un componente padre per gestire il figlio
export default {
  setup(props, { slots }) {
    //? creo un array che mi prennde l'attributo "title" dai vari tab creati
    let tabTitles = ref(slots.default().map((tab) => tab.props.title));
    //? prendo il valore del title selezionato
    let selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      //*! faccio il return cosi é accessibile al di fuori della proprietà
      tabTitles,
      selectedTitle,
    };
  },
};
</script>

<style lang="scss">
.tabs {
  width: 80%;
  margin: auto;
  color: black;
  .tabs_header {
    ul {
      display: flex;
      width: 80%;
      margin: auto;
      list-style: none;
      li {
        flex-basis: 100%;
        text-align: center;
        padding: 15px 30px;
        color: blue;
        cursor: pointer;
        &:active,
        &:hover {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
        }
      }
    }
  }
}

// .tab {
//   display: inline-block;
//   color: black;
//   padding: 20px;
//   min-width: 800px;
//   border-radius: 10px;
//   min-height: 400px;
// }

// .tabs__light .tab {
//   background-color: #fff;
// }

// .tabs__light li {
//   background-color: #ddd;
//   color: #aaa;
// }

// .tabs__light li.tab__selected {
//   background-color: #fff;
//   color: #83ffb3;
// }

// .tabs__dark .tab {
//   background-color: #555;
//   color: #eee;
// }

// .tabs__dark li {
//   background-color: #ddd;
//   color: #aaa;
// }

// .tabs__dark li.tab__selected {
//   background-color: #555;
//   color: white;
// }
</style>
