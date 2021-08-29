import _ from 'lodash';

export const defineLayoutDataLoader = (
  relativeUrl,
) => ({
  async fetch() {
    const layoutData = await this.$axios
      .$get(relativeUrl)
      .catch(() => {});
    _(layoutData).forEach(
      (layoutDatum, key) => {
        this[key] = layoutDatum;
      },
    );
  },
});

export const definePageDataLoader = (
  relativeUrl,
) => ({
  async asyncData({ $axios }) {
    const pageData = await $axios
      .$get(relativeUrl)
      .catch(() => {});

    return { ...pageData };
  },
});
