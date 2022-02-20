<template>
  <main class="main">
    <section class="main__section welcome-section">
      <div class="welcome-section__container">

        <div class="welcome-section__info">
          <h1 class="welcome-section__heading">
            Научный журнал
          </h1>
          <p class="welcome-section__title">
            Selevinia
          </p>

          <transition name="fade" mode="in-out">
            <p class="welcome-section__subtitle" :class="{'welcome-section__subtitle--active': expandStatus}">
              А ещё элементы политического процесса, вне зависимости
              от их уровня, должны быть объединены в целые кластеры. Есть над чем задуматься: активно развивающиеся
              страны
              третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть в равной степени
              предоставлены сами себе. Но тщательные исследования конкурентов освещают чрезвычайно интересные
              особенности
              картины в целом, однако конкретные выводы, разумеется, превращены в посмешище
            </p>
          </transition>
          <div class="welcome-section__expand" @click="toggleExpand">
            <p v-if="!expandStatus">Развернуть</p>
            <p v-else>Свернуть</p>
          </div>

          <button class="button welcome-section__button">
            Подписаться
          </button>
        </div>

        <img src="../assets/img/main-pic.svg" alt="" class="welcome-section__img">

      </div>
    </section>

    <section class="main__section journal-section">
      <div class="journal-section__container">
        <div class="journal-section__new-box">
          <h2 class="journal-section__heading heading-medium">
            Новый номер
          </h2>

          <journal-card class="journal-section__journal"
                        :year="'2021'"
                        :tom="'29'"
                        :description="'Description'"
                        :img="'https://anime-fans.ru/wp-content/uploads/2021/05/Ochen-krasivye-devochki-anime-kartinki-i-foto_22.jpg'">
          </journal-card>
        </div>

        <div class="journal-section__blogs">
          <h2 class="journal-section__heading heading-medium">
            Блог редактора
          </h2>

          <div class="journal-section__blog-cards">

            <blog-card class="journal-section__blog-card"
                       v-for="i in 2"
                       :key="i"
                       :img="'https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg'"
                       :date="'12 сентябрь 2021'"
                       :tag="'Герпетология'"
                       :title="'Равным образом, реализация намеченных плановых заданий требует'">
            </blog-card>

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import JournalCard from "@/components/JournalCard";
import BlogCard from "@/components/BlogCard";

export default {
  components: {
    JournalCard,
    BlogCard
  },
  data() {
    return {
      expandStatus: false
    }
  },
  methods: {
    toggleExpand() {
      this.expandStatus = !this.expandStatus
    }
  }
}
</script>

<style>

</style>
