<template>
  <div class="modal">
    <div class="modal__wrapper" v-if="!status">
      <svg width="20" height="20" class="modal__cancel" @click="$emit('close')">
        <use href="../assets/img/icons.svg#cancel"></use>
      </svg>

      <div class="modal__title">
        Подписаться на рассылку
      </div>

      <div class="modal__subtitle">
        Подпишись на рассылку от Selevinia, чтобы читать самые свежие номера и интересные статьи первым!
      </div>

      <div class="modal__input-box">
        <svg width="24" height="24">
          <use href="../assets/img/icons.svg#mail"></use>
        </svg>
        <input type="email" class="modal__input" placeholder="Введите ваш email ( example@gmail.com )" v-model="mail">
      </div>

      <button class="modal__btn" @click="sendMail">
        Подписаться
      </button>
    </div>

    <div class="modal__wrapper" v-if="status">
      <svg width="20" height="20" class="modal__cancel" @click="$emit('close')">
        <use href="../assets/img/icons.svg#cancel"></use>
      </svg>

      <svg width="80" height="80" class="modal__success-icon">
        <use href="../assets/img/icons.svg#big-check"></use>
      </svg>

      <div class="modal__title modal__title--centered">
        Поздравляем!
      </div>

      <div class="modal__subtitle modal__subtitle--centered">
        Вы успешно подписались на рассылку от Selevinia
      </div>
    </div>

    <div class="modal__wrapper" v-if="error">
      <svg width="20" height="20" class="modal__cancel" @click="$emit('close')">
        <use href="../assets/img/icons.svg#cancel"></use>
      </svg>

      <div class="modal__title modal__title--centered">
        Упс!
      </div>

      <div class="modal__subtitle modal__subtitle--centered">
        Произошла ошибка, попробуйте еще раз
      </div>
    </div>

    <LoaderBlock v-if="loader"/>
  </div>
</template>

<script>
import LoaderBlock from "@/components/LoaderBlock";

export default {
  components: {
    LoaderBlock
  },
  data() {
    return {
      mail: '',
      status: false,
      loader: false,
      error: false,
    }
  },
  methods: {
    sendMail() {
      this.loader = true;
      this.$axios.post(process.env.API + 'subscriptions ', {
        email: this.mail
      })
          .then(response => {
            if (response.data.code === 200) {
              this.status = true
            }
          })
          .catch(() => this.error = true)
          .finally(() => this.loader = false)
    }
  }
}
</script>