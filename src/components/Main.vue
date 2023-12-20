<template>
  <MainFirst />
  <MainSecond />
  <MainThird />
  <MainBig />
</template>

<script>
import MainFirst from "./MainFirst.vue";
import MainSecond from "./MainSecond.vue";
import MainThird from "./MainThird.vue";
import MainBig from "./MainBig.vue";
export default {
  name: "Main",
  components: {
    MainFirst,
    MainSecond,
    MainThird,
    MainBig,
  },
};
</script>

<style scoped></style>
