<template>
  <div class="authors-page">
    <info-block class="authors-page__info-block"
                :image-url="require('assets/img/authors-img.svg')"
                :heading="'Авторы'"
                :subtitle="authorsPage[0].value"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="authors-page__main">

      <div class="authors-page__container">

<!--        <search-box class="authors-page__search"></search-box>-->

        <sort-box class="authors-page__sort" @sort="sort"></sort-box>

        <table class="authors-page__table table" v-if="sortState === 'Сначала новые'">
          <thead>
          <tr>
            <th class="table__sm">№</th>
            <th>ФИО</th>
            <th>Об авторе</th>
            <th>Перечень статей</th>
            <th></th>
          </tr>
          </thead>
          <tbody v-for="(author, k) in newAuthors" :key="author.id">
          <tr :class="{'table__shadow' : dropdownState === author.id}">
            <td class="table__sm">{{ startFrom + k }}</td>
            <td>{{ author.full_name }}</td>
            <td>
              <span class="table__about">
                {{ author.about }}
              </span>
            </td>
            <td>
              <span class="table__articles">
                {{ author.articles }}
              </span>
            </td>
            <td @click="openDropdown(author.id)">
              <svg width="24" height="24">
                <use href="../../../assets/img/icons.svg#arrow-table"></use>
              </svg>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="table__dropdown" v-if="dropdownState === author.id">
              <div class="table__row">
                <div class="table__label">
                  ФИО
                </div>
                <div class="table__text">
                  {{ author.full_name }}
                </div>
              </div>

              <div class="table__row">
                <div class="table__label">
                  Описание
                </div>
                <div class="table__text">
                  {{ author.about }}
                </div>
              </div>

              <div class="table__row">
                <div class="table__label">
                  Перечень статей
                </div>
                <div class="table__text">
                  {{ author.articles }}
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>

        <table class="authors-page__table table" v-else>
          <thead>
          <tr>
            <th class="table__sm">№</th>
            <th>ФИО</th>
            <th>Об авторе</th>
            <th>Перечень статей</th>
            <th></th>
          </tr>
          </thead>
          <tbody v-for="(author, k) in oldAuthors" :key="author.id">
          <tr :class="{'table__shadow' : dropdownState === author.id}">
            <td class="table__sm">{{ startFrom + k }}</td>
            <td>{{ author.full_name }}</td>
            <td>
              <span class="table__about">
                {{ author.about }}
              </span>
            </td>
            <td>
              <span class="table__articles">
                {{ author.articles }}
              </span>
            </td>
            <td @click="openDropdown(author.id)">
              <svg width="24" height="24">
                <use href="../../../assets/img/icons.svg#arrow-table"></use>
              </svg>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="table__dropdown" v-if="dropdownState === author.id">
              <div class="table__row">
                <div class="table__label">
                  ФИО
                </div>
                <div class="table__text">
                  {{ author.full_name }}
                </div>
              </div>

              <div class="table__row">
                <div class="table__label">
                  Описание
                </div>
                <div class="table__text">
                  {{ author.about }}
                </div>
              </div>

              <div class="table__row">
                <div class="table__label">
                  Перечень статей
                </div>
                <div class="table__text">
                  {{ author.articles }}
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>

        <padding-box class="authors-page__padding"
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
import SearchBox from "@/components/SearchBox";
import LoaderBlock from "@/components/LoaderBlock";

export default {
  components: {
    InfoBlock,
    FilterBox,
    SortBox,
    PaddingBox,
    SearchBox,
    LoaderBlock
  },
  data() {
    return {
      breadcrumb: [{
        name: 'Авторы',
        link: ''
      }],
      dropdownState: null,
      sortState: 'Сначала новые',
      total: 1,
      newAuthors: [],
      oldAuthors: [],
      currentPage: parseInt(this.$route.params.number),
      startFrom: 1,
      loading: false
    }
  },
  computed: {
    loadedAuthors() {
      return this.$store.getters.loadedAuthors
    },
    authorsPage() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'authorsText') || []
    }
  },
  methods: {
    openDropdown(i) {
      if (this.dropdownState === i) {
        this.dropdownState = null
      } else {
        this.dropdownState = i
      }
    },
    sort(val) {
      if (val !== this.sortState) {
        this.sortState = val
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$router.push('/authors/page/' + this.currentPage)
      }
    },
    nextPage() {
      if (this.currentPage < this.total) {
        this.currentPage++;
        this.$router.push('/authors/page/' + this.currentPage)
      }
    },
    pageChosen(page) {
      this.$router.push('/authors/page/' + page)
    }
  },
  mounted() {
    this.$store.commit('setSearchState', false)

    this.$axios.get(process.env.API + 'authors?sort=-created_at&itemsPerPage=15&page=' + this.currentPage)
        .then(response => {
          this.loading = true
          this.oldAuthors = response.data.data.data
          this.total = response.data.data.links.length - 2
          this.startFrom = response.data.data.from
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false
        })

    this.$axios.get(process.env.API + 'authors?itemsPerPage=15&page=' + this.currentPage)
        .then(response => {
          this.loading = true
          this.newAuthors = response.data.data.data
          this.total = response.data.data.links.length - 2
          this.startFrom = response.data.data.from
        })
        .catch(e => console.log(e))
        .finally(() => {
          this.loading = false
        })
  }
}
</script>