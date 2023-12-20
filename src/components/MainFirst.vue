<template>
  <div class="container d-flex justify-content-between">
    <div class="mx-5">
      <h6 class="mb-4">our products</h6>
      <h2>
        All our delectable pastries are backed fresh in our Kitchen every
        morning, and are made with all- natural, all organic ingredients.
      </h2>
      <button class="d-flex align-items-center primary mt-5 px-3 py-2">
        Start shopping
      </button>
    </div>
    <div class="col-4" v-for="sweet in store.sweeties.slice(0, 2)">
      <img :src="sweet.img" alt="" />
      <h4 class="my-3">{{ sweet.name }}</h4>
      <h6>{{ sweet.priceRange }}</h6>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "MainFirst",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 100px;
}
h2 {
  line-height: 45px;
}
.col-4 {
  margin: 30px;
}
img {
  width: 100%;
}
</style>
