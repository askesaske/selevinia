<template>
  <div class="other-page">
    <info-block class="other-page__info-block"
                :image-url="require('assets/img/other-img.svg')"
                :heading="'Другие публикации'"
                :subtitle="otherPage[0].value"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="other-page__main">

      <div class="other-page__container">

<!--        <search-box class="other-page__search"></search-box>-->

<!--        <sort-box class="other-page__sort" @sort="sort"></sort-box>-->

        <div class="archive-page__cards">
          <journal-card class="archive-page__journal"
                        :name="post.title"
                        :description="post.description"
                        :img="post.image_url"
                        :id="post.id"
                        :link="post.document_url"
                        v-for="post in newPosts"
                        :key="post.id">
          </journal-card>
        </div>

        <padding-box class="archive-page__padding"
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
import SearchBox from "@/components/SearchBox";
import SortBox from "@/components/SortBox";
import PaddingBox from "@/components/PaddingBox";
import JournalCard from "@/components/JournalCard";
import LoaderBlock from "@/components/LoaderBlock";

export default {
  components: {
    InfoBlock,
    SearchBox,
    SortBox,
    PaddingBox,
    JournalCard,
    LoaderBlock
  },
  data() {
    return {
      breadcrumb: [{
        name: 'Другие публикации',
        link: ''
      }],
      sortState: 'Сначала новые',
      total: 0,
      newPosts: [],
      oldPosts: [],
      currentPage: parseInt(this.$route.params.number),
      loading: false
    }
  },
  computed: {
    otherPage() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'othersText') || []
    },
    pageNums() {
      return this.paginate(this.currentPage, this.total, 1)
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
        this.$router.push('/other/page/' + this.currentPage)
      }
    },
    nextPage() {
      if (this.currentPage < this.total) {
        this.currentPage++;
        this.$router.push('/other/page/' + this.currentPage)
      }
    },
    pageChosen(page) {
      this.$router.push('/other/page/' + page)
    },
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
    }
  },
  mounted() {
    this.$store.commit('setSearchState', false)

    this.$axios.get(process.env.API + 'publications?sort=-created_at&itemsPerPage=10&page=' + this.currentPage)
        .then(response => {
          this.loading = true
          this.newPosts = response.data.data.data
          this.total = response.data.data.last_page
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false
        })

    // this.$axios.get(process.env.API + 'publications?itemsPerPage=10&page=' + this.currentPage)
    //     .then(response => {
    //       this.loading = true
    //       this.oldPosts = response.data.data.data
    //       this.total = response.data.data.last_page
    //     })
    //     .catch(e => console.log(e))
    //     .finally(() => {
    //       this.loading = false
    //     })
  }
}
</script>