<template>
  <div class="article-page">
    <div class="article-page__container">

      <bread-crumb class="article-page__breadcrumb" :breadcrumb="breadcrumb"></bread-crumb>

      <h4 class="article-page__heading">
        Равным образом, реализация намеченных плановых заданий
      </h4>

      <div class="article-page__row">

        <div class="article-page__share">
          <div class="article-page__text">
            Поделиться:
          </div>

          <div class="article-page__socials">
            <a href="#" class="article-page__social">
              <svg width="30" height="30">
                <use href="../../assets/img/icons.svg#twitter-2"></use>
              </svg>
            </a>
            <a href="#" class="article-page__social">
              <svg width="30" height="30">
                <use href="../../assets/img/icons.svg#fb-2"></use>
              </svg>
            </a>
            <a href="#" class="article-page__social">
              <svg width="30" height="30">
                <use href="../../assets/img/icons.svg#vk-2"></use>
              </svg>
            </a>
            <a href="#" class="article-page__social">
              <svg width="30" height="30">
                <use href="../../assets/img/icons.svg#tg-2"></use>
              </svg>
            </a>
          </div>
        </div>

        <div class="article-page__main">
          <div class="article-page__details">
            <div class="article-page__date">
              23 января 2022, 15:27
            </div>
            <div class="article-page__tag">
              Энтомология
            </div>
          </div>

          <div class="article-page__img-box">
            <img src="../../assets/img/article-img.png" alt="" class="article-page__img">
          </div>

          <div class="article-page__description">
            Есть над чем задуматься: активно развивающиеся страны третьего мира призывают нас к новым свершениям,
            которые, в свою очередь, должны быть в равной степени предоставлены сами себе. Но тщательные исследования
            конкурентов освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы,
            разумеется, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. С
            учётом сложившейся международной обстановки, разбавленное изрядной долей эмпатии, рациональное мышление, а
            также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для переосмысления
            внешнеэкономических политик!
            <br><br>
            Прежде всего, постоянный количественный рост и сфера нашей активности создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом комплекса как самодостаточных, так и
            внешне зависимых концептуальных решений. Высокий уровень вовлечения представителей целевой аудитории
            является четким доказательством простого факта: граница обучения кадров представляет собой интересный
            эксперимент проверки своевременного выполнения сверхзадачи. Задача организации, в особенности же выбранный
            нами инновационный путь требует анализа своевременного выполнения сверхзадачи! Есть над чем задуматься:
            сделанные на базе интернет-аналитики выводы, превозмогая сложившуюся непростую экономическую ситуацию,
            ограничены исключительно образом мышления.
            <br><br>
            Предварительные выводы неутешительны: семантический разбор внешних противодействий однозначно фиксирует
            необходимость распределения внутренних резервов и ресурсов. Лишь интерактивные прототипы ограничены
            исключительно образом мышления. Задача организации, в особенности же социально-экономическое развитие
            предоставляет широкие возможности для как самодостаточных, так и внешне зависимых концептуальных решений.
            Сложно сказать, почему некоторые особенности внутренней политики и по сей день остаются уделом либералов,
            которые жаждут быть подвергнуты целой серии независимых исследований.
          </div>
        </div>

        <div class="article-page__share article-page__share--sm">
          <div class="article-page__text">
            Поделиться:
          </div>

          <div class="article-page__socials">
            <a href="#" class="article-page__social">
              <svg width="30" height="30">
                <use href="../../assets/img/icons.svg#twitter-2"></use>
              </svg>
            </a>
            <a href="#" class="article-page__social">
              <svg width="30" height="30">
                <use href="../../assets/img/icons.svg#fb-2"></use>
              </svg>
            </a>
            <a href="#" class="article-page__social">
              <svg width="30" height="30">
                <use href="../../assets/img/icons.svg#vk-2"></use>
              </svg>
            </a>
            <a href="#" class="article-page__social">
              <svg width="30" height="30">
                <use href="../../assets/img/icons.svg#tg-2"></use>
              </svg>
            </a>
          </div>
        </div>

        <div class="article-page__popular">
          <div class="article-page__title">
            Популярные статьи
          </div>

          <div class="article-page__items">
            <div class="article-page__item" v-for="i in 8">
              <div class="article-page__item-row">
                <div class="article-page__date">
                  12 сентябрь 2021
                </div>
                <div class="article-page__item-tag">
                  Герпетология
                </div>
              </div>
              <div class="article-page__item-title">
                Равным образом, реализация намеченных плановых заданий требует
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb";

export default {
  data() {
    return {
      breadcrumb: [
        {
          name: 'Блог редактора',
          link: '/blog'
        },
        {
          name: 'Статья',
          link: ''
        }]
    }
  },
  components: {
    BreadCrumb
  }
}
</script>