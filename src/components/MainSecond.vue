<template>
  <h6>corporate & weddings</h6>
  <h2>Baking Special Moments</h2>
  <div class="photoshows d-flex">
    <div class="show mx-5" v-for="ad in ads">
      <div class="info">
        <h6 class="">{{ ad.preTitle }}</h6>
        <h2 class="">{{ ad.title }}</h2>
        <button class="d-flex align-items-center primary mt-2 px-3 py-2">
          {{ ad.button }}
        </button>
      </div>
      <img class="front" :src="ad.image" alt="" />
      <img class="back" :src="ad.imageHover" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSecond",
  data() {
    return {
      ads: [
        {
          image: "src/assets/img/corporate-bg.jpg",
          imageHover: "src/assets/img/corporate-hover-bg.jpg",
          preTitle: "international bakery",
          title: "Corporate Events",
          button: "Explore more",
        },
        {
          image: "src/assets/img/wedding-bg.jpg",
          imageHover: "src/assets/img/wedding-hover-bg.jpg",
          preTitle: "private dinings hall",
          title: "Wedding & Parties",
          button: "Explore more",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
button {
  margin: 0 auto;
}
.photoshows {
  width: 100%;
  padding: 50px 200px;
  .show {
    position: relative;
    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    .back {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 0.3s ease;
      z-index: 0;
    }
    &:hover {
      .front {
        opacity: 0;
      }
      .back {
        opacity: 1;
      }
      .info {
        opacity: 1;
      }
    }
  }
  img {
    width: 100%;
  }
  h2,
  h6 {
    color: white;
  }
}
h6,
h2 {
  text-align: center;
}
</style>
