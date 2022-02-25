<template>
  <div class="other-page">
    <info-block class="other-page__info-block"
                :image-url="require('assets/img/other-img.svg')"
                :heading="'Другие публикации'"
                :subtitle="'А ещё элементы политического процесса, вне зависимости \n'+
                'от их уровня, должны быть объединены в целые кластеры \n'+
                'себе подобных.'"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="other-page__main">

      <div class="other-page__container">

        <search-box class="other-page__search"></search-box>

        <sort-box class="other-page__sort"></sort-box>

        <div class="other-page__cards">
          <journal-card class="other-page__journal"
                        :name="'Журнал'"
                        :description="'Description'"
                        :img="'https://anime-fans.ru/wp-content/uploads/2021/05/Ochen-krasivye-devochki-anime-kartinki-i-foto_22.jpg'"
                        v-for="i in 4"
                        :key="i">
          </journal-card>
        </div>

        <padding-box class="other-page__padding"></padding-box>

      </div>

    </div>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock";
import SearchBox from "@/components/SearchBox";
import SortBox from "@/components/SortBox";
import PaddingBox from "@/components/PaddingBox";
import JournalCard from "@/components/JournalCard";

export default {
  components: {
    InfoBlock,
    SearchBox,
    SortBox,
    PaddingBox,
    JournalCard
  },
  data() {
    return {
      breadcrumb: [{
        name: 'Другие публикации',
        link: ''
      }]
    }
  }
}
</script>