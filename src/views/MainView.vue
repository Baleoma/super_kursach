<script>



</script>

<template>

  <main>
    <div class="background">

    </div>

    <div class="translition">
      <p>
        Slime Rancher — игра от первого лица разработкой которой занимается компания
        Monomi Park. Игра была официально анонсирована 13 ноября 2014 года и вышла в релиз
        1 августа 2017. Разработчики характеризуют её как "безумную, хаотичную и очень милую видеоигру".
      </p>
      <div class="divider"></div>
      <p>
        Это история Беатрикс Лебо, отважной молодой хозяйки ранчо, которая начинает жить на Далёком-Далёком
        Запределье, где она пробует свои силы в разведении собранных слаймов. С полной готовностью, достаточной
        выдержкой и со своим верным вакпаком Беатрикс пытается обозначить свою территорию, нажить состояние и избежать
        постоянной опасности, что грозит ей от перекатывающейся, трясущейся лавины слаймов за каждым углом.
      </p>
    </div>
  </main>

</template>

<style scoped>

  .background{
    background-image: url("@/assets/images/Background.png");
    background-repeat: no-repeat;
    height: 1086px;
  }

  .translition{
    background-image: url("@/assets/images/Translition.png");
    background-repeat: no-repeat;
    width: 1920px;
    height: 1456px;
    position: absolute;
    top: 671px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .translition p{
    width: 1480px;
    font-family: Nunito, sans-serif;
    font-weight: 600;
    font-size: 46px;
    color: #974E4E;
    align-items: center;
    text-align: center;
  }

  .divider{
    width: 1390px;
    border-bottom: rgba(151, 78, 78, 0.5) solid 5px;
    margin: 65px 0 65px 0;
  }

</style>