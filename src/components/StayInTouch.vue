<template>
  <div class="container">
    <div class="row gy-5 mb-4">
      <div class="col-3">
        <img src="../assets/img/social-1.jpg" alt="" />
      </div>
      <div
        class="col-6 made d-flex flex-column justify-content-center align-items-center"
      >
        <h6>made for sharing</h6>
        <h2 class="py-4">Let's stay in touch</h2>
        <button class="primary py-2 px-4">
          <font-awesome-icon :icon="['fab', 'instagram']" /> Follow Us
        </button>
      </div>
      <div class="col-3">
        <img src="../assets/img/social-2.jpg" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <img src="../assets/img/social-3.jpg" alt="" />
      </div>
      <div class="col-3">
        <img src="../assets/img/social-4.jpg" alt="" />
      </div>
      <div class="col-3">
        <img src="../assets/img/social-5.jpg" alt="" />
      </div>
      <div class="col-3">
        <img src="../assets/img/social-6.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StayInTouch",
};
</script>

<style scoped>
.container {
  margin: 200px auto;
}
.made {
  background-color: #f1eef4;
}

img {
  width: 100%;
}
</style>
