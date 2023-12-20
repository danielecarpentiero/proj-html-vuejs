<template>
  <div class="col-2" v-for="sweet in sweeties">
    <img :src="sweet.img" alt="" />
    <h4 class="my-3">{{ sweet.name }}</h4>
    <h6>{{ sweet.priceRange }}</h6>
  </div>
</template>

<script>
export default {
  name: "ThirdCookies",
  props: {
    sweeties: {
      type: Array,
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
