<template>
  <header class="header" :class="{'header--active' : loadedSearchState}">
    <div class="header__container">
      <nuxt-link to="/" class="header__logo">
        <img src="../assets/img/icons/header-logo.svg" alt="">
      </nuxt-link>

      <nuxt-link to="/" class="header__logo header__logo--sm">
        <img src="../assets/img/icons/header-logo-2.png" alt="">
      </nuxt-link>

      <ul class="header__links">
        <nuxt-link tag="li" to="/" class="header__link">Главная</nuxt-link>
        <nuxt-link tag="li" to="/archive/page/1" class="header__link">Архив номеров</nuxt-link>
        <nuxt-link tag="li" to="/blog/page/1" class="header__link">Блог редактора</nuxt-link>
        <nuxt-link tag="li" to="/authors/page/1" class="header__link">Авторы</nuxt-link>
        <nuxt-link tag="li" to="/rules" class="header__link">Правила для авторов</nuxt-link>
        <nuxt-link tag="li" to="/other/page/1" class="header__link">Другие публикации</nuxt-link>
      </ul>

      <div class="header__search">
        <input type="text" class="header__input" placeholder="Введите поисковую фразу" v-model="searchText">

        <button class="header__btn" @click="search">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#search"></use>
          </svg>
        </button>

        <svg width="20" height="20" class="header__cancel" @click="closeSearch">
          <use href="../assets/img/icons.svg#cancel"></use>
        </svg>
      </div>

      <div class="header__langs">
        <nuxt-link tag="div" to="/EN" class="header__lang">EN</nuxt-link>
        <nuxt-link tag="div" to="/KZ" class="header__lang">KZ</nuxt-link>
      </div>

      <svg class="header__burger" width="30" height="30" @click="openSidebar">
        <use href="../assets/img/icons.svg#burger"></use>
      </svg>
    </div>

  </header>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      searchStatus: false,
      searchText: ''
    }
  },
  computed: {
    loadedSearchState() {
      return this.$store.state.searchState
    }
  },
  methods: {
    search() {
      this.$router.push('/search/' + this.searchText)
    },
    closeSearch() {
      this.$store.commit('setSearchState', false)
    },
    openSidebar() {
      this.$store.commit('setSidebarState', true)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
