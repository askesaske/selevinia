<template>
  <div class="author-card">
    <div class="author-card__label">
      Авторы
    </div>
    <div class="author-card__row">
      <div class="author-card__light">ФИО</div>
      <div class="author-card__text">{{ name }}</div>
    </div>
    <div class="author-card__row">
      <div class="author-card__light">Описание</div>
      <div class="author-card__text">{{ description }}</div>
    </div>
    <div class="author-card__row">
      <div class="author-card__light">Перечень статей</div>
      <div class="author-card__text">
        {{ articles }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    articles: {
      type: String,
      default: ''
    }
  }
}
</script>