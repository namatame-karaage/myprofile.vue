<template>
  <div id="works">
    <div class="works-inner">
      <h1 class="works-title">Works</h1>
      <p class="works-subtitle">*随時、追加します</p>
      <div class="works-box">
        <div class="works-card">
          <img src="../assets/images/myprofile.png" alt="myprofile" class="works-img" />
          <h4>MyProfile</h4>
          <p class="works-text">簡単な自己紹介です。</p>
          <p class="works-made">制作期間: ４日間</p>
          <p><span class="type-btn">vue.js</span></p>
          <a href="https://github.com/namatame-karaage/myprofile.vue/tree/master/profile-vue"><font-awesome-icon :icon="['fab','github']" class="icon-github"/></a>
        </div>
         <div class="works-card">
          <img src="../assets/images/raght.png" alt="myprofile" class="works-img" />
          <h4>ある料理店</h4>
          <p class="works-text">コーポレイト</p>
          <p class="works-made">制作期間: ４日間</p>
          <p><span class="type-btn">Scss</span>
          <p><span class="type-btn">Javascirpt</span></p>
          <a href="https://cook-ragut-due.netlify.app/"><font-awesome-icon icon="sign-in-alt" class="icon-home"/></a>
          <a href="https://github.com/namatame-karaage/basic-html-css-js"><font-awesome-icon :icon="['fab','github']" class="icon-github"/></a>
        </div>
        <div class="works-card">
          <img src="../assets/images/rails.animal.png" alt="animal.portfolio" class="works-img"/>
          <h4>Animals Domi</h4>
          <p class="works-text">動物・環境のニュース</p>
          <p class="works-made">制作期間: 14日間</p>
            <p>
              <span class="type-btn">Rails</span>
              <span class="type-btn">Scss</span>
              <span class="type-btn">Javascirpt</span>
            </p>
            <p>
              <span class="type-btn">Aws(s３)</span>
              <span class="type-btn">TravisCi</span>
              <span class="type-btn">Docker</span>
            </p>
          <a href="https://roteger-les-animaux.herokuapp.com/"><font-awesome-icon icon="sign-in-alt" class="icon-home"/></a>
          <a href="https://github.com/namatame-karaage/animals-dona"><font-awesome-icon :icon="['fab','github']" class="icon-github"/></a>
        </div>
        <div class="works-card">
          <img src="../assets/images/noimage.png" alt="animal.portfolio" class="works-img"/>
          <h4>Vue.jsで作成中</h4>
          <p class="works-text">Vue.routerなど使用する予定</p>
          <!-- <p class="works-text">動物・環境のニュース</p>
          <p class="works-made">制作期間: 14日間</p>
            <p>
              <span class="type-btn">Rails</span>
              <span class="type-btn">Scss</span>
              <span class="type-btn">Javascirpt</span>
            </p>
            <p>
              <span class="type-btn">Aws(s３)</span>
              <span class="type-btn">TravisCi</span>
              <span class="type-btn">Docker</span>
            </p> -->
          <!-- <a href="https://roteger-les-animaux.herokuapp.com/"><font-awesome-icon icon="sign-in-alt" class="icon-home"/></a>
          <a href="https://github.com/namatame-karaage/animals-dona"><font-awesome-icon :icon="['fab','github']" class="icon-github"/></a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#works {
  width: 100%;
  height: 100%;
  margin-top: 30px;
}

.works-title {
  color: black;
  text-align: center;
  font-family: "Fjalla One", sans-serif;
  font-size: 2.5rem;
  letter-spacing: 7px;
}
.works-title::after {
  content: "";
  display: block;
  border: 2px solid black;
  width: 35%;
  margin: 7px auto 30px;
}
.works-subtitle {
  text-align: center;
  opacity: 0.6;
  color: black;
  font-weight: 600;
  letter-spacing: 5px;
}
.works-box{
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.works-card{
  width: 33%;
  background-color: white;
  border-radius: 20px;
  margin: 30px;
  padding: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: all .3s;
}
.works-card:hover{
  transform: scale(1.04);
  opacity: .9;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
}

.works-text,
.works-made{
  font-size: 13px;
  color: #333
}

.works-img {
  width: 300px;
  height: 200px;
  border-radius: 20px;
}
.type-btn{
  background-color: black;
  color: white;
  padding: 3px 6px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
}
.icon-home,
.icon-github{
  margin-top: 20px;
}

.icon-home{
  color: black;
  background-color: aliceblue;
  padding: 10px;
  font-size: 2.5rem;
  margin-right: 10px;
  transition: all .2s;
  border: 1px solid;
  border-radius: 50%;
}
.icon-home:hover{
  opacity: .7;
  color: rgb(47, 146, 233);
  background-color: white;
}
.icon-github {
  color: white;
  padding: 10px;
  font-size: 2.5rem;
  background-color: black;
  border-radius: 50%;
  border: 1px solid;
  transition: all .2s;
}
.icon-github:hover {
  color: black;
  background-color: white;
}

@media screen and (max-width: 480px){
  .works-card{
    width: auto;
  }
  .type-btn{
    margin: auto;
  }
}

@media screen and (max-width: 769px){
  .works-card{
    width: auto;
  }
}

@media screen and (max-width: 1024px){
  .works-card{
    width: auto;
  }
}
</style>
