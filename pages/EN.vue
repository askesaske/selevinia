<template>
  <div class="rules-page">
    <info-block class="authors-page__info-block"
                :image-url="require('assets/img/en-img.svg')"
                :heading="'Selevinia'"
                :subtitle="englishPageDescription[0].value"
                :breadcrumb="breadcrumb"
                italic>
    </info-block>

    <div class="rules-page__main">
      <div class="rules-page__container">
        <div class="rules-page__text" v-html="englishPageText[0].value"></div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock";

export default {
  components: {
    InfoBlock,
  },
  data() {
    return {
      breadcrumb: [{
        name: 'English version',
        link: ''
      }],
    }
  },
  computed: {
    englishPageText() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'englishVersionText') || []
    },
    englishPageDescription() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'englishVersionDescription') || []
    }
  },
  mounted() {
    this.$store.commit('setSearchState', false)
  }
}
</script>