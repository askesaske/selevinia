<template>
  <div class="sidebar" :class="{'sidebar--active' : sidebarState}">
    <svg width="16" height="18" class="sidebar__close" @click="closeSidebar">
      <use href="../assets/img/icons.svg#close-side"></use>
    </svg>

    <div class="sidebar__row">
      <svg class="sidebar__search" width="24" height="24" @click="openSearch">
        <use href="../assets/img/icons.svg#search"></use>
      </svg>

      <nuxt-link tag="div" to="/EN" class="sidebar__lang" @click.native="closeSidebar">EN</nuxt-link>
      <nuxt-link tag="div" to="/KZ" class="sidebar__lang" @click.native="closeSidebar">KZ</nuxt-link>
    </div>

    <ul class="sidebar__links">
      <nuxt-link
          class="sidebar__link"
          tag="li"
          to="/"
          @click.native="closeSidebar">Главная</nuxt-link>
      <nuxt-link
          class="sidebar__link"
          tag="li"
          to="/archive/page/1"
          @click.native="closeSidebar">Архив номеров</nuxt-link>
      <nuxt-link
          class="sidebar__link"
          tag="li"
          to="/blog/page/1"
          @click.native="closeSidebar">Блог редактора</nuxt-link>
      <nuxt-link
          class="sidebar__link"
          tag="li"
          to="/authors/page/1"
          @click.native="closeSidebar">Авторы</nuxt-link>
      <nuxt-link
          class="sidebar__link"
          tag="li"
          to="/rules"
          @click.native="closeSidebar">Правила для авторов</nuxt-link>
      <nuxt-link
          class="sidebar__link"
          tag="li"
          to="/other"
          @click.native="closeSidebar">Другие публикации</nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    sidebarState() {
      return this.$store.state.sidebarState
    }
  },
  methods: {
    closeSidebar() {
      this.$store.commit('setSidebarState', false)
    },
    openSearch() {
      this.$store.commit('setSearchState', true)
      this.closeSidebar()
    }
  }
}
</script>