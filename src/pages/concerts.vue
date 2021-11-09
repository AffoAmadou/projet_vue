<template>
  <div class="concerts">
      <Welcome message="Conc page"/>
      <Nav />
  </div>
</template>

<script>
import Welcome from '../components/Title.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'Concerts',
  components: {
    Welcome,
    Nav,
  },
}
</script>

<style lang="scss">
.concerts {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>