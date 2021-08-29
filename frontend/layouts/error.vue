<template>
  <div class="page">
    <div class="page__centerer">
      <h1 class="page__h1">
        {{message}}
      </h1>
      <nuxt-link to="/">
        {{linkText}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { defineLayoutDataLoader }
  from '@/mixins/dataLoadersDefinition';

export default {
  mixins: [
    defineLayoutDataLoader(
      '/error-data',
    ),
  ],
  data() {
    return {
      message: '',
      linkText: '',
    };
  },
};
</script>
