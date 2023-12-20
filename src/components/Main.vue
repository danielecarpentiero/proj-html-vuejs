<template>
  <MainFirst />
  <MainSecond />
  <MainThird />
</template>

<script>
import MainFirst from "./MainFirst.vue";
import MainSecond from "./MainSecond.vue";
import MainThird from "./MainThird.vue";
export default {
  name: "Main",
  components: {
    MainFirst,
    MainSecond,
    MainThird,
  },
};
</script>

<style scoped></style>
