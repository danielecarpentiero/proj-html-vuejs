<!-- HeaderNav.vue -->
<template>
  <ul class="d-flex justify-content-between">
    <li v-for="navItem in navItemsProp" :key="navItem.name">
      {{ navItem.name }}
    </li>
    <li>
      <font-awesome-icon :icon="['fas', 'cart-shopping']" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeaderNav",
  props: {
    navItemsProp: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
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
</style>
