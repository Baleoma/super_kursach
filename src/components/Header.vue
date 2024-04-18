<template>

  <header>
    <div class="hider">
      <img src="@/assets/images/Logo_hider.png" alt="slime" style="width: 101px; height: 101px">
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/main/">Об игре</RouterLink></li>
        <li><RouterLink to="/slimes/">Слаймы</RouterLink></li>
        <li><RouterLink to="/world/">Мир</RouterLink></li>
        <li><RouterLink to="/slimesciense/">Слаймонаука</RouterLink></li>
        <li><RouterLink to="/buildings/">Постройки</RouterLink></li>
      </ul>
    </nav>
  </header>

</template>

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
  border-radius: 90px 0 0 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  z-index: 3;
}

nav{
  background-color: #FBFBFB;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.3));
  border-radius: 80px 0 0 80px;
  width: 1700px;
  height: 127px;
  position: absolute;
  right: 0;
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

<script setup>

</script>