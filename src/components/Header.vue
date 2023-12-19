<template>
  <header>
    <div class="p-4 d-flex justify-content-between align-items-center">
      <HeaderLogo />
      <HeaderNavWrapper />
    </div>
    <div class="ad m-5 p-5">
      <h6 class="mb-3">fresh & tasty bakery every day</h6>
      <h1>The Perfect Fresh Bread</h1>
      <p class="mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, impedit
        dolores ratione veritatis, mollitia nobis autem ducimus laborum velit
        necessitatibus vel molestiae porro eveniet repudiandae neque earum
        doloribus debitis magnam!
      </p>
      <button class="mt-4 px-4 py-2">Explore our products</button>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNavWrapper from "./HeaderNavWrapper.vue";
export default {
  name: "Header",
  components: {
    HeaderLogo,
    HeaderNavWrapper,
  },
};
</script>

<style scoped>
header {
  color: #88828f;
  height: 80vh;
  background-image: url("../assets/img/hero-header-bakery.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.ad {
  width: 35%;

  h1 {
    font-size: 4rem;
    color: #55328b;
  }
  p {
    line-height: 30px;
  }
}
button {
  border-radius: 5px;
  background-color: white;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #55328b;
  &:hover {
    background-color: #55328b;
    color: white;
    transition: all 0.3s ease-in-out;
  }
}
</style>
