<template>
  <div class="archive-page">
    <info-block class="archive-page__info-block"
                :image-url="require('assets/img/archive-img.svg')"
                :heading="'Архив'"
                :subtitle="archivePage[0].value"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="archive-page__main">

      <div class="archive-page__container">
        <!--        <filter-box class="archive-page__filter"></filter-box>-->

        <sort-box class="archive-page__sort" @sort="sort"></sort-box>

        <div class="archive-page__cards" v-if="sortState === 'Сначала новые'">
          <journal-card class="archive-page__journal"
                        :year="post.year"
                        :tom="post.tome"
                        :description="post.description"
                        :img="post.preview_big_image_url"
                        :id="post.id"
                        :link="post.document_url"
                        v-for="post in newPosts"
                        :key="post.id">
          </journal-card>
        </div>

        <div class="archive-page__cards" v-else>
          <journal-card class="archive-page__journal"
                        :year="post.year"
                        :tom="post.tome"
                        :description="post.description"
                        :img="post.preview_big_image_url"
                        :id="post.id"
                        :link="post.document_url"
                        v-for="post in oldPosts"
                        :key="post.id">
          </journal-card>
        </div>

        <padding-box class="archive-page__padding"
                     :total="total"
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
import PaddingBox from "@/components/PaddingBox";
import JournalCard from "@/components/JournalCard";
import LoaderBlock from "@/components/LoaderBlock";

export default {
  components: {
    InfoBlock,
    FilterBox,
    SortBox,
    PaddingBox,
    JournalCard,
    LoaderBlock
  },
  data() {
    return {
      breadcrumb: [{
        name: 'Архив',
        link: ''
      }],
      sortState: 'Сначала новые',
      total: 1,
      newPosts: [],
      oldPosts: [],
      currentPage: parseInt(this.$route.params.number),
      loading: true
    }
  },
  computed: {
    archivePage() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'archiveText') || []
    }
  },
  methods: {
    sort(val) {
      if (val !== this.sortState) {
        this.sortState = val
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$router.push('/archive/page/' + this.currentPage)
      }
    },
    nextPage() {
      if (this.currentPage < this.total) {
        this.currentPage++;
        this.$router.push('/archive/page/' + this.currentPage)
      }
    },
    pageChosen(page) {
      this.$router.push('/archive/page/' + page)
    }
  },
  mounted() {
    this.$store.commit('setSearchState', false)

    this.$axios.get(process.env.API + 'archives?sort=-year&itemsPerPage=3&page=' + this.currentPage)
        .then(response => {
          this.loading = true
          this.newPosts = response.data.data.data
          this.total = response.data.data.links.length - 2
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false
        })

    this.$axios.get(process.env.API + 'archives?sort=year&itemsPerPage=3&page=' + this.currentPage)
        .then(response => {
          this.loading = true
          this.oldPosts = response.data.data.data
          this.total = response.data.data.links.length - 2
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false
        })
  }
}
</script>