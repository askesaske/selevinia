<template>
  <div class="search-page">
    <div class="search-page__container">
      <bread-crumb
          class="search-page__breadcrumb"
          :breadcrumb="breadcrumb">
      </bread-crumb>

      <div class="search-page__heading">
        Результаты поиска
        <span>10</span>
      </div>

      <div class="search-page__results">
        <journal-card class="search-page__journal"
                      :year="'2021'"
                      :tom="'29'"
                      :description="'Description'"
                      :img="'https://anime-fans.ru/wp-content/uploads/2021/05/Ochen-krasivye-devochki-anime-kartinki-i-foto_22.jpg'">
        </journal-card>

        <blog-card class="search-page__blog-card"
                   v-for="i in 2"
                   :key="i"
                   with-description
                   :img="'https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg'"
                   :date="'12 сентябрь 2021'"
                   :tag="'Герпетология'"
                   :title="'Равным образом, реализация намеченных плановых заданий требует'"
                   :description="'afsdfasdfasdfasd'">
        </blog-card>
      </div>
    </div>
  </div>
</template>

<script>
import breadCrumb from "@/components/BreadCrumb";
import JournalCard from "@/components/JournalCard";
import BlogCard from "@/components/BlogCard";

export default {
  components: {
    breadCrumb,
    JournalCard,
    BlogCard
  },
  data() {
    return {
      breadcrumb: [
        {
          name: 'Результаты поиска',
          link: ''
        }
      ]
    }
  }
}
</script>