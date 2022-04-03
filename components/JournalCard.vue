<template>
  <div class="journal-card">

    <div class="journal-card__row">
      <div class="journal-card__img-box">
        <img :src="img" alt="" class="journal-card__img">
      </div>

      <div class="journal-card__info">
        <div class="journal-card__item" v-if="name">
          Название: <span>{{ name }}</span>
        </div>
        <div class="journal-card__item" v-if="year">
          Год: <span>{{ year }}</span>
        </div>
        <div class="journal-card__item" v-if="tom">
          Том: <span>{{ tom }}</span>
        </div>
        <a :href="link" target="_blank" class="journal-card__link">
          Прочитать
        </a>

        <div class="journal-card__desc-box">
          <div class="journal-card__desc"
               :class="{'journal-card__desc--active' : expandStatus}"
               v-if="description"
               v-html="description">
          </div>

          <div class="journal-card__expand" @click="toggleExpand">
            <span v-if="!expandStatus">Развернуть</span>
            <span v-else>Свернуть</span>
          </div>
        </div>
      </div>

    </div>

    <div class="journal-card__desc-box journal-card__desc-box--mobile">
      <div class="journal-card__desc"
           :class="{'journal-card__desc--active' : expandStatus}"
           v-if="description"
           v-html="description">
      </div>

      <div class="journal-card__expand" @click="toggleExpand">
        <span v-if="!expandStatus">Развернуть</span>
        <span v-else>Свернуть</span>
      </div>
    </div>

    <a :href="'https://sabadoryo.com/api/archives/' + id + '/download-document'" target="_blank" class="button journal-card__button">
      <svg width="24" height="24">
        <use href="../assets/img/icons.svg#download"></use>
      </svg>
      Загрузить
    </a>
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
    id: {
      type: Number,
      default: null
    },
    year: {
      type: Number,
      default: null
    },
    tom: {
      type: Number,
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
    },
    link: String,
    default: null
  },
  methods: {
    toggleExpand() {
      this.expandStatus = !this.expandStatus
    },
  }
}
</script>