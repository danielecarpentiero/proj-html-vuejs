<template>
  <div class="col-2" v-for="sweet in store.sweeties">
    <div class="sweet-item">
      <img :src="sweet.img" alt="" />
      <div class="select">
        <h6>select options / quick view</h6>
      </div>
    </div>
    <h4 class="my-3">{{ sweet.name }}</h4>
    <h6>{{ sweet.priceRange }}</h6>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "Cookies",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped lang="scss">
.col-2 {
  position: relative;

  .sweet-item {
    position: relative;

    img {
      transition: all 0.3s ease-in-out;
      width: 100%;

      &:hover {
        + .select {
          opacity: 1;
        }
        filter: brightness(80%);
      }
    }

    .select {
      opacity: 0;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h6 {
        color: white;
      }
    }
  }

  h4 {
    text-align: center;
    font-size: 1.5rem;
  }
  h6 {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
