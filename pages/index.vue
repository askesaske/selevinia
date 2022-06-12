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

          <client-only>
            <div v-show="mainPage.length > 0">
              <transition name="fade" mode="in-out">
                <p class="welcome-section__subtitle"
                   :class="{'welcome-section__subtitle--active': expandStatus}"
                   v-html="mainPage[0].value">
                </p>
              </transition>
              <div class="welcome-section__expand" @click="toggleExpand">
                <p v-if="!expandStatus">Развернуть</p>
                <p v-else>Свернуть</p>
              </div>
            </div>
          </client-only>

          <button class="button welcome-section__button" @click="openModal">
            Подписаться
          </button>
        </div>

        <img src="../assets/img/main-pic.svg" alt="" class="welcome-section__img">

        <button class="button welcome-section__button welcome-section__button--mobile" @click="openModal">
          Подписаться
        </button>

      </div>
    </section>

    <section class="main__section journal-section">
      <div class="journal-section__container">
        <div class="journal-section__new-box">
          <h2 class="journal-section__heading heading-medium">
            Новый номер
          </h2>

          <journal-card class="journal-section__journal"
                        :id="loadedArchive.id"
                        :year="loadedArchive.year"
                        :tom="loadedArchive.tome"
                        :description="loadedArchive.description"
                        :img="loadedArchive.preview_big_image_url"
                        :link="loadedArchive.document_url">
          </journal-card>
        </div>

        <div class="journal-section__blogs">
          <h2 class="journal-section__heading heading-medium">
            Блог редактора
          </h2>

          <div class="journal-section__blog-cards">

            <blog-card class="journal-section__blog-card"
                       v-for="post in loadedPosts"
                       :key="post.id"
                       :img="post.preview_big_image_url"
                       :date="$dateFns.format(post.created_at, 'dd MMMM yyyy')"
                       :tag="post.category.name"
                       :title="post.name"
                       :id="post.id">
            </blog-card>

          </div>
        </div>
      </div>
    </section>

    <modal-box
        @close="closeModal"
        v-if="modalShow"
    ></modal-box>

  </main>
</template>

<script>
import JournalCard from "@/components/JournalCard";
import BlogCard from "@/components/BlogCard";
import ModalBox from "@/components/ModalBox";

export default {
  components: {
    JournalCard,
    BlogCard,
    ModalBox,
  },
  data() {
    return {
      expandStatus: false,
      modalShow: false
    }
  },
  computed: {
    loadedArchive() {
      return this.$store.getters.loadedArchive[0]
    },

    loadedPosts() {
      return this.$store.getters.loadedPosts
    },

    mainPage() {
      return this.$store.getters.loadedPages.filter(item => item.key === 'mainPageText') || []
    }
  },
  methods: {
    toggleExpand() {
      this.expandStatus = !this.expandStatus
    },
    openModal() {
      this.modalShow = true
      document.querySelector('body').style.overflow = 'hidden'
    },
    closeModal() {
      this.modalShow = false
      document.querySelector('body').style.overflow = 'unset'
    }
  },
  mounted() {
    this.$store.commit('setSearchState', false)
  }
}
</script>

<style>

</style>
