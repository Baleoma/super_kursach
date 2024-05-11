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
          <li>Везде</li>
          <li>Карьер индиго</li>
          <li>Стеклянная пустыня</li>
        </ul>
      </div>

      <div class="extractor">
        <p>Насос</p>
        <img src="@/assets/images/nasos.png" alt="">

        <ul>
          <li>Везде</li>
          <li>Сухой риф</li>
          <li>Стеклянная пустыня</li>
        </ul>
      </div>

      <div class="extractor">
        <p>Пасека</p>
        <img src="@/assets/images/paseka.png" alt="">

        <ul>
          <li>Везде</li>
          <li>Мшистый покров</li>
          <li>Стеклянная пустыня</li>
        </ul>

      </div>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped>
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
  }

  .extractor p{
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: #747474;
    font-size: 96px;
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));
  }

  .extractor-card{
    display: flex;
    justify-content: space-around;
    width: 1920px;
  }
</style>