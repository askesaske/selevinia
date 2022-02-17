<template>
  <div class="blog-card">
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

      <div class="blog-card__desc">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    date: String,
    tag: String,
    description: String
  }
}
</script>