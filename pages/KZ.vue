<template>
  <div class="rules-page">
    <info-block class="authors-page__info-block"
                :image-url="require('assets/img/kz-img.svg')"
                :heading="'Selevinia'"
                :subtitle="kazakhPageDescription[0].value"
                :breadcrumb="breadcrumb"
                italic>
    </info-block>

    <div class="rules-page__main">
      <div class="rules-page__container">
        <div class="rules-page__text">
          {{ kazakhPageText[0].value }}
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
        name: 'қазақша',
        link: ''
      }],
    }
  },
  computed: {
    kazakhPageText() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'kazakhVersionText') || []
    },
    kazakhPageDescription() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'kazakhVersionDescription') || []
    }
  }
}
</script>