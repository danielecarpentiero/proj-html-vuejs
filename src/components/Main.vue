<template>
  <MainFirst />
  <MainSecond />
</template>

<script>
import MainFirst from "./MainFirst.vue";
import MainSecond from "./MainSecond.vue";
export default {
  name: "Main",
  components: {
    MainFirst,
    MainSecond,
  },
};
</script>

<style scoped></style>
