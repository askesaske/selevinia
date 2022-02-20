<template>
  <section class="info-block">
    <div class="info-block__container">
      <bread-crumb class="info-block__breadcrumb" :breadcrumb="breadcrumb"></bread-crumb>

      <div class="info-block__row">
        <div class="info-block__text">
          <h3 class="info-block__heading">
            {{ heading }}
          </h3>

          <div class="info-block__subtitle">
            {{ subtitle }}
          </div>
        </div>

        <img :src="imageUrl" alt="" class="info-block__img">
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb";

export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    heading: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    breadcrumb: {
      type: Array,
      default: null
    }
  },
  components: {
    BreadCrumb
  }
}
</script>