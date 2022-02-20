<template>
  <div class="blog-page">
    <info-block class="blog-page__info-block"
                :image-url="require('assets/img/blog-img.svg')"
                :heading="'Блог редактора'"
                :subtitle="'А ещё элементы политического процесса, вне зависимости \n'+
                'от их уровня, должны быть объединены в целые кластеры \n'+
                'себе подобных.'"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="blog-page__main">

      <div class="blog-page__container">
        <filter-box class="blog-page__filter"></filter-box>

        <sort-box class="blog-page__sort"></sort-box>

        <div class="blog-page__cards">
          <blog-card v-for="i in 6"
                     with-description
                     :key="i"
                     :img="'https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg'"
                     :date="'12 сентябрь 2021'"
                     :tag="'Герпетология'"
                     :title="'Равным образом, реализация намеченных плановых заданий требует'"
                     :description="'В частности, дальнейшее развитие различных форм деятельности играет различных  важн...'">
          </blog-card>
        </div>

        <padding-box class="blog-page__padding"></padding-box>

      </div>

    </div>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock";
import FilterBox from "@/components/FilterBox";
import SortBox from "@/components/SortBox";
import BlogCard from "@/components/BlogCard";
import PaddingBox from "@/components/PaddingBox";

export default {
  components: {
    InfoBlock,
    FilterBox,
    SortBox,
    BlogCard,
    PaddingBox
  },
  data() {
    return {
      breadcrumb: [{
        name: 'Блог редактора',
        link: ''
      }]
    }
  }
}
</script>