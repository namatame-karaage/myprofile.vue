<template>
  <div class="footer">
    <h4 class="footer-title">2020/October My Profile</h4>
  </div>

  <div id="instafeed"></div>

<script type="text/javascript">
    var feed = new Instafeed({
      accessToken: 'IGQVJWNHN4b0trd1FOZAVhVZA3dMZAFRqbVREaDZAqRnRwbjVSdVQ4SmJtUnhsUVJBeW1rME9MUjlqY0NkRE5OZA2JWT2xuSFlBelQ0ZAXUwRGRZAUjZADdzh6VmlxV1ltS3QtMlVEdXhHRDdR'
    });
    feed.run();
</script>
</template>

<style scoped>
  .footer{
    width: 100%;
    background-color: black;
  }
  .footer-title{
    text-align: center;
    padding: 10px 0;
    color: white;
    letter-spacing: 3px;
  }
</style>
