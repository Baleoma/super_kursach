<template>
  <div class="background">
      <p>СЛАЙМОНАУКА</p>
  </div>

  <div class="translition">
    <p>Экстракторы</p>
    <div class="extractor-card">
      <div class="extractor">
        <p>Бур</p>
        <img src="@/assets/images/bur.png" alt="">

        <ul>
          <li>Везде:</li>
          <li>Карьер <br> индиго:</li>
          <li>Стеклянная <br> пустыня:</li>
        </ul>
      </div>

      <div class="extractor">
        <p>Насос</p>
        <img src="@/assets/images/nasos.png" alt="">

        <ul>
          <li>Везде:</li>
          <li>Сухой риф:</li>
          <li>Стеклянная <br> пустыня:</li>
        </ul>
      </div>

      <div class="extractor">
        <p>Пасека</p>
        <img src="@/assets/images/paseka.png" alt="">

        <ul>
          <li>Везде:</li>
          <li>Мшистый <br> покров:</li>
          <li>Стеклянная <br> пустыня:</li>
        </ul>

      </div>
    </div>
  </div>

  <div class="technologies">
    <p>ТЕХНОЛОГИИ</p>
    <div class="techno-wrapper">
      <a href="#">
        <div class="techno-card">
        <img src="@/assets/images/techno-card-images/drone.png" alt="">
        <p style="font-size: 90px">ДРОН</p>
        </div>
      </a>
      <a href="#">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/medpubnct.png" alt="">
          <p style="font-size: 59px">МЕДПУНКТ</p>
        </div>
      </a>
      <a href="#">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/watergun.png" alt="">
          <p style="font-size: 48px">ВОДОПУШКА</p>
        </div>
      </a>

      <a href="#">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/gordotrap.png" alt="">
          <p style="font-size: 53px">ЛОВУШКА <br> ГОРДО</p>
        </div>
      </a>
      <a href="#">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/colocol.png" alt="">
          <p style="font-size: 48px">КОЛКОЛ- <br> УКРОТИТЕЛЬ</p>
        </div>
      </a>
      <a href="#">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/chicken-multiplier.png" alt="">
          <p style="font-size: 48px">МНОЖИТЕЛЬ <br> КУРИЦ</p>
        </div>
      </a>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped>
  a{
    text-decoration: none;
  }

  .background{
    background-image: url("@/assets/images/Background_slimesciense.png");
    display: flex;
    justify-content: center;
    height: 943px;
  }

  .background p{
    font-size: 190px;
    font-family: Nunito, sans-serif;
    font-weight: 900;
    color: #e4e4e4;
    -webkit-text-stroke: 5px #8a8a8a;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
    margin-top: 375px;
  }

  .translition{
    background-image: url("@/assets/images/Translition_slimesciense.png");
    height: 1690px;
    margin-top: -100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 3;
    position: relative;
  }

  .translition p{
    color: #747474;
    font-family: "Nunito", sans-serif;
    font-size: 96px;
    font-weight: 900;
    margin-top: 250px;
  }

  .extractor-card{
    display: flex;
    justify-content: space-around;
    width: 1920px;
  }

  .extractor p{
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: #747474;
    font-size: 96px;
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));
    margin-top: 60px;
    text-align: center;
  }

  .extractor ul{
    list-style-type: none;
    font-family: "Nunito", sans-serif;
    font-size: 40px;
    font-weight: normal;
    color: #747474;
  }

  .extractor ul li{
    margin-bottom: 20px;
  }

  .technologies{
    background-image: url("@/assets/images/tecno-background.png");
    margin-top: -115px;
    margin-bottom: -150px;
    height: 2100px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .technologies p{
    font-size: 190px;
    font-family: Nunito, sans-serif;
    font-weight: 900;
    color: #e4e4e4;
    -webkit-text-stroke: 5px #8a8a8a;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
    text-align: center;
    padding-top: 250px;
  }

  .techno-wrapper{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 146px;
    grid-row-gap: 155px;
  }

  .techno-card{
    width: 436px;
    height: 562px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #D9D9D9;
    border-radius: 50px;
    border: #9F9F9F 10px solid;
  }

  .techno-card p{
    width: 351px;
    color: #686868;
    -webkit-text-stroke: unset;
    filter: none;
    padding-top: unset;
  }

  .techno-card img{
    width: 341px;
    height: 341px;
    padding: 10px;
    background: #9F9F9F;
    border-radius: 30px;
  }
</style>