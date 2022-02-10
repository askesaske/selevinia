<template>
  <div>
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
@import '../node_modules/swiper/swiper-bundle.css';
@import "../assets/scss/style";

@font-face {
  font-family: 'Manrope';
  src: url('../assets/fonts/Manrope-Regular.eot');
  src: url('../assets/fonts/Manrope-Regular.eot?#iefix') format('embedded-opentype'),
  url('../assets/fonts/Manrope-Regular.woff2') format('woff2'),
  url('../assets/fonts/Manrope-Regular.woff') format('woff'),
  url('../assets/fonts/Manrope-Regular.ttf') format('truetype'),
  url('../assets/fonts/Manrope-Regular.svg#Manrope-Regular') format('svg');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Manrope';
  src: url('../assets/fonts/Manrope-Medium.eot');
  src: url('../assets/fonts/Manrope-Medium.eot?#iefix') format('embedded-opentype'),
  url('../assets/fonts/Manrope-Medium.woff2') format('woff2'),
  url('../assets/fonts/Manrope-Medium.woff') format('woff'),
  url('../assets/fonts/Manrope-Medium.ttf') format('truetype'),
  url('../assets/fonts/Manrope-Medium.svg#Manrope-Medium') format('svg');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Manrope';
  src: url('../assets/fonts/Manrope-SemiBold.eot');
  src: url('../assets/fonts/Manrope-SemiBold.eot?#iefix') format('embedded-opentype'),
  url('../assets/fonts/Manrope-SemiBold.woff2') format('woff2'),
  url('../assets/fonts/Manrope-SemiBold.woff') format('woff'),
  url('../assets/fonts/Manrope-SemiBold.ttf') format('truetype'),
  url('../assets/fonts/Manrope-SemiBold.svg#Manrope-SemiBold') format('svg');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Manrope';
  src: url('../assets/fonts/Manrope-ExtraBold.eot');
  src: url('../assets/fonts/Manrope-ExtraBold.eot?#iefix') format('embedded-opentype'),
  url('../assets/fonts/Manrope-ExtraBold.woff2') format('woff2'),
  url('../assets/fonts/Manrope-ExtraBold.woff') format('woff'),
  url('../assets/fonts/Manrope-ExtraBold.ttf') format('truetype'),
  url('../assets/fonts/Manrope-ExtraBold.svg#Manrope-ExtraBold') format('svg');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Times New Roman';
  src: url('../assets/fonts/times_new_roman.eot'); /* IE 9 Compatibility Mode */
  src: url('../assets/fonts/times_new_roman.eot?#iefix') format('embedded-opentype'), /* IE < 9 */
  url('../assets/fonts/times_new_roman.woff2') format('woff2'), /* Super Modern Browsers */
  url('../assets/fonts/times_new_roman.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */
  url('../assets/fonts/times_new_roman.ttf') format('truetype'), /* Safari, Android, iOS */
  url('../assets/fonts/times_new_roman.svg#times_new_roman') format('svg'); /* Chrome < 4, Legacy iOS */
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Times New Roman';
  src: url('../assets/fonts/times_new_roman_bold.eot'); /* IE 9 Compatibility Mode */
  src: url('../assets/fonts/times_new_roman_bold.eot?#iefix') format('embedded-opentype'), /* IE < 9 */
  url('../assets/fonts/times_new_roman_bold.woff2') format('woff2'), /* Super Modern Browsers */
  url('../assets/fonts/times_new_roman_bold.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */
  url('../assets/fonts/times_new_roman_bold.ttf') format('truetype'), /* Safari, Android, iOS */
  url('../assets/fonts/times_new_roman_bold.svg#times_new_roman_bold') format('svg'); /* Chrome < 4, Legacy iOS */
  font-weight: 700;
  font-style: normal;
}

</style>
