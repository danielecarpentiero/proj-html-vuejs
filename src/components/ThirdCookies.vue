<template>
  <div class="col-2" v-for="sweet in sweetiesFromStore" :key="sweet.name">
    <img :src="sweet.img" alt="" />
    <h4 class="my-3">{{ sweet.name }}</h4>
    <h6>{{ sweet.priceRange }}</h6>
  </div>
</template>

<script>
import { store } from "../store"; // Importa il tuo store correttamente

export default {
  name: "ThirdCookies",
  computed: {
    sweetiesFromStore() {
      return store.sweeties; // Accedi direttamente agli sweeties dallo store
    },
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
  font-size: 1.5rem;
}
h6 {
  text-align: center;
  font-size: 1rem;
}
img {
  width: 100%;
}
</style>
