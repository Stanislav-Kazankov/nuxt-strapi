<template>
  <figure
    ref="photo"
    class="photo"
  >
    <figcaption class="visually-hidden">
      Фото Станислава Казанкова
    </figcaption>
    <picture>
      <source
        type="image/webp"
        :srcset="webpSrcset"
      >
      <img
        width="230"
        height="325"
        alt="Станислав Казанков в тёмно-синей рубашке анфас"
        :srcset="notWebpRestSrcset"
        :src="src"
        @load="onImgLoad"
      >
    </picture>
  </figure>
</template>

<script>
import _ from 'lodash';
import {
  createObjectPropConfig,
  createArrayPropConfig,
} from '@/modules/propConfigs';
import createSrcset
  from './createSrcset';

export default {
  props: {
    notWebp1xSrc:
      createObjectPropConfig(),
    notWebpRestSrcs:
      createArrayPropConfig(),
    webpSrcs:
      createArrayPropConfig(),
  },
  computed: {
    webpSrcset() {
      return createSrcset(this.webpSrcs);
    },
    notWebpRestSrcset() {
      return createSrcset(this.notWebpRestSrcs);
    },
    src() {
      let src = '';
      const { notWebp1xSrc } = this;
      if (!_.isEmpty(notWebp1xSrc)) {
        src = `${process.env.baseUrl}`
          + `${notWebp1xSrc.url}`;
      }

      return src;
    },
  },
  methods: {
    onImgLoad() {
      this.$refs.photo
        .style.backgroundColor = '#ffffff00';
      this.$data.imgLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .photo {
    width: 230px;
    height: 325px;

    background-color: #4f5a6c;
  }
</style>
