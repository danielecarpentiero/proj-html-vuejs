<template>
  <div class="header-nav">
    <HeaderNav :navItemsProp="navItems" />
  </div>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
export default {
  name: "HeaderNavWrapper",
  components: {
    HeaderNav,
  },
  data() {
    return {
      navItems: [
        {
          name: "Home",
          link: "#",
        },
        {
          name: "Shop",
          link: "#",
        },
        {
          name: "About",
          link: "#",
        },
        {
          name: "Gallery",
          link: "#",
        },
        {
          name: "Locations",
          link: "#",
        },
        {
          name: "Journal",
          link: "#",
        },
        {
          name: "Contact",
          link: "#",
        },
        {
          name: "My Account",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.header-nav {
  width: 45%;
}
</style>
