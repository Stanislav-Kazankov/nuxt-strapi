export default (relativeUrl) => ({
  async asyncData({ $axios }) {
    const pageData = await $axios
      .$get(relativeUrl)
      .catch(() => { });

    return { ...pageData };
  },
});
