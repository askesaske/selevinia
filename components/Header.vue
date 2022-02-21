<template>
  <header class="header" :class="{'header--active' : searchStatus}">
    <div class="header__container">
      <nuxt-link to="/" class="header__logo">
        <img src="../assets/img/icons/header-logo.svg" alt="">
      </nuxt-link>

      <ul class="header__links">
        <nuxt-link tag="li" to="/" class="header__link">Главная</nuxt-link>
        <nuxt-link tag="li" to="/archive" class="header__link">Архив номеров</nuxt-link>
        <nuxt-link tag="li" to="/blog" class="header__link">Блог редактора</nuxt-link>
        <nuxt-link tag="li" to="/authors" class="header__link">Авторы</nuxt-link>
        <nuxt-link tag="li" to="/rules" class="header__link">Правила для авторов</nuxt-link>
        <nuxt-link tag="li" to="/other" class="header__link">Другие публикации</nuxt-link>
      </ul>

      <div class="header__search">
        <input type="text" class="header__input" placeholder="Введите поисковую фразу">

        <button class="header__btn" @click="search">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#search"></use>
          </svg>
        </button>

        <svg width="20" height="20" class="header__cancel" @click="searchStatus = false">
          <use href="../assets/img/icons.svg#cancel"></use>
        </svg>
      </div>

      <div class="header__langs">
        <nuxt-link tag="div" to="/EN" class="header__lang">EN</nuxt-link>
        <nuxt-link tag="div" to="/KZ" class="header__lang">KZ</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchStatus: false
    }
  },
  methods: {
    search() {
      this.searchStatus = true
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
