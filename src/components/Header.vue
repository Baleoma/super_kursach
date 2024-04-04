<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">Главная</RouterLink></li>
        <li><RouterLink to="/notmain">Не сильно главная</RouterLink></li>
        <li><RouterLink to="/reallynotmain">Прям вообще не главная</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  ul {
    list-style-type: none;
    display: flex;
  }
</style>

<script>

</script>