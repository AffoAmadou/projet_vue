<template>
  <div class="Concert">
    <div class="container">
      <Header :title1="title" :title2="stitle" />
    </div>
    <Category v-for="style in cat" :key="style.id" :id="style"> </Category>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header_eco/header.vue";
import Footer from "../components/footer.vue";
import Category from "../components/Categories/Category.vue";

export default {
  name: "Concert",
  components: {
    Header,
    Footer,
    Category,
  },
  data() {
    return {
      title: "Tous les concerts,",
      stitle: "en avant-première.",
      cat: [
        {
          id: "Rap/R&B",
          infos: [
            {
              date: "Le 20 janvier 2022",
              name: "Dadju",
              place: "Marseille, Vélodrome",
              backgroundImage: "/images/dadju.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Damso",
              place: "Stade Mager, Chambéry",
              backgroundImage: "/images/damso.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Angéle",
              place: "Parc des Sports, Annecy",
              backgroundImage: "/images/angeles.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Louane",
              place: "Le Phare, Chambéry",
              backgroundImage: "/images/louane.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Amir",
              place: "Marseille, Vélodrome",
              backgroundImage: "/images/amir.png",
            },
          ],
        },
        {
          id: "Variété française",
          infos: [
            {
              date: "Le 20 janvier 2022",
              name: "Garou",
              place: "Marseille, Vélodrome",
              backgroundImage: "/images/garou.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Vitaa",
              place: "Stade Mager, Chambéry",
              backgroundImage: "/images/vitaa.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Patrick Bruel",
              place: "Parc des Sports, Annecy",
              backgroundImage: "/images/patrick.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Julien Clerc",
              place: "Le Phare, Chambéry",
              backgroundImage: "/images/julien.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Slimane",
              place: "Marseille, Vélodrome",
              backgroundImage: "/images/slimane.png",
            },
          ],
        },
        {
          id: "Electro",
          infos: [
            {
              date: "Le 20 janvier 2022",
              name: "Vladimir Cauch.",
              place: "Marseille, Vélodrome",
              backgroundImage: "/images/vladimir.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "David Guetta",
              place: "Stade Mager, Chambéry",
              backgroundImage: "/images/davidgueta.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Kygo",
              place: "Parc des Sports, Annecy",
              backgroundImage: "/images/kygo.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "One Republic",
              place: "Le Phare, Chambéry",
              backgroundImage: "/images/onerepublic.png",
            },
            {
              date: "Le 20 janvier 2022",
              name: "Afrojack",
              place: "Marseille, Vélodrome",
              backgroundImage: "/images/afrojack.png",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.Concert {
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
.container {
  width: 100%;
  background: radial-gradient(
    51.9% 336.54% at 51.9% 50%,
    #241b4d 0%,
    #1b1b1b 100%
  );
  border-radius: 0px 0px 150px 150px;
}
</style>