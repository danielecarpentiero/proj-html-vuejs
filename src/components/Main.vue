<template>
  <main>
    <MainFirst />
    <MainSecond />
    <MainThird />
    <MainBig />
    <Locations />
    <StayInTouch />
    <Order />
  </main>
</template>

<script>
import MainFirst from "./MainFirst.vue";
import MainSecond from "./MainSecond.vue";
import MainThird from "./MainThird.vue";
import MainBig from "./MainBig.vue";
import Order from "./Order.vue";
import Locations from "./Locations.vue";
import StayInTouch from "./StayInTouch.vue";
export default {
  name: "Main",
  components: {
    MainFirst,
    MainSecond,
    MainThird,
    MainBig,
    Order,
    Locations,
    StayInTouch,
  },
};
</script>

<style scoped></style>
