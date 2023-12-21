<template>
  <section class="locations">
    <h6 class="text-center">locations</h6>
    <h2 class="text-center mb-5 mt-4">Visit our Bakeries</h2>
    <div class="container mb-5 d-flex">
      <div class="places" v-for="location in store.locations">
        <img :src="location.img" alt="" />
        <h1 class="text-center my-5">{{ location.place }}</h1>
        <div class="info m-5 d-flex justify-content-between">
          <div class="phone">
            <h6 class="text-center">call us</h6>
            <h5>{{ location.number }}</h5>
          </div>
          <div class="time">
            <h6 class="text-center">open all week</h6>
            <h5>{{ location.time }}</h5>
          </div>
          <button class="secondary my-2 px-4">View Map</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "Locations",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped lang="scss">
.locations {
  margin: 200px auto;
}
.places {
  width: 100%;
  img {
    width: 100%;
  }
  h5 {
    color: #766d7c;
  }
}

.places:first-of-type {
  background-color: #f1f9fb;
}
.places:last-of-type {
  background-color: #faf3e3;
}
</style>
