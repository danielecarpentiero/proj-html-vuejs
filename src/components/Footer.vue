<template>
  <footer>
    <div class="container d-flex">
      <div class="left-footer col-7">
        <HeaderLogo />
        <HeaderNavWrapper class="footer-nav my-5" />
        <h6 class="py-5 mx-4">
          Copyright 2012 - 2020 | Avada Theme Themerusion | All Rights Reserved
          | Powered by WordPress
        </h6>
      </div>
      <div class="right-footer col-5">
        <h3 class="text-end pb-3">Subscribe to our Newsletter!</h3>
        <div class="form d-flex justify-content-end my-5">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email address*"
          />
          <button class="primary ms-2 px-3 py-2">Subscribe</button>
        </div>
        <div class="icons d-flex justify-content-end align-items-end">
          <ul class="socials d-flex justify-content-between">
            <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
            <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
            <li><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
            <li><font-awesome-icon :icon="['fab', 'pinterest-p']" /></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNavWrapper from "./HeaderNavWrapper.vue";
export default {
  name: "Footer",
  components: {
    HeaderLogo,
    HeaderNavWrapper,
  },
};
</script>

<style scoped lang="scss">
.footer-nav {
  font-size: 1rem;
}

h6 {
  text-transform: lowercase !important;
  font-size: 14px !important;
}

.icons {
  height: 40%;
}

.container {
  margin: 50px auto;
  .form-control {
    width: 50%;
  }
  ul {
    width: 25%;
    li {
      list-style-type: none;
      color: #55328b;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
