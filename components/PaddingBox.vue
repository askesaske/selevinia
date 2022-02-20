<template>
  <div class="padding">
    <div class="padding__container">
      <button class="padding__btn">
        <svg width="24" height="24">
          <use href="../assets/img/icons.svg#padding-arrow"></use>
        </svg>
      </button>

      <div class="padding__numbers">
        <div class="padding__number" v-for="i in 5">{{ i }}</div>
      </div>

      <button class="padding__btn padding__btn--right">
        <svg width="24" height="24">
          <use href="../assets/img/icons.svg#padding-arrow"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>