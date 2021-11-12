<template>
  <div class="accueil">
    <Header />
    <!-- <Title /> -->
    <Tabs>
      <Tab  v-for="title in tabsItem" :key="title.title" title="{{title.title}}">{{title.title}}</Tab>
      
    </Tabs>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Header from "../components/header.vue";
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";


export default {
  name: "Accueil",
  components: {
    Title,
    Header,
    Tab,
    Tabs,
  },
  data: () => ({
    return: {
      tabsItems: [
        {
          id: "bg-angele",
          title: "Angèle",
          backgroundImage: "erfifhr",
          date: "fezfze",
        },
        {
          id: "bg-angele",
          title: "Damso",
          backgroundImage: "erfifhr",
          date: "fezfze",
        },
        {
          id: "bg-angele",
          title: "Laylow",
          backgroundImage: "erfifhr",
          date: "fezfze",
        },
        {
          id: "bg-angele",
          title: "Rihanna",
          backgroundImage: "erfifhr",
          date: "fezfze",
        },
        {
          id: "bg-angele",
          title: "Amir",
          backgroundImage: "erfifhr",
          date: "fezfze",
        },
      ],
    },
  }),
};
</script>

<style lang="scss">
.accueil {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
}
</style>