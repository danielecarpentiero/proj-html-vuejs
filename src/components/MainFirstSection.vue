<template>
  <div class="container d-flex justify-content-between">
    <div class="box">
      <h6 class="mb-4">our products</h6>
      <h2>
        All our delectable pastries are backed fresh in our Kitchen every
        morning, and are made with all natural, all organic ingredients.
      </h2>
      <button class="d-flex align-items-center primary mt-5 px-3 py-2">
        Start shopping
      </button>
    </div>
    <div class="box mx-4">
      <img src="../assets/img/blackberry-stuffed-bread-800x1020.jpg" alt="" />
    </div>
    <div class="box">
      <img src="../assets/img/cherry-cake-800x1020.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFirstSection",
};
</script>

<style scoped>
.box {
  h2 {
    line-height: 45px;
  }
  width: calc(100% / 3);
  margin: 30px;
  img {
    width: 100%;
  }
}
</style>
