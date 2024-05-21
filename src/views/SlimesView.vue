<script>
export default {
  data() {
    return {
      slimes: [],
      load: false,
      slid: 0,
    }
  },
  methods: {
    setId(id) {
      this.slid = id
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
      <p class="stroke-blocker">СЛАЙМЫ</p>
    </div>

    <div class="translition">
      <p>Слайм - желеобразные существа разных видов, которые различаются по форме, цвету, размерам и характеру
        поведения. Так как они могут развиваться только на планете Далёкое-Далёкое Запределье, хозяева ранчо прилетают
        к ним с Земли, чтобы заботиться о них и получать в замен ценный плорт.</p>

      <div class="slimesList">
        <div v-if="load" class="slime-block" v-for="slime in slimes">
          <img :src="slime.slimePFP" alt="Картинка со слаймом">
          <p>{{slime.slimeName}}</p>
          <a href="#your-element" @click="setId(slime.id)">Подробнее</a>
        </div>
      </div>

    </div>

    <div class="slimes-desk" id="your-element">
      <div class="slimes-desk-wrapper" v-if="load">
          <div class="image"><img :src="slimes.find(it => it.id === slid)?.slimePFP || ''" alt="slime-img"></div>
          <div class="p1"><p class="p1">{{ slimes.find(it => it.id === slid)?.slimeName || '' }}</p></div>
          <div class="p2"><p class="p2">{{ slimes.find(it => it.id === slid)?.slimeDesk || '' }}</p></div>
          <div class="diet"> <p>Диета</p> <img :src="slimes.find(it => it.id === slid)?.slimeDiet || ''" alt="slime-img"></div>
          <div class="favorite"> <p>Любимое</p> <img :src="slimes.find(it => it.id === slid)?.favoriteFood || ''" alt="slime-img"></div>
          <div class="toy"> <p>Игрушка</p> <img :src="slimes.find(it => it.id === slid)?.slimeToy || ''" alt="slime-img"></div>
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
    -webkit-text-stroke: 10px #2E90AF;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
    margin-top: 375px;
  }

  .background .stroke-blocker{
    -webkit-text-stroke: unset;
    position: absolute;
  }

  .translition{
    background-image: url("@/assets/images/Translition-slimes.png");
    height: 3370px;
    margin-top: -450px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .translition p{
    font-family: Nunito, sans-serif;
    color: #4D4B64;
    font-weight: bold;
    font-size: 49px;
    text-align: center;
    width: 1480px;
    margin: 300px 0 100px 0;
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
    margin-bottom: unset;
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
    height: 205px;
  }

  .slimesList{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 59px;
    grid-row-gap: 43px;
    width: 1430px;
  }

  .slimes-desk{
    height: 1035px;
    background-image: url("@/assets/images/slimes-details-bg.png");
    margin: -120px 0 -120px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slimes-desk-wrapper{
    padding: 35px 0 35px 0;
    justify-items: center;
    align-items: center;
    text-align: center;
    background: #FBFBFB;
    border-radius: 30px;
    width: 1600px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.6fr 1.1fr 1.3fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
    "image p1 p1"
    "image p2 p2"
    "diet favorite toy";
  }

    .image {
      grid-area: image;
      background: #CAECFF;
      width: 300px;
      height: 300px;
      align-items: center;
      justify-content: center;
      display: flex;
      border-radius: 30px;
    }

    .image img{
      width: 260px;
      height: 260px;
    }

    .p1 {
      grid-area: p1;
      color: #4D4B64;
      font-size: 85px;
      font-weight: 900;
      font-family: "Nunito", sans-serif;
      display: flex;
      align-items: end;
    }

    .p2 {
      grid-area: p2;
      width: 900px;
      font-family: "Nunito", sans-serif;
      color: #4D4B64;
      font-size: 32px;
    }

    .diet {
      color: #4D4B64;
      font-size: 45px;
      font-weight: 900;
      font-family: "Nunito", sans-serif;
      grid-area: diet;
    }

    .diet img{
      height: 200px;
      width: 200px;
    }

    .favorite {
      color: #4D4B64;
      font-size: 45px;
      font-weight: 900;
      font-family: "Nunito", sans-serif;
      grid-area: favorite;
    }

    .favorite img{
      height: 200px;
      width: 200px;
    }

    .toy {
      color: #4D4B64;
      font-size: 45px;
      font-weight: 900;
      font-family: "Nunito", sans-serif;
      grid-area: toy;
    }

    .toy img{
      height: 200px;
      width: 200px;
    }

</style>