<template>
  <MainFirst />
  <MainSecond />
  <MainThird />
  <MainBig />
  <Order />
</template>

<script>
import MainFirst from "./MainFirst.vue";
import MainSecond from "./MainSecond.vue";
import MainThird from "./MainThird.vue";
import MainBig from "./MainBig.vue";
import Order from "./Order.vue";
export default {
  name: "Main",
  components: {
    MainFirst,
    MainSecond,
    MainThird,
    MainBig,
    Order,
  },
};
</script>

<style scoped></style>
