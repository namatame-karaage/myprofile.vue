<template>
  <div id="about">
    <div class="about-inner">
      <h1 class="about-title">About Me</h1>
      <div class="about-box">
        <div class="about-profile">
          <img src="../assets/images/me.jpeg" alt="myimg" class="img" />
        </div>
        <div class="abtou-info">
          <h2>生田目 郁也</h2>
          <a href="https://github.com/namatame-karaage"><font-awesome-icon :icon="['fab','github']" class="icon-github"/></a>
          <p>Birthday：1993年05月19日
              <br>
            最寄駅: 渋谷駅
          </p>
          <p>趣味： 動物が好きです。家に爬虫類やインコなどいます。料理します。</p>
          <br>
          <p>４年間飲食業を勤めていました。→１年間接客業→３年間フレンチの調理師として勤務。<br>
            しかし、頑張り過ぎて体調を崩し退職。
            <br>
            その後、コミュニケーション能力を付けたいと思い、外資系企業のBtoC営業を２年間勤務。
            <br>
            大手NGO・NPO団体さんがクライアントでした。
          </p>
            <br>
          <p>
            営業時代にあるドラマをきっかけにITに興味を持ち、ITでお客様の問題解決したいと思い、SES企業に就職。
            <br>
            コロナ渦で案件がなくなり、この先どうしようかと思い、退職して5月からプログラミング勉強開始。
            <br>
            <span class="about-front">フロントエンド </span>を目指しいます。
            <br>
            いろんな会社でいい経験させていただきました。そのおかげでとてもポジティブな思考になりました。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about {
  width: 100%;
  height: 100%;
}
.about-inner {
  width: 88%;
  margin: 45px auto;
  padding-bottom: 30px;
}
.about-title {
  text-align: center;
  font-family: 'Fjalla One', sans-serif;
  font-size: 2.5rem;
  letter-spacing: 7px;
}
.about-title::after {
  content: '';
  display: block;
  border: 2px solid black;
  width: 35%;
  margin: 7px auto 100px;
}
.about-front{
  font-size: 1.3rem;
  font-weight: 600;
}
.about-box {
  width: 90%;
  display: flex;
  justify-content: center;
}
.about-profile {
  margin-right: 9%;
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.icon-github {
  color: black;
  padding: 10px;
  font-size: 3.1rem;
  background-color: white;
  border-radius: 50%;
  transition: all .2s;
}
.icon-github:hover{
  transform: scale(1.1);
  opacity: .7;
}

@media screen and (max-width: 480px){
  .about-inner{
    text-align: center;
  }
  .about-title::after{
    margin-bottom: 50px;
  }
  .about-profile{
    margin: auto;
  }
  .about-box{
    width: auto;
    display: block;
  }
}
</style>
