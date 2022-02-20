<template>
  <div class="breadcrumb">
    <nuxt-link tag="span" to="/" class="breadcrumb__item">Главная</nuxt-link>
    <nuxt-link tag="span" :to="i.link" class="breadcrumb__item"
          v-if="breadcrumb !== null"
          v-for="(i, k) in breadcrumb"
          :key="k">{{ i.name }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumb: {
      type: Array,
      default: null
    }
  }
}
</script>