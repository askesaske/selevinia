<template>
  <div class="archive-page">
    <info-block class="archive-page__info-block"
                :image-url="require('assets/img/archive-img.svg')"
                :heading="'Архив'"
                :subtitle="'А ещё элементы политического процесса, вне зависимости \n'+
                'от их уровня, должны быть объединены в целые кластеры \n'+
                'себе подобных.'"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="archive-page__main">

      <div class="archive-page__container">
        <filter-box class="archive-page__filter"></filter-box>

        <sort-box class="archive-page__sort"></sort-box>

        <div class="archive-page__cards">
          <journal-card class="archive-page__journal"
                        :year="'2021'"
                        :tom="'29'"
                        :description="'Description'"
                        :img="'https://anime-fans.ru/wp-content/uploads/2021/05/Ochen-krasivye-devochki-anime-kartinki-i-foto_22.jpg'"
                        v-for="i in 4"
                        :key="i">
          </journal-card>
        </div>

        <padding-box class="archive-page__padding"></padding-box>

      </div>

    </div>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock";
import FilterBox from "@/components/FilterBox";
import SortBox from "@/components/SortBox";
import PaddingBox from "@/components/PaddingBox";
import JournalCard from "@/components/JournalCard";

export default {
  components: {
    InfoBlock,
    FilterBox,
    SortBox,
    PaddingBox,
    JournalCard
  },
  data() {
    return {
      breadcrumb: [{
        name: 'Архив',
        link: ''
      }]
    }
  }
}
</script>