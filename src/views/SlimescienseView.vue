<template>
  <div class="background">
      <p>СЛАЙМОНАУКА</p>
      <p class="stroke-blocker">СЛАЙМОНАУКА</p>
  </div>

  <div class="translition">
    <p>Экстракторы</p>
    <div class="extractor-card">
      <div class="extractor">
        <p>Бур</p>
        <img src="@/assets/images/bur.png" alt="">

        <ul>
          <li>Везде:
            <img src="@/assets/images/jellystone.png" alt="">
            <img src="@/assets/images/slimefossil.png" alt="">
            <img src="@/assets/images/strangeCrystall.png" alt="">
          </li>
          <li>Карьер <br> индиго:
            <img src="@/assets/images/indigonium.png" alt="">
          </li>
          <li>Стеклянная <br> пустыня:
            <img src="@/assets/images/glassShard.png" alt="">
          </li>
        </ul>
      </div>

      <div class="extractor">
        <p>Насос</p>
        <img src="@/assets/images/nasos.png" alt="">

        <ul>
          <li>Везде:
            <img src="@/assets/images/primordyOil.png" alt="">
            <img src="@/assets/images/spiralSteam.png" alt="">
            <img src="@/assets/images/lavaDust.png" alt="">
          </li>
          <li>Сухой риф:
            <img src="@/assets/images/deepBrine.png" alt="">
          </li>
          <li>Стеклянная <br> пустыня:
            <img src="@/assets/images/slickySand.png" alt="">
          </li>
        </ul>
      </div>

      <div class="extractor">
        <p>Пасека</p>
        <img src="@/assets/images/paseka.png" alt="">

        <ul>
          <li>Везде:
            <img src="@/assets/images/buzzWax.png" alt="">
            <img src="@/assets/images/hexaComb.png" alt="">
            <img src="@/assets/images/royalJelly.png" alt="">
          </li>
          <li>Мшистый <br> покров:
            <img src="@/assets/images/wildHoney.png" alt="">
          </li>
          <li>Стеклянная <br> пустыня:
            <img src="@/assets/images/pepperJam.png" alt="">
          </li>
        </ul>

      </div>
    </div>
  </div>

  <div class="technologies">
    <p>ТЕХНОЛОГИИ</p>
    <p class="stroke-blocker-tech">ТЕХНОЛОГИИ</p>
    <div class="techno-wrapper">
      <a href="https://slimerancher.fandom.com/ru/wiki/%D0%94%D1%80%D0%BE%D0%BD">
        <div class="techno-card">
        <img src="@/assets/images/techno-card-images/drone.png" alt="">
        <p style="font-size: 90px">ДРОН</p>
        </div>
      </a>
      <a href="https://slimerancher.fandom.com/ru/wiki/%D0%9C%D0%B5%D0%B4%D0%BF%D1%83%D0%BD%D0%BA%D1%82">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/medpubnct.png" alt="">
          <p style="font-size: 59px">МЕДПУНКТ</p>
        </div>
      </a>
      <a href="https://slimerancher.fandom.com/ru/wiki/%D0%92%D0%BE%D0%B4%D0%BE%D0%BF%D1%83%D1%88%D0%BA%D0%B0">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/watergun.png" alt="">
          <p style="font-size: 48px">ВОДОПУШКА</p>
        </div>
      </a>

      <a href="https://slimerancher.fandom.com/ru/wiki/%D0%9B%D0%BE%D0%B2%D1%83%D1%88%D0%BA%D0%B0_%D0%B3%D0%BE%D1%80%D0%B4%D0%BE_%D0%B4%D0%BB%D1%8F_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/gordotrap.png" alt="">
          <p style="font-size: 53px">ЛОВУШКА <br> ГОРДО</p>
        </div>
      </a>
      <a href="https://slimerancher.fandom.com/ru/wiki/%D0%9A%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BB-%D1%83%D0%BA%D1%80%D0%BE%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D1%8C">
        <div class="techno-card">
          <img src="@/assets/images/techno-card-images/colocol.png" alt="">
          <p style="font-size: 48px">КОЛКОЛ- <br> УКРОТИТЕЛЬ</p>
        </div>
      </a>
      <a href="https://slimerancher.fandom.com/ru/wiki/%D0%9C%D0%BD%D0%BE%D0%B6%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BA%D1%83%D1%80%D0%B8%D1%86">
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
    -webkit-text-stroke: 10px #8a8a8a;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
    margin-top: 375px;
  }

  .background .stroke-blocker{
    -webkit-text-stroke: unset;
    position: absolute;
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

  .extractor ul li img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
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
    -webkit-text-stroke: 10px #8a8a8a;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
    text-align: center;
    padding-top: 250px;
    margin-bottom: 100px;
    position: relative;
  }

  .technologies .stroke-blocker-tech{
    padding-top: 250px;
    margin-bottom: 0;
    -webkit-text-stroke: unset;
    position: absolute;
    filter: unset;
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
    margin-bottom: unset;
  }

  .techno-card img{
    width: 341px;
    height: 341px;
    padding: 10px;
    background: #9F9F9F;
    border-radius: 30px;
  }
</style>