<template>
  <div class="rules-page">
    <info-block class="rules-page__info-block"
                :image-url="require('assets/img/rules-img.svg')"
                :heading="'Правила для авторов'"
                :subtitle="rulesPageDescription[0].value"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="rules-page__main">
      <div class="rules-page__container">
        <div class="rules-page__text" v-html="rulesPageText[0].value"></div>
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
        name: 'Правила для авторов',
        link: ''
      }],
    }
  },
  computed: {
    rulesPageText() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'authorsRulesText') || []
    },
    rulesPageDescription() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'authorsRulesDescription') || []
    }
  },
  mounted() {
    this.$store.commit('setSearchState', false)
  }
}
</script>