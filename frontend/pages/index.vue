<template>
  <div class="page">
    <div class="page__centerer">
      <h1 class="page__h1">
        Персональный сайт Станислава Казанкова
      </h1>
      <img-container
        :img-data="imgData"
        class-name="photo-container"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: {
        name: 'photo',
        width: 230,
        height: 325,
        alt: 'Моё фото',
      },
    };
  },
};
</script>
