<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link to="/" class="header__logo">
        <img src="../assets/img/icons/header-logo.svg" alt="">
      </nuxt-link>

      <ul class="header__links">
        <nuxt-link tag="li" to="/" class="header__link">Главная</nuxt-link>
        <li class="header__link">Архив номеров</li>
        <nuxt-link tag="lo" to="/blog" class="header__link">Блог редактора</nuxt-link>
        <li class="header__link">Авторы</li>
        <li class="header__link">Правила для авторов</li>
        <li class="header__link">Другие публикации</li>
      </ul>

      <div class="header__search">
        <svg width="24" height="24">
          <use href="../assets/img/icons.svg#search"></use>
        </svg>
      </div>

      <div class="header__langs">
        <div class="header__lang">EN</div>
        <div class="header__lang">KZ</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
