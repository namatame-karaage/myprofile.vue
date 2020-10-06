<template>
  <div id="app">
    <Header></Header>
    <div id="top">
      <div class="main-message">
        <h1>My name is 'Namatame Fumiya'</h1>
        <p>Thank you for coming</p>
      </div>
      <vue-particles color="#dedede" class="particles"></vue-particles>
      <h2 class="icon"><img src="./assets/images/arrow.svg" alt="" /></h2>
    </div>

    <about-me></about-me>
    <skills></skills>
    <works></works>
    <contact></contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Works from "./components/Works.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    AboutMe,
    Skills,
    Works,
    Contact,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#top {
  position: relative;
  background-image: url("./assets/images/swan.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  font-family: "Fjalla One", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 90px;
}

.main-message {
  position: absolute;
  top: 58%;
  left: 27%;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 7px;
  animation: kf-slide-opacity 3s;
  transition: all 0.3s;
  text-shadow: 1px 1px 20px white;
}

@keyframes kf-slide-opacity {
  0% {
    opacity: 0;
    transform: translateX(40%);
  }
  30% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  50.1% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

.icon {
  color: white;
  text-align: center;
  animation: kf-arrow-anime;
  animation-iteration-count: infinite;
  animation-duration: 1.7s;
  animation-timing-function: linear;
}

@keyframes kf-arrow-anime {
  0%,
  50%,
  100% {
    transform: translateY(-30%);
  }
  30% {
    transform: none;
  }
}

@media screen and (max-width: 480px) {
  .particles {
    height: 450px;
  }
  .main-message{
    top: 25%;
    left: 15%;
  }
}
</style>
