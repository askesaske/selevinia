<template>
  <div class="article-page">
    <div class="article-page__container">

      <bread-crumb class="article-page__breadcrumb" :breadcrumb="breadcrumb"></bread-crumb>

      <h4 class="article-page__heading">
        {{ blog.name }}
      </h4>

      <div class="article-page__row">

        <div class="article-page__share">
          <div class="article-page__text">
            Поделиться:
          </div>

          <share-social :title="blog.name"></share-social>
        </div>

        <div class="article-page__main">
          <div class="article-page__details">
            <div class="article-page__date">
              {{ date }}
            </div>
            <div class="article-page__tag" v-if="blog">
              {{ blog.name }}
            </div>
          </div>

          <div class="article-page__img-box">
            <img :src="blog.preview_big_image_url" alt="" class="article-page__img">
          </div>

          <div class="article-page__description" v-html="blog.content"></div>
        </div>

        <div class="article-page__share article-page__share--sm">
          <div class="article-page__text">
            Поделиться:
          </div>

          <share-social :title="blog.name"></share-social>
        </div>

        <div class="article-page__popular">
          <div class="article-page__title">
            Популярные статьи
          </div>

          <div class="article-page__items">
            <div class="article-page__item" v-for="item in related">
              <div class="article-page__item-row">
                <div class="article-page__date">
                  {{ $dateFns.format(item.created_at, 'dd MMMM yyyy') }}
                </div>
                <div class="article-page__item-tag">
                  {{ item.category.name }}
                </div>
              </div>
              <div class="article-page__item-title">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <loader-block v-if="loading"></loader-block>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb";
import ShareSocial from "@/components/ShareSocial";
import LoaderBlock from "@/components/LoaderBlock";

export default {
  data() {
    return {
      breadcrumb: [
        {
          name: 'Блог редактора',
          link: '/blog/page/1'
        },
        {
          name: 'Статья',
          link: ''
        }],
      blog: {},
      date: null,
      related: [],
      loading: false
    }
  },
  components: {
    BreadCrumb,
    ShareSocial
  },
  mounted() {
    this.$store.commit('setSearchState', false)

    this.$axios.get(process.env.API + 'posts/' + this.$route.params.article + '?include=category')
        .then(response => {
          this.loading = true
          this.blog = response.data.data
          this.date = this.$dateFns.format(response.data.data.created_at, 'dd MMMM yyyy')

          this.$axios.get(process.env.API + 'posts/related/' + response.data.data.category_id)
              .then(response => {
                this.related = response.data.data.splice(0, 1)
              })
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false
        })
  }
}
</script>