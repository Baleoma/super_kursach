<template>
  <div class="background">
    <p>МИР</p>
    <p class="stroke-blocker">МИР</p>
  </div>

  <div class="translition">
    <div class="world-slider-wrapper">
      <div class="slider">

        <div class="slider-img">
          <swiper
              :navigation="true"
              :modules="modules"
              class="mySwiper"
              @slideNextTransitionStart="current++"
              @slidePrevTransitionStart="current--"
          >
            <swiper-slide><img src="@/assets/images/rancho.png" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/images/dry-reef.png" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/images/indigo-quarry.png" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/images/moss-blanket-lands.png" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/images/ancient-ruins.png" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/images/glass-desert.png" alt=""></swiper-slide>
          </swiper>
        </div>

      </div>
      <div class="slider-text">
        <div class="head" ><p>{{ plase[current].head }}</p></div>
        <div class="text-divider"></div>
        <div class="bott"><p>{{ plase[current].bott }}</p></div>
      </div>
    </div>
  </div>
</template>

<script>

import {Swiper, SwiperSlide} from "swiper/vue";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {Swiper, SwiperSlide},
  data() {
    return {
      current: 0,
      plase:[
        {
          "head": "Ранчо",
          "bott": "Локация, где изначально размещает всё своё хозяйство Beatrix LeBeau: участки под загоны для слаймов, " +
              "огороды и другое оборудование; здесь же находится дом, в котором можно вздремнуть, звёздная почта, " +
              "автомат по продаже улучшений для вакпака, обмен угодий и плорт-маркет."
        },
        {
          "head": "Сухой риф",
          "bott": "Начальная локация для игрока. На Сухом рифе обитает несколько видов слаймов. Всё это весьма " +
              "распространённые виды, но будут большим подспорьем для начинающего хозяина ранчо."
        },
        {
          "head": "Карьер индиго",
          "bott": "Локация на Далёком-Далёком Запределье, которая знаменита своими пещерами и массивными каменными" +
              " формациями. Проход на территорию находится через пещеру в Сухом рифе, которая ведёт к вратам," +
              " отпираемым слаймовым ключом. "
        },
        {
          "head": "Мшистый покров",
          "bott": "Похожий на джунгли большой остров, изобилующий своеобразной фауной и флорой, многих представителей " +
              "которых можно увидеть только на этом пышущем жизнью острове. Доступ к острову преграждают врата, " +
              "отпираемые слаймовым ключом."
        },
        {
          "head": "Древние руины",
          "bott": 'Солнечная и открытая "двухэтажная" локация Далёкого-Далёкого Запределья, разделяющаяся на множество ' +
                "подобных лабиринту ходов, открывающихся переключателями. Таинственные руины соединяют Карьер Индиго и" +
                " Мшистый Покров и открывают путь к Стеклянной пустыне."
        },
        {
          "head": "Стеклянная пустыня",
          "bott": "песчаная локация Далёкого-Далёкого Запределья, в которую можно попасть с помощью специального " +
              "телепорта из Древних руин. Она представляет собой бесплодную пустошь, утыканную гигантскими и кривыми " +
              "стеклянными конструкциями, которые создают ультражаркие аномалии вокруг себя, что приводит к огненным " +
              "бурям."
        },
      ]
    }
  },
  computed: {
    modules() {
      return [Navigation]
    }
  },
  watch: {
    current(val) {
      console.log(val)
    }
  }
}
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
    -webkit-text-stroke: 10px #f27f7f;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
    margin-top: -50px;
  }

  .background .stroke-blocker{
    -webkit-text-stroke: unset;
    position: absolute;
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

  .slider-img img{
    width: 1000px;
    height: 562px;
  }

  .mySwiper{
    width: 1000px;
    height: 562px;
    border-radius: 50px;
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

  .swiper-button-next img{
    transform: scaleX(-1)
  }

  button{
    background: none;
    border: none;
  }

  ::v-deep .swiper-button-next {
    color: #FFCACA !important;
  }

  ::v-deep .swiper-button-prev {
    color: #FFCACA !important;
  }
</style>