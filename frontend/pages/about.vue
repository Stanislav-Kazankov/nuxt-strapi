<template>
  <div class="page">
    <div class="page__centerer">
      <h1 class="page__h1">
        {{ heading }}
      </h1>
      <p class="page__p">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
import definePageDataLoader
  from '@/mixins/definePageDataLoader';

export default {
  mixins: [
    definePageDataLoader(
      'about-data',
    ),
  ],
  data() {
    return {
      heading: '',
      paragraph: '',
    };
  },
};
</script>
