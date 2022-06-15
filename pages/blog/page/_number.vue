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
<!--        <filter-box class="blog-page__filter"-->
<!--                    @sortByCategory="categorySort"-->
<!--                    @searchText="searchText">-->
<!--        </filter-box>-->

<!--        <sort-box class="blog-page__sort" @sort="getPosts"></sort-box>-->

        <div class="blog-page__cards" v-if="sortState === 'Сначала новые'">
          <blog-card v-for="post in pinnedPost"
                     v-if="clicked ? post.category_id === chosenCategoryId : true"
                     with-description
                     :key="post.id"
                     :id="post.id"
                     :img="post.preview_big_image_url"
                     :date="$dateFns.format(post.created_at, 'dd MMMM yyyy')"
                     :tag="post.category.name"
                     :title="post.name"
                     :description="post.content">
          </blog-card>

          <blog-card v-for="post in newPosts"
                     v-if="clicked ? post.category_id === chosenCategoryId : true"
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
          <blog-card v-for="post in pinnedPost"
                     v-if="clicked ? post.category_id === chosenCategoryId : true"
                     with-description
                     :key="post.id"
                     :id="post.id"
                     :img="post.preview_big_image_url"
                     :date="$dateFns.format(post.created_at, 'dd MMMM yyyy')"
                     :tag="post.category.name"
                     :title="post.name"
                     :description="post.content">
          </blog-card>
          <blog-card v-for="post in oldPosts"
                     v-if="clicked ? post.category_id === chosenCategoryId : true"
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
            :total="pageNums"
            :current="currentPage"
            @exactlyPage="pageChosen"
            @prevPage="prevPage"
            @nextPage="nextPage">
        </padding-box>

      </div>

    </div>
    <loader-block v-if="loading"></loader-block>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock";
import FilterBox from "@/components/FilterBox";
import SortBox from "@/components/SortBox";
import BlogCard from "@/components/BlogCard";
import PaddingBox from "@/components/PaddingBox";
import LoaderBlock from "@/components/LoaderBlock";

export default {
  components: {
    InfoBlock,
    FilterBox,
    SortBox,
    BlogCard,
    PaddingBox,

  },
  data() {
    return {
      breadcrumb: [{
        name: 'Блог редактора',
        link: ''
      }],
      sortState: 'Сначала новые',
      total: 0,
      newPosts: [],
      oldPosts: [],
      currentPage: parseInt(this.$route.params.number),
      chosenCategoryId: null,
      clicked: false,
      loading: false
    }
  },
  computed: {
    blogPage() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'authorsBlogText') || []
    },
    showChosen() {
      return this.chosenCategoryId === null;
    },
    pinnedPost() {
      return this.$store.getters.loadedPinnedPost
    },
    pageNums() {
      return this.paginate(this.currentPage, this.total, 1)
    }
  },
  methods: {
    paginate(current_page, last_page, onSides = 3) {
      // pages
      let pages = [];
      // Loop through
      for (let i = 1; i <= last_page; i++) {
        // Define offset
        let offset = (i === 1 || last_page) ? onSides + 1 : onSides;
        // If added
        if (i === 1 || (current_page - offset <= i && current_page + offset >= i) ||
            i === current_page || i === last_page) {
          pages.push(i);
        } else if (i === current_page - (offset + 1) || i === current_page + (offset + 1)) {
          pages.push('...');
        }
      }
      return pages;
    },
    searchText(val) {
      if (this.sortState === 'Сначала новые') {
        this.newPosts.forEach(item => {
          if (item.name.includes(val)) {
            item.show = true
          }
        })
      }
    },
    categorySort(id) {
      this.chosenCategoryId = id
      this.clicked = true
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
    },
    getPosts(sortState) {
      this.sortState = sortState
      if (sortState === 'Сначала новые') {
        this.$axios.get(process.env.API + 'posts?include=category&sort=-created_at&itemsPerPage=6&page=' + this.currentPage)
            .then(response => {
              this.loading = true
              this.newPosts = response.data.data.data
              this.total = response.data.data.last_page
              const index = this.newPosts.findIndex(item => item.id === 5)
              if (index > -1) {
                this.newPosts.splice(index, 1);
              }
            })
            .catch(e => console.log(e))
            .finally(() => {
              this.loading = false
            })
      } else {
        this.$axios.get(process.env.API + 'posts?include=category&itemsPerPage=6&page=' + this.currentPage)
            .then(response => {
              this.loading = true
              this.oldPosts = response.data.data.data
              this.total = response.data.data.last_page
              const index = this.oldPosts.findIndex(item => item.id === 5)
              if (index > -1) {
                this.oldPosts.splice(index, 1);
              }
            })
            .catch(e => console.log(e))
            .finally(() => {
              this.loading = false
            })
      }
    }
  },
  mounted() {
    this.getPosts('Сначала новые')
    this.$store.commit('setSearchState', false)
  },
}
</script>