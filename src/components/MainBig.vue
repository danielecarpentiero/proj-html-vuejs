<template>
  <div class="main-big">
    <div class="container">
      <div
        class="box my-5 d-flex flex-column"
        v-for="jumbo in store.jumbos"
        :style="{ backgroundImage: 'url(' + jumbo.background + ')' }"
      >
        <h1 class="p-5">{{ jumbo.title }}</h1>
        <h2 class="number">{{ jumbo.number }}</h2>
        <div class="info">
          <h2 class="sub">{{ jumbo.subtitle }}</h2>
          <p>{{ jumbo.paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "MainBig",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped lang="scss">
.box {
  height: 800px;
  width: 100%;
  position: relative;
  background-size: cover;

  h1,
  h2,
  p {
    color: white;
  }
  .number {
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 5rem;
  }
  .info {
    position: absolute;
    bottom: 25%;
    right: 5%;
    width: 20%;
    height: 20%;
  }
}
.box:first-of-type,
.box:last-of-type {
  .number {
    position: absolute;
    top: 5%;
    right: 5%;
  }
}
.box:nth-of-type(2) {
  width: 50%;
  .number {
  }
}
.box:nth-of-type(3) {
  width: 50%;
}

.box:last-of-type {
  width: 100%;
}
</style>
