<template>
  <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-3 d-flex flex-column">
        <h2 class="my-4 text-center">
          Find a freshly baked product perfect for you
        </h2>
        <h6 class="mb-4 text-center">
          Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis
          at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed.
        </h6>
        <div class="button d-flex justify-content-center">
          <button class="primary px-4 py-2">Shop All Products</button>
        </div>
      </div>
      <ThirdCookies :sweeties="sweeties" />
    </div>
  </div>
</template>

<script>
import ThirdCookies from "./ThirdCookies.vue";
export default {
  name: "MainThird",
  components: {
    ThirdCookies,
  },
  data() {
    return {
      sweeties: [
        {
          img: "src/assets/img/choco-chip-cookies-1200x1530.jpg",
          name: "Choco Chip Cookies",
          priceRange: "$19.99 - $39.00",
        },
        {
          img: "src/assets/img/strawberry-jam-cookies-1200x1530.jpg",
          name: "Strawberry Jam Cookies",
          priceRange: "$24.00 - $62.00",
        },
        {
          img: "src/assets/img/strawberry-donut-1200x1530.jpg",
          name: "Strawberry Donut",
          priceRange: "$24.00 - $42.00",
        },
        {
          img: "src/assets/img/perfect-macarons-1200x1530.jpg",
          name: "Perfect Macarons",
          priceRange: "$18.00 - $52.00",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 200px;
}
h6 {
  text-transform: lowercase;
}
.button {
  width: 100%;
}
</style>
