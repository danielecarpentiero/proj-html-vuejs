<template>
  <h6>corporate & weddings</h6>
  <h2>Baking Special Moments</h2>
  <div class="photoshows">
    <div class="show" v-for="ad in ads">
      <img :src="ad.image" alt="" />
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
          image: "../assets/img/corporate-bg.jpg",
          imageHover: "../assets/img/corporate-hover-bg.jpg",
          preTitle: "international bakery",
          title: "Corporate Events",
          button: "Explore more",
        },
        {
          image: "../assets/img/wedding-bg.jpg",
          imageHover: "../assets/img/wedding-hover-bg.jpg",
          preTitle: "private dinings hall",
          title: "Wedding & Parties",
          button: "Explore more",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

h6,
h2 {
  text-align: center;
}

h6 {
  margin-top: 150px;
}
</style>
