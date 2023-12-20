import { reactive } from "vue";

export const store = reactive({
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
});
