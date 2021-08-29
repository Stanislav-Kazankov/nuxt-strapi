<template>
  <div class="page">
    <div class="page__centerer">
      <h1 class="page__h1">
        {{heading}}
      </h1>
      <photo
        :title="title"
        :alt="alt"
        :not-webp1x-src="notWebp1xSrc"
        :not-webp-rest-srcs="notWebpRestSrcs"
        :webp-srcs="webpSrcs"
      />
    </div>
  </div>
</template>

<script>
import { definePageDataLoader }
  from '@/mixins/dataLoadersDefinition';

export default {
  mixins: [
    definePageDataLoader(
      'index-data',
    ),
  ],
  data() {
    return {
      heading: '',
      title: '',
      alt: '',
      notWebp1xSrc: {},
      notWebpRestSrcs: [],
      webpSrcs: [],
    };
  },
};
</script>
