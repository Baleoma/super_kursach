<script>
export default {
  data() {
    return {
      slimes: [],
      load: false
    }
  },
  mounted() {
    fetch('https://f5443215652c2cc0.mokky.dev/slimesdata')
        .then(response => response.json())
        .then(res => {console.log(res); this.slimes = res; this.load = true})
        .catch(e => {console.log(e)})
    console.log(this.slimes)
  }
}
</script>

<template>
  <main>
    <div class="background">
      <p>СЛАЙМЫ</p>
    </div>

    <div class="translition">
      <p>Слайм - желеобразные существа разных видов, которые различаются по форме, цвету, размерам и характеру
        поведения. Так как они могут развиваться только на планете Далёкое-Далёкое Запределье, хозяева ранчо прилетают
        к ним с Земли, чтобы заботиться о них и получать в замен ценный плорт.</p>
    <div class="slimesList">

        <div v-if="load" class="slime-block" v-for="slime in slimes">
          <img :src="slime.slimePFP" alt="Картинка со слаймом">
          <p>{{slime.slimeName}}</p>
          <a href="#">Подробнее</a>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
  .background{
    background-image: url("@/assets/images/Background_slimes.png");
    display: flex;
    justify-content: center;
    height: 1086px;
  }

  .background p{
    font-size: 190px;
    font-family: Nunito, sans-serif;
    font-weight: 900;
    color: #CAECFF;
    -webkit-text-stroke: 5px #2E90AF;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
    margin-top: 375px;
  }

  .translition{
    background-image: url("@/assets/images/Translition-slimes.png");
    height: 3370px;
    margin-top: -450px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .translition p{
    font-family: Nunito, sans-serif;
    color: #4D4B64;
    font-weight: bold;
    font-size: 49px;
    text-align: center;
    width: 1480px;
  }

  .slime-block{
    background-color: #FBFBFB;
    width: 313px;
    height: 400px;
    border-radius: 30px;
    filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    align-items: center;

    flex-direction: column;
  }

  .slime-block p{
    font-size: 30px;
    width: 313px;
    margin-top: 26px;
  }

  .slime-block a{
    color: #4D4B64;
    text-decoration: none;
    font-family: Nunito, sans-serif;
    font-size: 30px;
    font-weight: bold;
    width: 245px;
    height: 60px;
    border-radius: 20px;
    background-color: #CAECFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
  }

  .slime-block img{
    background-color: #CAECFF;
    border-radius: 40px;
    padding: 5px 22px 0 22px;
    margin-top: 31px;
  }

  .slimesList{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 59px;
    grid-row-gap: 43px;
    width: 1430px;
  }
</style>