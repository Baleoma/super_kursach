<template>
  <div class="background">
    <p>МИР</p>
  </div>

  <div class="translition">
    <div class="world-slider-wrapper">
      <div class="slider">
        <div class="arrow-right">
          <button><img src="@/assets/images/arrow-left.png" alt=""></button>
        </div>
        <div class="slider-img">
          <img src="@/assets/images/rancho.png" alt="">
        </div>
        <div class="arrow-left">
          <button><img src="@/assets/images/arrow-left.png" alt=""></button>
        </div>
      </div>
      <div class="slider-text">
        <div class="head"><p>Ранчо</p></div>
        <div class="text-divider"></div>
        <div class="bott"><p>Локация, где изначально размещает всё своё хозяйство Beatrix LeBeau: участки под загоны
          для слаймов, огороды и другое оборудование; здесь же находится дом, в котором можно вздремнуть, звёздная
          почта, автомат по продаже улучшений для вакпака, обмен угодий и плорт-маркет.</p></div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .background{
    background-image: url("@/assets/images/world-background.png");
    height: 1051px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background p{
    font-size: 190px;
    font-family: Nunito, sans-serif;
    font-weight: 900;
    color: #ffdfdf;
    -webkit-text-stroke: 5px #f27f7f;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
  }

  .translition{
    background-image: url("@/assets/images/Translition-world.png");
    height: 1800px;
    margin-top: -300px;
    margin-bottom: -200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .world-slider-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #FBFBFB;
    border-radius: 50px;
    padding: 50px;
  }

  .slider{
    display: flex;
  }

  .arrow-right{
    height: 562px;
    width: 100px;
    background: #FFCACA;
    border-radius: 30px 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow-left{
    height: 562px;
    width: 100px;
    background: #FFCACA;
    border-radius: 0 30px 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-img img{
    width: 1000px;
    height: 562px;
  }

  .slider-text{
    width: 1000px;
    text-align: center;
    color: #492C2C;
    font-family: "Nunito", sans-serif;
  }

  .text-divider{
    height: 10px;
    width: 1000px;
    background: #492C2C;
    border-radius: 10px;
  }

  .head{
    font-size: 96px;
    font-weight: 800;
    margin-top: 10px;
  }

  .bott{
    font-size: 28px;
    font-weight: 800;
    margin: 20px 0 40px 0;
  }

  .arrow-left img{
    transform: scaleX(-1)
  }

  button{
    background: none;
    border: none;
  }

</style>