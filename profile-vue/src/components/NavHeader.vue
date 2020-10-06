<template>
  <div>
    <a class="nav-btn" href="/" @click="clickSmoothScroll('#app')">Top</a>
    <a class="nav-btn" href="/" @click="clickSmoothScroll('#about')"
      >About Me</a
    >
    <a class="nav-btn" href="/" @click="clickSmoothScroll('#skills')">Skills</a>
    <a class="nav-btn" href="/" @click="clickSmoothScroll('#works')">Works</a>
    <a class="nav-btn" href="/" @click="clickSmoothScroll('#contact')"
      >Contact</a
    >
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
};
</script>

<style scoped>
.nav-btn {
  padding: 3px 8px;
  text-decoration: none;
  font-size: 1.4rem;
  color: white;
  margin-left: 30px;
  transition: all 0.2s;
}
.nav-btn:hover {
  opacity: 0.6;
  background-color: white;
  color: black;
}

@media screen and (max-width: 480px) {
  .nav-btn {
    font-size: 1rem;
    padding: 2.8px;
    margin: 0;
  }
}


</style>
