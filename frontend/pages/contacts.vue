<template>
  <div class="page">
    <div class="page__centerer">
      <h1 class="page__h1">
        {{ heading }}
      </h1>
      <ul class="contacts">
        <li
          v-for="
            ({ title, value, url }, key)
              of processedContacts
          "
          :key="key"
          class="contacts__item"
        >
          {{ title }}
          <a
            class="contacts__link"
            :href="url"
          >
            {{ value }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import definePageDataLoader
  from '@/mixins/definePageDataLoader';
import {
  processPhone, processEmail,
  processTelegram,
} from '@/modules/contactProcessing';

export default {
  mixins: [
    definePageDataLoader(
      'contacts-data',
    ),
  ],
  data() {
    return {
      heading: '',
      phone: {},
      email: {},
      telegram: {},
    };
  },
  computed: {
    processedContacts() {
      return {
        phone: processPhone(this.phone),
        email: processEmail(this.email),
        telegram: processTelegram(this.telegram),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .contacts {

    list-style: none;
    padding-left: 0;

    &__item {
      margin-bottom: 10px;
    }

    &__link {
      position: relative;

      &:after {
        content: "";

        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 2px;

        background-color: #76a704;
      }
    }
  }
</style>
