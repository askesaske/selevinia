<template>
  <div class="modal">
    <div class="modal__wrapper">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      mail: ''
    }
  },
  methods: {
    sendMail() {
      this.$axios.post(process.env.API + 'subscriptions ', {
        email: this.mail
      })
          .then(response => console.log(response))
          .catch(e => console.log(e))
    }
  }
}
</script>