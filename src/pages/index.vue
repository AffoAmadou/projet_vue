<template>
  <div class="accueil">
    <div class="container">
      <Header />
      <!-- <Title /> -->
      <Concert :tabsItems="tabsItems" />

      <Title :title="second_header" />
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Header from "../components/header.vue";
import Concert from "../components/Concert.vue";

export default {
  name: "Accueil",
  components: {
    Title,
    Header,
    Concert,
  },
  data() {
    return {
      second_header: "buuk, le rêve des fans de concerts.",
      tabsItems: [
        {
          id: "angele",
          title: "Angele",
          backgroundImage: "/images/Angele.png",
          date: "15 DÉCEMBRE 2020",
          text: "LYON, PALAIS DES SPORTS",
        },
        {
          id: "damso",
          title: "Damso",
          backgroundImage: "/images/Angele.png",
          date: "16 DÉCEMBRE 2020",
          text: "Annecy, La grande roue",
        },
        {
          id: "laylow",
          title: "Laylow",
          backgroundImage: "/images/Angele.png",
          date: "17 DÉCEMBRE 2020",
          text: "Paris, Parc des Princes",
        },
        {
          id: "rihanna",
          title: "Rihanna",
          backgroundImage: "/images/Angele.png",
          date: "18 DÉCEMBRE 2020",
          text: "Marseille, Stade Vélodrome",
        },
        {
          id: "amir",
          title: "Amir",
          backgroundImage: "/images/Angele.png",
          date: "19 DÉCEMBRE 2020",
          text: "Nice, Arena",
        },
      ],
      fonctionnement: [
        {
          id: 1,
          title: "Choisis ton artiste",
          text: "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
        },
        {
          id: 2,
          title: "Réserve ton billet",
          text: "buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !",
        },
        {
          id: 3,
          title: "Kiffe ton concert",
          text: "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
        },
      ],
    };
  },
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

.container {
  // height: 2459px;
  background: radial-gradient(
    51.9% 336.54% at 51.9% 50%,
    #241b4d 0%,
    #1b1b1b 100%
  );
  border-radius: 0px 0px 150px 150px;
}
</style>