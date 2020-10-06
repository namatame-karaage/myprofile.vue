<template>
  <div class="header">
    <div class="header-inner">
      <h1 class="header-title">My Profile</h1>
      <NavHeader class="nav"></NavHeader>
    </div>
  </div>
</template>

<script>
import NavHeader from './NavHeader.vue'

export default {
  components: {
    NavHeader
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

.header {
  width: 100%;
  background-color: black;
  color: white;
  position: absolute;
  z-index: 10;
  font-family: 'Fjalla One', sans-serif;
}
.header-inner {
  display: flex;
  align-items: center;
  padding: 18px 46px;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  z-index: 10;
  background-color: black;

}
.header-title {
  font-size: 2.4rem;
  letter-spacing: 3px
}

@media screen and (max-width: 480px){
  .header-inner{
    display: block;
    position: static;
  }
  .header-title{
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 10px;
  }

}

@media screen and (max-width: 769px){
  .header-inner{
    display: block;
    height: auto;
  }
}

</style>
