<template>
  <div id="skills">
    <div class="skills-inner">
      <h1 class="skills-title">Skills</h1>
      <p class="skills-subtitle">*基準が分からないため、勉強期間で示しています</p>
      <div class="skills-box">
        <div class="skills-card">
          <img
            src="../assets/images/html5_logo.png"
            alt=""
            class="skills-img"
          />
          <h3>HTML</h3>
          <p class="skills-study">勉強期間： 5ヶ月〜</p>
        </div>
        <div class="skills-card">
          <img src="../assets/images/css3_logo.png" alt="" class="skills-img" />
          <h3>CSS/Scss</h3>
          <p class="skills-study">勉強期間： 5ヶ月〜/ Scssは、4ヶ月〜</p>
        </div>
        <div class="skills-card">
          <img src="../assets/images/js_logo.png" alt="" class="skills-img" />
          <h3>JavaScirpt</h3>
          <p class="skills-study">勉強期間： 1ヶ月〜</p>
        </div>
        <div class="skills-card">
          <img
            src="../assets/images/rails_logo.png"
            alt=""
            class="skills-img"
          />
          <h3>Ruby on Rails</h3>
          <p class="skills-study">勉強期間： 2ヶ月〜</p>
        </div>
        <div class="skills-card">
          <img src="../assets/images/vuejs.png" alt="" class="skills-img" />
          <h3>Vue.js</h3>
          <p class="skills-study">勉強期間： 2週間〜</p>
        </div>
        <div class="skills-card">
          <img
            src="../assets/images/docker-logo.png"
            alt=""
            class="skills-img"
          />
          <h3>Docker/Docer-compose</h3>
          <p class="skills-study">勉強期間： 2週間〜</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#skills {
  width: 100%;
  height: 100%;
  background-color: rgb(168, 164, 164);
  box-shadow: rgba(0, 0, 0, 0.4) 0px -10px 90px;
}
.skills-inner {
  width: 88%;
  margin: 45px auto;
  padding: 30px;
}
.skills-title {
  color: white;
  text-align: center;
  font-family: "Fjalla One", sans-serif;
  font-size: 2.5rem;
  letter-spacing: 7px;
}
.skills-title::after {
  content: "";
  display: block;
  border: 2px solid white;
  width: 35%;
  margin: 7px auto 30px;
}
.skills-subtitle{
  text-align: center;
  opacity: .6;
  color: white;
  font-weight: 600;
  letter-spacing: 5px;
}
.skills-box {
  text-align: center;
}
.skills-card {
  width: 25%;
  padding: 30px 15px;
  margin: 30px;
  display: inline-block;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)
}
.skills-img {
  width: 50px;
  height: 50px;
}
.skills-study{
  font-size: .9rem;
  opacity: .7;
}

@media screen and (max-width: 480px){
  .skills-card{
    width: auto;
  }
}
</style>
