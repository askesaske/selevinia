<template>
  <div class="article-page__socials">
    <a href="#" class="article-page__social" @click="shareTwitter">
      <svg width="30" height="30">
        <use href="../assets/img/icons.svg#twitter-2"></use>
      </svg>
    </a>
    <a href="#" class="article-page__social" @click="shareFacebook">
      <svg width="30" height="30">
        <use href="../assets/img/icons.svg#fb-2"></use>
      </svg>
    </a>
    <a href="#" class="article-page__social" @click="shareVk">
      <svg width="30" height="30">
        <use href="../assets/img/icons.svg#vk-2"></use>
      </svg>
    </a>
    <a href="#" class="article-page__social" @click="shareTg">
      <svg width="30" height="30">
        <use href="../assets/img/icons.svg#tg-2"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
    };
  },
  computed: {
    curUrl() {
      return window.location.href
    }
  },
  methods: {
    shareTwitter() {
      window.open('https://twitter.com/share?url=' + this.curUrl + '&text=' + this.title, '_blank');
    },
    shareFacebook() {
      window.open('https://www.facebook.com/sharer.php?u=' + this.curUrl, '_blank');
    },
    shareVk() {
      window.open('https://vk.com/share.php?url=' + this.curUrl, '_blank');
    },
    shareTg() {
      window.open('https://t.me/share/url?url=' + this.curUrl + '&text=' + this.title, '_blank');
    }
  }
}
</script>