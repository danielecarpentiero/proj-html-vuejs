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
      <Cookies :sweeties="sweeties" />
    </div>
  </div>
</template>

<script>
import Cookies from "./Cookies.vue";
import { store } from "../store.js";
export default {
  name: "MainThird",
  components: {
    Cookies,
  },
  data() {
    return {
      store,
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
