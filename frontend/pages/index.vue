<template>
  <div class="page">
    <div class="page__centerer">
      <h1 class="page__h1">
        {{ heading }}
      </h1>
      <photo v-bind="$data" />
    </div>
  </div>
</template>

<script>
import definePageDataLoader
  from '@/mixins/definePageDataLoader';

export default {
  mixins: [
    definePageDataLoader(
      'index-data',
    ),
  ],
  data() {
    return {
      heading: '',
      notWebp1xSrc: {},
      notWebpRestSrcs: [],
      webpSrcs: [],
    };
  },
};
</script>
