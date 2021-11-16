<template>
  <div class="Concert">
    <div class="container">
      <Header :title1="title" :title2="stitle" />
    </div>
    <Category> <p>sfdfsdffdf</p></Category>

    <!-- <Footer /> -->
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