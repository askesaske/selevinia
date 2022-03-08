<template>
  <nuxt-link tag="div"
             :to="'/blog/' + id"
             class="blog-card"
             :class="{'blog-card--active' : withDescription}">
    <div class="blog-card__img-box">
      <img :src="img" alt="" class="blog-card__img">
    </div>

    <div class="blog-card__info">
      <div class="blog-card__row">
        <div class="blog-card__date">
          {{ date }}
        </div>

        <div class="blog-card__tag">
          {{ tag }}
        </div>
      </div>

      <div class="blog-card__title">
        {{ title }}
      </div>

      <div class="blog-card__desc" v-html="description"></div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: Number,
    img: String,
    date: String,
    tag: String,
    title: String,
    withDescription: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>