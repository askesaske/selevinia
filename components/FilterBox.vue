<template>
  <div class="filter-box">
    <input type="text" class="filter-box__input" placeholder="Введите поисковую фразу">
    <div class="filter-box__select-box">
      <div class="filter-box__select"
           @click="toggleSelect"
           :class="{'filter-box__select--active' : selectStatus}">
        {{ selected }}
        <svg width="20" height="20">
          <use href="../assets/img/icons.svg#arrow-down"></use>
        </svg>
      </div>

      <div class="filter-box__dropdown"
           :class="{'filter-box__dropdown--active' : selectStatus}">
        <div class="filter-box__dropdown-item" v-for="i in 3" @click="selectItem(i)">{{ i }}</div>
      </div>
    </div>
    <button class="filter-box__btn">
      <svg width="24" height="24">
        <use href="../assets/img/icons.svg#search-2"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectStatus: false,
      selected: 'По категории'
    }
  },
  methods: {
    toggleSelect() {
      this.selectStatus = !this.selectStatus
    },
    selectItem(i) {
      this.selected = i
      this.selectStatus = false
    }
  }
}
</script>