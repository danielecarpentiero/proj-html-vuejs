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
      <div class="image-container">
        <img :src="sweet.img" alt="" />
        <div class="info">
          <h4 class="my-3">{{ sweet.name }}</h4>
          <h6>{{ sweet.priceRange }}</h6>
        </div>
      </div>
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

<style scoped lang="scss">
.container {
  margin-top: 100px;
  margin-bottom: 100px;

  .image-container {
    position: relative;
    margin: 30px;

    img {
      width: 100%;
      transition: filter 0.3s ease-in-out;
    }

    .info {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h4,
      h6 {
        color: white;
      }
    }

    &:hover {
      img {
        filter: brightness(80%);
      }

      .info {
        opacity: 1;
      }
    }
  }

  h2 {
    line-height: 45px;
  }
}
</style>
