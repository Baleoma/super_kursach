<template>
  <footer>
    <div class="stuff">
      <ul class="mainul">
        <li>
          <img src="@/assets/images/monomipark_logo.png" alt="monomi_park">
        </li>
        <div class="line"></div>
        <li>
          <ul class="borderul">
            <li><a href="#">Поддержка</a></li>
            <li><a href="#">ЧАвО</a></li>
            <li><a href="#">Связаться с нами</a></li>
          </ul>
        </li>
        <div class="line"></div>
        <li>
          <ul>
            <li><a href="#">Фанатская политика</a></li>
            <li><a href="#">Политика конфиденци-<br>альности</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
  footer{
    background-image: url("@/assets/images/Footer.png");
    width: 1920px;
    height: 615px;
    font: 34px "Montserrat", sans-serif;
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;
  }

  .mainul{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding-bottom: 63px;
  }

  .stuff ul{
    list-style-type: none;
    width: 266px;
  }

  .stuff ul li a{
    text-decoration: none;
    color: #FFFFFF;

  }

  .line{
    height: 328px;
    border-right: black solid 2px;
    margin-right: 95px;
    margin-left: 95px;
    opacity: 0.3;
  }

  .mainul ul{
    height: 235px;
  }

  .mainul ul li{
    margin-bottom: 40px;
  }

</style>


<script>


</script>