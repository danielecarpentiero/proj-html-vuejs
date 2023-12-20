<template>
  <section>
    <div class="container mt-5 d-flex flex-start flex-column">
      <h6>try our seasonal products</h6>
      <h1 class="title my-4">Order for pick-up or delivery to your home</h1>
      <button class="secondary mt-5">Shop Now</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Order",
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("../assets/img/call-to-action-bg.jpg");
  background-size: cover;
  height: 50vh;
  padding: 2rem;

  .container {
    width: 50%;
    padding: 2rem;

    .title {
      font-size: 3.5rem;
      width: 75%;
      font-weight: 700;
      color: white;
    }
    .secondary {
      padding: 1rem;
      border: none;
      cursor: pointer;
      width: 15%;
    }
  }
}
</style>
