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
  Jumbos: [
    {
      title: "Tell us what you have in mind",
      number: "01",
      subtitle: "manual ingredients selection",
      background: "src/assets/img/bakery-process-1.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
    },
    {
      title: "We start baking",
      number: "02",
      subtitle: "sweet & delicious",
      background: "src/assets/img/bakery-process-2.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
    },
    {
      title: "dont just take our word for it",
      number: "",
      subtitle:
        "Finally found an alternative to the mass produced products. Something that incorporatesr eal organic ingredients, nutrient dense wellness while promoting sustainability and activity.",
      background: "",
      paragraph: "Rachel Cooper, Founder",
    },
    {
      title: "Delivered to your home",
      number: "03",
      subtitle: "baked to order & gift wrapped",
      background: "src/assets/img/bakery-process-3.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
    },
  ],
});
