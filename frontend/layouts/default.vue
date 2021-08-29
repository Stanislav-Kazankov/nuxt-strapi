<template>
  <div class="default">
    <header class="default__header">
      <div class="default__centerer">
        <navbar :pages="pages" />
      </div>
    </header>
    <main class="default__main">
      <nuxt />
    </main>
    <footer class="default__footer">
      <div class="default__centerer">
        <p class="default__p">
          {{copyrights}}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineLayoutDataLoader }
  from '@/mixins/dataLoadersDefinition';

export default {
  mixins: [
    defineLayoutDataLoader(
      '/default-data',
    ),
  ],
  data() {
    return {
      pages: [],
      copyrights: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/mixins.scss";

.default {
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content 1fr min-content;

  &__centerer {
    @include make-centerer();
  }

  &__header {
    @include make-gradient(
      #c4ec35dc,
      #ffffff00,
      60%
    );
  }

  &__main {
    @include make-gradient(
      #ffffff00,
      #c4ec35dc,
      60%
    );
  }

  &__footer {
    padding-top: 30px;
    padding-bottom: 36px;
  }

  &__p {
    width: 500px;

    font-size: 20px;
    line-height: 26px;
  }
}
</style>
