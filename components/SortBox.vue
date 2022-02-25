<template>
  <div class="sort-box">
    <div class="sort-box__text">
      Сортировать по:
      <span @click="dropdownState = true">
        {{ chosenOption }}
        <svg width="8" height="8">
          <use href="../assets/img/icons.svg#arrow-sm"></use>
        </svg>
      </span>
    </div>

    <div class="sort-box__items" :class="{'sort-box__items--active' : dropdownState}">
      <div class="sort-box__item"
           v-for="i in sortOptions"
           @click="chose(i)"
           :class="{'sort-box__item--active' : chosenOption === i}">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortOptions: ['Сначала новые', 'Сначала старые', 'По популярности'],
      chosenOption: 'Сначала новые',
      dropdownState: false
    }
  },
  methods: {
    chose(name) {
      this.chosenOption = name
      this.dropdownState = false
    }
  }
}
</script>