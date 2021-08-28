<template>
  <ul class="navbar">
    <li
      v-for="
        ({ title, relativeUrl }, key)
          of pages
      "
      :key="key"
      class="navbar__item"
    >
      <nuxt-link
        class="navbar__link"
        :to="relativeUrl"
        active-class="is-active"
        exact
        :prefetch="false"
      >
        {{ title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { createArrayPropConfig }
  from '@/modules/propConfigs';

export default {
  props: {
    pages: createArrayPropConfig(),
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/mixins.scss";

  .navbar {

    list-style: none;
    flex-wrap: wrap;
    display: flex;
    padding-top: 30px;
    padding-bottom: 26px;
    padding-left: 0;

    margin-right: -60px;

    &__item {
      width: 120px;
      margin-bottom: 10px;

      margin-right: 60px;
    }

    &__link {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  }

  .is-active {
    @include make-gradient(
      #ffffff00,
      #c4ec35dc,
      100%
    );
  }
</style>
