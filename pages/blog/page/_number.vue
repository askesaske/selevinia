<template>
  <div class="blog-page">
    <info-block class="blog-page__info-block"
                :image-url="require('assets/img/blog-img.svg')"
                :heading="'Блог редактора'"
                :subtitle="blogPage[0].value"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="blog-page__main">

      <div class="blog-page__container">
        <filter-box class="blog-page__filter"></filter-box>

        <sort-box class="blog-page__sort" @sort="sort"></sort-box>

        <div class="blog-page__cards" v-if="sortState === 'Сначала новые'">
          <blog-card v-for="post in newPosts"
                     with-description
                     :key="post.id"
                     :id="post.id"
                     :img="post.preview_big_image_url"
                     :date="$dateFns.format(post.created_at, 'dd MMMM yyyy')"
                     :tag="post.category.name"
                     :title="post.name"
                     :description="post.content">
          </blog-card>
        </div>

        <div class="blog-page__cards" v-else>
          <blog-card v-for="post in oldPosts"
                     with-description
                     :key="post.id"
                     :id="post.id"
                     :img="post.preview_big_image_url"
                     :date="$dateFns.format(post.created_at, 'dd MMMM yyyy')"
                     :tag="post.category.name"
                     :title="post.name"
                     :description="post.content">
          </blog-card>
        </div>

        <padding-box
            class="blog-page__padding"
            :total="total"
            :current="currentPage"
            @exactlyPage="pageChosen"
            @prevPage="prevPage"
            @nextPage="nextPage">
        </padding-box>

      </div>

    </div>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock";
import FilterBox from "@/components/FilterBox";
import SortBox from "@/components/SortBox";
import BlogCard from "@/components/BlogCard";
import PaddingBox from "@/components/PaddingBox";

export default {
  components: {
    InfoBlock,
    FilterBox,
    SortBox,
    BlogCard,
    PaddingBox
  },
  data() {
    return {
      breadcrumb: [{
        name: 'Блог редактора',
        link: ''
      }],
      sortState: 'Сначала новые',
      total: 1,
      newPosts: [],
      oldPosts: [],
      currentPage: parseInt(this.$route.params.number)
    }
  },
  computed: {
    blogPage() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'authorsBlogText') || []
    }
  },
  methods: {
    sort(val) {
      if (this.sortState !== val) {
        this.sortState = val
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$router.push('/blog/page/' + this.currentPage)
      }
    },
    nextPage() {
      if (this.currentPage < this.total) {
        this.currentPage++;
        this.$router.push('/blog/page/' + this.currentPage)
      }
    },
    pageChosen(page) {
      this.$router.push('/blog/page/' + page)
    }
  },
  mounted() {
    this.$axios.get(process.env.API + 'posts?include=category&sort=-created_at&itemsPerPage=6&page=' + this.currentPage)
        .then(response => {
          this.newPosts = response.data.data.data
          this.total = response.data.data.links.length - 2
          console.log(response.data)
        })
        .catch(e => console.log(e))

    this.$axios.get(process.env.API + 'posts?include=category&itemsPerPage=6&page=' + this.currentPage)
        .then(response => {
          this.oldPosts = response.data.data.data
          this.total = response.data.data.links.length - 2
        })
        .catch(e => console.log(e))
  },
}
</script>