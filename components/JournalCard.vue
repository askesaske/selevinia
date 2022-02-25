<template>
  <div class="journal-card">

    <div class="journal-card__row">
      <div class="journal-card__img-box">
        <img :src="img" alt="" class="journal-card__img">
      </div>

      <div class="journal-card__info">
        <div class="journal-card__item" v-if="name">
          Название:: <span>{{ name }}</span>
        </div>
        <div class="journal-card__item" v-if="year">
          Год: <span>{{ year }}</span>
        </div>
        <div class="journal-card__item" v-if="tom">
          Том: <span>{{ tom }}</span>
        </div>
        <div class="journal-card__link">
          Прочитать
        </div>

        <div class="journal-card__desc-box">
          <div class="journal-card__desc" :class="{'journal-card__desc--active' : expandStatus}" v-if="description">
            {{ description }}
          </div>

          <div class="journal-card__expand" @click="toggleExpand">
            <span v-if="!expandStatus">Развернуть</span>
            <span v-else>Свернуть</span>
          </div>
        </div>
      </div>

    </div>

    <div class="journal-card__desc-box journal-card__desc-box--mobile">
      <div class="journal-card__desc" :class="{'journal-card__desc--active' : expandStatus}" v-if="description">
        {{ description }}
      </div>

      <div class="journal-card__expand" @click="toggleExpand">
        <span v-if="!expandStatus">Развернуть</span>
        <span v-else>Свернуть</span>
      </div>
    </div>

    <button class="button journal-card__button">
      <svg width="24" height="24">
        <use href="../assets/img/icons.svg#download"></use>
      </svg>
      Загрузить
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandStatus: false
    }
  },
  props: {
    year: {
      type: String,
      default: null
    },
    tom: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  },
  methods: {
    toggleExpand() {
      this.expandStatus = !this.expandStatus
    }
  }
}
</script>