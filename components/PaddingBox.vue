<template>
  <div class="padding">
    <div class="padding__container">
      <button class="padding__btn" @click="$emit('prevPage')">
        <svg width="24" height="24">
          <use href="../assets/img/icons.svg#padding-arrow"></use>
        </svg>
      </button>

      <div class="padding__numbers">
        <div class="padding__number"
             :class="{'padding__number--active' : i === current}"
             @click="pageChosen(i)"
             v-for="i in total">
          {{ i }}
        </div>
      </div>

      <button class="padding__btn padding__btn--right" @click="$emit('nextPage')">
        <svg width="24" height="24">
          <use href="../assets/img/icons.svg#padding-arrow"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Array,
      default: []
    },
    current: {
      type: Number,
      default: 1
    }
  },
  methods: {
    pageChosen(page) {
      this.$emit('exactlyPage', page)
    }
  }
}
</script>