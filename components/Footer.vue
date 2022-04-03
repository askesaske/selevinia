<template>
  <footer class="footer">
    <div class="footer__container">

      <div class="footer__col">
        <img src="../assets/img/icons/footer-logo.svg" alt="" class="footer__logo">

        <div class="footer__logo-text">
          Зоологический журнал-ежегодник <br>
          Казахстана и Центральной Азии
        </div>

        <div class="footer__text footer__text--mb20">
          © А.Ф. Ковшарь
        </div>

<!--        <div class="footer__socials">-->
<!--          <a href="#" class="footer__social" target="_blank">-->
<!--            <svg width="30" height="30">-->
<!--              <use href="../assets/img/icons.svg#tg"></use>-->
<!--            </svg>-->
<!--          </a>-->

<!--          <a href="#" class="footer__social" target="_blank">-->
<!--            <svg width="30" height="30">-->
<!--              <use href="../assets/img/icons.svg#fb"></use>-->
<!--            </svg>-->
<!--          </a>-->

<!--          <a href="#" class="footer__social" target="_blank">-->
<!--            <svg width="30" height="30">-->
<!--              <use href="../assets/img/icons.svg#twitter"></use>-->
<!--            </svg>-->
<!--          </a>-->

<!--          <a href="#" class="footer__social" target="_blank">-->
<!--            <svg width="30" height="30">-->
<!--              <use href="../assets/img/icons.svg#vk"></use>-->
<!--            </svg>-->
<!--          </a>-->
<!--        </div>-->
      </div>

      <div class="footer__col">
        <div class="footer__title">
          Карта сайта
        </div>

        <nuxt-link tag="div" to="/" class="footer__text footer__text--mb10 footer__text--link">
          Главная
        </nuxt-link>
        <nuxt-link tag="div" to="/archive/page/1" class="footer__text footer__text--mb10 footer__text--link">
          Архив номеров
        </nuxt-link>
        <nuxt-link tag="div" to="/blog/page/1" class="footer__text footer__text--mb10 footer__text--link">
          Блог редактора
        </nuxt-link>
        <nuxt-link tag="div" to="/authors/page/1" class="footer__text footer__text--mb10 footer__text--link">
          Авторы
        </nuxt-link>
        <nuxt-link tag="div" to="/rules" class="footer__text footer__text--mb10 footer__text--link">
          Правила для авторов
        </nuxt-link>
        <nuxt-link tag="div" to="/other/page/1" class="footer__text footer__text--mb10 footer__text--link">
          Другие публикации
        </nuxt-link>

      </div>

      <div class="footer__col">
        <div class="footer__title">
          Контактная информация
        </div>

        <div class="footer__text footer__text--mb10">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#mail"></use>
          </svg>

          ibisbilkovshar@mail.ru
        </div>
<!--        <div class="footer__text footer__text&#45;&#45;mb10">-->
<!--          <svg width="24" height="24">-->
<!--            <use href="../assets/img/icons.svg#mail"></use>-->
<!--          </svg>-->

<!--          ibisbilkovshar@mail.ru-->
<!--        </div>-->
      </div>

      <div class="footer__col">
        <div class="footer__title footer__title--fw400 footer__title--mb20">
          Есть вопросы или предложения?
        </div>

        <button class="footer__button" @click="openModal">
          Написать нам
        </button>

        <div class="footer__text footer__text--mb10">Сайт разработан при поддержке АСБК</div>
        <div class="footer__text footer__text footer__text--mb10">Автор лого Selevinia: Т. Е. Лопатина</div>
        <div class="footer__text footer__text footer__text--mb10">Автор штриховых рисунков: Ф. Ф. Карпов</div>
      </div>

    </div>

    <modal-box
        @close="closeModal"
        v-if="modalShow"
    ></modal-box>
  </footer>
</template>

<script>
import ModalBox from "@/components/ModalBox";

export default {
  components: {
    ModalBox
  },
  data() {
    return {
      modalShow: false
    }
  },
  methods: {
    openModal() {
      this.modalShow = true
      document.querySelector('body').style.overflow = 'hidden'
    },
    closeModal() {
      this.modalShow = false
      document.querySelector('body').style.overflow = 'unset'
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
