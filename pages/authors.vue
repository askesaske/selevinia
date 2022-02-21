<template>
  <div class="authors-page">
    <info-block class="authors-page__info-block"
                :image-url="require('assets/img/authors-img.svg')"
                :heading="'Авторы'"
                :subtitle="'А ещё элементы политического процесса, вне зависимости \n'+
                'от их уровня, должны быть объединены в целые кластеры \n'+
                'себе подобных.'"
                :breadcrumb="breadcrumb">
    </info-block>

    <div class="authors-page__main">

      <div class="authors-page__container">

        <search-box class="authors-page__search"></search-box>

        <sort-box class="authors-page__sort"></sort-box>

        <table class="authors-page__table table">
          <thead>
          <tr>
            <th>№</th>
            <th>ФИО</th>
            <th>Об авторе</th>
            <th>Перечень статей</th>
            <th></th>
          </tr>
          </thead>
          <tbody v-for="i in 5" :key="i">
          <tr :class="{'table__shadow' : dropdownState === i}">
            <td>001</td>
            <td>Иванов Иван Иванович</td>
            <td>
              <span class="table__about">
                А ещё элементы политического процесса, вне зависимости от их уровня, должны быт asd asd asd as asdf
                asd fasd fasd fasd fa
              </span>
            </td>
            <td>
              <div class="table__articles">
                •Selevinia – боялычная соня (из истории открытия) asd asd
              </div>
              <div class="table__articles">
                •Жалман – Казакстан мактанышы
              </div>
            </td>
            <td @click="openDropdown(i)">
              <svg width="24" height="24">
                <use href="../assets/img/icons.svg#arrow-table"></use>
              </svg>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="table__dropdown" v-if="dropdownState === i">
              <div class="table__row">
                <div class="table__label">
                  ФИО
                </div>
                <div class="table__text">
                  Иванов Иван Иванович
                </div>
              </div>

              <div class="table__row">
                <div class="table__label">
                  Описание
                </div>
                <div class="table__text">
                  А ещё элементы политического процесса, вне зависимости от их уровня, должны быть объединены в целые
                  кластеры себе подобных.
                </div>
              </div>

              <div class="table__row">
                <div class="table__label">
                  Перечень статей
                </div>
                <div class="table__text">
                  <div>•Selevinia – боялычная соня (из истории открытия)</div>
                  <div>•Жалман – Казакстан мактанышы</div>
                  <div>•Эколого-фаунистический обзор ящериц, населяющих пустыни Казахстана</div>
                  <div>•Орнитологические комплексы пустыни Бетпак-Дала</div>
                  <div>•Изменчивость окраски деревенских ласточек, пролетающих предгорьями Зап. Тянь-Шаня</div>
                  <div>•Новые и малоизвестные таксоны жужелиц рода Carabus</div>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>

        <padding-box class="authors-page__padding"></padding-box>

      </div>

    </div>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock";
import FilterBox from "@/components/FilterBox";
import SortBox from "@/components/SortBox";
import PaddingBox from "@/components/PaddingBox";
import SearchBox from "@/components/SearchBox";

export default {
  components: {
    InfoBlock,
    FilterBox,
    SortBox,
    PaddingBox,
    SearchBox
  },
  data() {
    return {
      breadcrumb: [{
        name: 'Авторы',
        link: ''
      }],
      dropdownState: null
    }
  },
  methods: {
    openDropdown(i) {
      if (this.dropdownState === i) {
        this.dropdownState = null
      } else {
        this.dropdownState = i
      }
    }
  }
}
</script>