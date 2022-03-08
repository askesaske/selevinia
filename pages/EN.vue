<template>
  <div class="rules-page">
    <info-block class="authors-page__info-block"
                :image-url="require('assets/img/en-img.svg')"
                :heading="'English version'"
                :subtitle="englishPageDescription[0].value"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="rules-page__main">
      <div class="rules-page__container">
        <div class="rules-page__text">
          {{ englishPageText[0].value }}
        </div>
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
  }
}
</script>