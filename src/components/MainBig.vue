<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col col-12 first p-5">
        <div class="main-text d-flex justify-content-between">
          <h5>Tell us what you have in mind</h5>
          <span>01</span>
        </div>
        <div
          class="info d-flex align-items-end justify-content-end flex-column"
        >
          <h6>manual ingredients selection</h6>
          <p>
            Cras consequat lectus vestibulum tortor pulvinar, quis euismod nist
            varius. Ut eu laoreet ex, Aliquam erat volutpat. Nullam quis
            sagittis nibh, Morbi consectetur ultricies ante ac congue, Donec
            lorem erat, finibus in velit placerat, rutrum augue.
          </p>
        </div>
      </div>
    </div>
    <div class="row d-flex">
      <div class="col second gx-5 col-6 p-5">
        <div class="main-text d-flex justify-content-between">
          <h5>Delivered to your home</h5>
          <span>02</span>
        </div>
        <div
          class="info d-flex align-items-start justify-content-end flex-column"
        >
          <h6>sweet & delicious</h6>
          <p>
            Cras consequat lectus vestibulum tortor pulvinar, quis euismod nist
            varius. Ut eu laoreet ex, Aliquam erat volutpat. Nullam quis
            sagittis nibh, Morbi consectetur ultricies ante ac congue, Donec
            lorem erat, finibus in velit placerat, rutrum augue.
          </p>
        </div>
      </div>
      <div
        class="col third px-5 d-flex flex-column justify-content-center col-6"
      >
        <h6>don't just take our word for it</h6>
        <p class="pb-4">
          "Finally found an alternative to the mass produced products. Something
          that incorporates real organic ingredients, nutrient dense wellness
          while promoting sustainability and activity."
        </p>
        <div class="founder">Rachel Cooper, Founder</div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col col-12 fourth p-5">
        <div class="main-text d-flex justify-content-between">
          <h5>We Start Baking</h5>
          <span>03</span>
        </div>
        <div
          class="info d-flex align-items-start justify-content-end flex-column"
        >
          <h6>baked to order & gift wrapped</h6>
          <p>
            Cras consequat lectus vestibulum tortor pulvinar, quis euismod nist
            varius. Ut eu laoreet ex, Aliquam erat volutpat. Nullam quis
            sagittis nibh, Morbi consectetur ultricies ante ac congue, Donec
            lorem erat, finibus in velit placerat, rutrum augue.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBig",
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 14rem;
}
.col {
  h5 {
    font-weight: 700;
    font-family: "Source Serif 4", serif;
    font-size: 3.5rem;
  }
  span {
    font-size: 4rem;
  }
  position: relative;
  height: 50vh;
  .info {
    height: 80%;
    width: 100%;
    h6,
    p {
      width: 25%;
    }
  }
}

.first,
.second,
.fourth {
  color: white;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.first {
  background-image: url(../assets/img/bakery-process-1.jpg);
  background-size: cover;
}

.second {
  background-image: url(../assets/img/bakery-process-2.jpg);
  background-size: cover;
}

.second .info {
  width: 100%;
  display: flex;
  flex-direction: column;
  h6,
  p {
    width: 40%;
  }
}
.third {
  background-color: #f3eef4;
  p {
    line-height: 55px;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: "Source Serif 4", serif;
    color: #55328b;
  }
}

.fourth {
  background-image: url(../assets/img/bakery-process-3.jpg);
  background-size: cover;
}

.first .main-text,
.first .info,
.second .main-text,
.second .info,
.third .main-text,
.third .info,
.fourth .main-text,
.fourth .info {
  position: relative;
  z-index: 1;
}
</style>
