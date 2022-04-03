<template>
  <div class="search-page">
    <div class="search-page__container">
      <bread-crumb
          class="search-page__breadcrumb"
          :breadcrumb="breadcrumb">
      </bread-crumb>

      <div class="search-page__heading">
        Результаты поиска
        <span>{{ total }}</span>
      </div>

      <div class="search-page__results">
        <journal-card class="search-page__journal"
                      v-if="searchItems.archives.length > 0"
                      v-for="item in searchItems.archives"
                      :key="Math.random() + item.id"
                      :id="item.id"
                      :year="item.year"
                      :tom="item.tome"
                      :description="item.description"
                      :img="item.preview_big_image_url">
        </journal-card>

        <blog-card class="search-page__blog-card"
                   v-if="searchItems.posts.length > 0"
                   v-for="item in searchItems.posts"
                   :key="Math.random() + item.id"
                   :id="item.id"
                   with-description
                   :img="item.preview_big_image_url"
                   :date="$dateFns.format(item.created_at, 'dd MMMM yyyy')"
                   :tag="item.category.name"
                   :title="item.name"
                   :description="item.content">
        </blog-card>

        <author-card class="search-page__author-card"
                     v-if="searchItems.authors.length > 0"
                     v-for="item in searchItems.authors"
                     :key="item.id"
                     :name="item.full_name"
                     :description="item.about"
                     :articles="item.articles">
        </author-card>

        <journal-card class="search-page__journal"
                      v-if="searchItems.publications.length > 0"
                      v-for="item in searchItems.publications"
                      :name="item.title"
                      :description="item.description"
                      :img="item.image_url"
                      :id="item.id"
                      :link="item.document_url"
                      :key="Math.random() + item.id">
        </journal-card>
      </div>
    </div>
    <loader-block v-if="loading"></loader-block>
  </div>
</template>

<script>
import breadCrumb from "@/components/BreadCrumb";
import JournalCard from "@/components/JournalCard";
import BlogCard from "@/components/BlogCard";
import AuthorCard from "@/components/AuthorCard";
import LoaderBlock from "@/components/LoaderBlock";

export default {
  components: {
    breadCrumb,
    JournalCard,
    BlogCard,
    AuthorCard,
    LoaderBlock
  },
  data() {
    return {
      breadcrumb: [
        {
          name: 'Результаты поиска',
          link: ''
        }
      ],
      searchItems: {},
      total: 0,
      loading: false
    }
  },
  mounted() {
    this.$axios.get(process.env.API + 'global-search?search=' + this.$route.params.search)
        .then(response => {
          this.loading = true
          this.searchItems = response.data.data
          this.total = response.data.data.archives.length + response.data.data.authors.length +
              response.data.data.posts.length + response.data.data.publications.length
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false
        })
  }
}
</script>