<template>
  <div class="contact-box">
    <div class="contact-box__wrapper" v-if="!status">
      <svg width="16" height="16" class="contact-box__cancel" @click="$emit('close')">
        <use href="../assets/img/icons.svg#cancel"></use>
      </svg>

      <div class="contact-box__title">
        Обратная связь
      </div>

      <form @submit.prevent="sendRequest">
        <input type="text" class="contact-box__input" placeholder="Имя" v-model="fullName" required>

        <input type="email" class="contact-box__input" placeholder="E-mail" v-model="email" required>

        <div class="contact-box__select-box">
          <div class="contact-box__select"
               :class="{'contact-box__select--active' : textState}"
               @click="dropdownToggle">
            <p>{{ contactType }}</p>
            <svg width="24" height="24"
                 class="contact-box__arrow"
                 :class="{'contact-box__arrow--active' : dropdownShow}">
              <use href="../assets/img/icons.svg#arrow-down"></use>
            </svg>
          </div>

          <div class="contact-box__dropdown" v-show="dropdownShow">
            <div class="contact-box__dropdown-item" @click="chooseType('Обратная связь')">
              <p>Обратная связь</p>
              <svg width="24" height="24" v-if="contactType === 'Обратная связь'">
                <use href="../assets/img/icons.svg#radio-active"></use>
              </svg>
              <svg width="24" height="24" v-else>
                <use href="../assets/img/icons.svg#radio"></use>
              </svg>
            </div>

            <div class="contact-box__dropdown-item" @click="chooseType('Предложения')">
              <p>Предложение</p>
              <svg width="24" height="24" v-if="contactType === 'Предложения'">
                <use href="../assets/img/icons.svg#radio-active"></use>
              </svg>
              <svg width="24" height="24" v-else>
                <use href="../assets/img/icons.svg#radio"></use>
              </svg>
            </div>
          </div>

        </div>

        <textarea class="contact-box__textarea" placeholder="Ваше сообщение" v-model="message"></textarea>

        <button class="contact-box__btn" type="submit">Отправить</button>
      </form>

    </div>

    <div class="contact-box__wrapper" v-else>
      <svg width="16" height="16" class="contact-box__cancel" @click="$emit('close')">
        <use href="../assets/img/icons.svg#cancel"></use>
      </svg>

      <svg width="80" height="80" class="contact-box__success-icon">
        <use href="../assets/img/icons.svg#big-check"></use>
      </svg>

      <div class="contact-box__title contact-box__title--centered">
        Поздравляем!
      </div>

      <div class="contact-box__subtitle contact-box__subtitle--centered">
        Ваше сообщение было отправлено
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      contactType: 'Выберите тип обратной связи',
      dropdownShow: false,
      textState: false,
      fullName: '',
      email: '',
      message: '',
      status: false
    };
  },
  methods: {
    dropdownToggle() {
      this.dropdownShow = !this.dropdownShow
    },
    chooseType(type) {
      this.contactType = type;
      this.dropdownShow = false;
      this.textState = true;
    },
    sendRequest() {
      alert('kek')
    }
  }
}
</script>