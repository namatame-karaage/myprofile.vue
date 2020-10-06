<template>
  <div id="contact">
    <div class="contact-inner">
      <h1 class="contact-title">Contact</h1>
      <p class="contact-subtitle">お問い合わせは、こちらからお願いします。</p>
      <h2 class="icon"><font-awesome-icon icon="arrow-down" class="web-icon mail"/></h2>
      <div class="contact-link">
        <a href="mailto:s79.namatame.fumiya@gmail.com"><font-awesome-icon icon="envelope" class="icon-mail"/></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contact {
  width: 100%;
  height: 100%;
  background-color: rgb(168, 164, 164);
  box-shadow: rgba(0, 0, 0, 0.4) 0px -10px 90px;
}
.contact-inner {
  width: 88%;
  margin: 45px auto 0;
  padding: 30px;
}
.contact-subtitle {
  text-align: center;
  margin-bottom: 10px;
  opacity: 0.6;
  color: black;
  font-weight: 600;
  letter-spacing: 5px;
}
.contact-title {
  color: black;
  text-align: center;
  font-family: "Fjalla One", sans-serif;
  font-size: 2.5rem;
  letter-spacing: 7px;
}
.contact-title::after {
  content: "";
  display: block;
  border: 2px solid black;
  width: 35%;
  margin: 7px auto 30px;
}
.contact-link{
  text-align: center;
}
.icon-mail,
.icon-github{
  margin: 10px 30px;
}
.icon-mail{
  color: red;
  padding: 10px;
  font-size: 3.1rem;
  background-color: white;
  border-radius: 50%;
  transition: all 1s;
}
.icon-mail:hover{
  color: white;
  background-color: red;
}

</style>
