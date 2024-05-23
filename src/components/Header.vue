<template>
  <header>
    <div class="hider">
      <img src="@/assets/images/Logo_hider.png" alt="slime" style="width: 101px; height: 101px" @click="hide">
    </div>
    <nav :class="{ nav: isShow, nav_closed: !isShow }">
      <ul>
        <li><RouterLink to="/main/">Об игре</RouterLink></li>
        <li><RouterLink to="/slimes/">Слаймы</RouterLink></li>
        <li><RouterLink to="/world/">Мир</RouterLink></li>
        <li><RouterLink to="/slimesciense/">Слаймонаука</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      lastScrollPosition: 0,
    };
  },

  methods: {
    hide() {
      this.isShow = !this.isShow;
    },

    handleScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition > this.lastScrollPosition) {
        this.isShow = false; // Скрываем меню при прокрутке вниз
      } else if (currentScrollPosition === 0) {
        this.isShow = true; // Показываем меню при прокрутке вверх или когда пользователь находится в верхней части страницы
      }
      this.lastScrollPosition = currentScrollPosition;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
header{
  position: sticky;
  top: 59px;
}

.hider{
  width: 226px;
  height: 181px;
  background-color: #FBFBFB;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.3));
  border-radius: 0px 90px 90px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  z-index: 3;
}

nav{
  background-color: #FBFBFB;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.3));
  border-radius: 0px 80px 80px 0px;
  width: 1700px;
  height: 127px;
  position: absolute;
  left: 0;
  top: 27px;
  z-index: 2;
  transition: all 2s ease;
  display: flex;
  justify-content: flex-end;
}

.nav_closed {
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.3));
  width: 1700px;
  height: 127px;
  position: absolute;
  left: -1700px;
  top: 27px;
  z-index: 2;
}

nav ul{
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 127px;
  width: 1475px;
  justify-content: space-around;
}


nav ul li a{
  text-decoration: none;
  color: #F27F7F;
  font-family: "Nyasha_sans", sans-serif;
  font-size: 35px;
  padding: 20px 30px 20px 30px;
  border-radius: 50px;
}

nav ul li a:hover{
  background-color: #F27F7F;
  color: #FBFBFB;
}
</style>

