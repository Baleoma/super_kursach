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

    <div class="buy">
      <p>Где можно купить?</p>

      <div class="wrapper_bb">
        <div class="buy_block">
          <div class="header_bb">
            <img alt="Steam" src="@/assets/images/Steam-Gift-card.png">
          </div>
          <p>STEAM</p>
          <a href="#">Купить сейчас</a>
        </div>

        <div class="buy_block">
          <div class="header_bb">
            <img alt="SWICH" src="@/assets/images/Nintendo-Swich-Edition.png">
          </div>
          <p>SWICH</p>
          <a href="#">Купить сейчас</a>
        </div>

        <div class="buy_block">
          <div class="header_bb">
            <img alt="PS & XBOX" src="@/assets/images/Console-Version.png">
          </div>
          <p>PS & XBOX</p>
          <a href="#">Купить сейчас</a>
        </div>
      </div>
    </div>

  </main>

</template>

<style scoped>

  .background{
    background-image: url("@/assets/images/Background.png");
    background-repeat: no-repeat;
    height: 900px;
  }

  .translition{
    background-image: url("@/assets/images/Translition.png");
    background-repeat: no-repeat;
    width: 1920px;
    height: 1456px;
    //position: absolute;
    //top: 671px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 60px;
    margin-top: -170px;
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

  .buy{
    font-family: Nunito, sans-serif;
    color: #F27F7F;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .buy p{
    font-size: 96px;
    font-weight: 800;
  }

  .buy_block{
    height: 600px;
    width: 455px;
    background: #FBFBFB;
    border-radius: 30px;
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.3));
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .buy_block p{
    font-weight: bold;
    font-size: 55px;

  }

  .buy_block a{
    color: #FFDFDF;
    background-color: #FAB7B7;
    text-decoration: none;
    font-size: 42px;
    padding: 18px 30px 18px 30px;
    border-radius: 20px;
    font-weight: bold;
    margin-bottom: 45px;
  }

  .buy_block a:hover{
    color: #F27F7F;
    background-color: #FAB7B7;
    text-decoration: none;
    font-size: 42px;
    padding: 18px 30px 18px 30px;
    border-radius: 20px;
    font-weight: bold;
    margin-bottom: 45px;
  }

  .header_bb{
    background-color: #FAB7B7;
    background-image: url("@/assets/images/Slimes-background.png");
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 30px;
    width: 455px;
    height: 353px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper_bb{
    display: flex;
    justify-content: space-around;
    width: 1800px;
    margin: 100px 0 150px 0;
  }

</style>