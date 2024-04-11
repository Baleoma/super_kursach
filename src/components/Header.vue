<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">Панель навигации</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page" >Главная</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/directives" class="nav-link active" aria-current="page" >Знакомсво с диррективами</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link active" aria-current="page" >Товары</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link active" aria-current="page" >Логин</RouterLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>
<script setup>
</script>