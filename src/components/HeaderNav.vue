<template>
  <div class="navbar">
    <ul class="d-flex justify-content-between">
      <li v-for="navItem in navItems">
        {{ navItem.name }}
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
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
.navbar {
  width: 45%;
  display: flex;
  ul {
    width: 100%;
    li {
      color: #55328b;
      list-style-type: none;
      text-transform: uppercase;
      &:hover {
        cursor: pointer;
        border-bottom: 2px solid #000;
      }
    }
  }
}
</style>
