<template>
  <v-app>
    <UsgsHeader></UsgsHeader>
    <router-view></router-view>
    <UsgsFooter></UsgsFooter>
  </v-app>
</template>

<script>
import UsgsHeader from '@/components/usgs/UsgsHeader.vue'
import UsgsFooter from '@/components/usgs/UsgsFooter.vue'

export default {
  name: 'App',
  components: {
    UsgsHeader,
    UsgsFooter
  }
}
</script>

<style>
/*
  Vuetify 4 does not reset the browser margins of text elements and does not set a link color.
  These rules are in the Vuetify reset layer so that utility classes (e.g. mb-4) still override them.
*/
@layer vuetify-core.reset {
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  p {
    margin: 0 0 16px;
  }
  ul, ol {
    margin: 0;
    padding: 0 0 0 24px;
  }
  a {
    color: rgb(var(--v-theme-primary));
  }
}

/*
  Container padding and widths of the original design. The Vuetify 4 defaults are narrower.
  Below 960px the container uses the full width.
  These rules are in the Vuetify overrides layer so that utility classes (e.g. px-2) still override them.
*/
@layer vuetify-overrides {
  .v-container {
    padding: 12px 24px;
  }
  .v-container:not(.v-container--fluid) {
    max-width: none;
  }
  @media (min-width: 960px) {
    .v-container:not(.v-container--fluid) {
      max-width: 900px;
    }
  }
  @media (min-width: 1264px) {
    .v-container:not(.v-container--fluid) {
      max-width: 1185px;
    }
  }
  /* 1545px is the Vuetify 4 "xl" breakpoint, where the project cards change to three columns */
  @media (min-width: 1545px) {
    .v-container:not(.v-container--fluid) {
      max-width: 1450px;
    }
  }
  @media (min-width: 1904px) {
    .v-container:not(.v-container--fluid) {
      max-width: 1785px;
    }
  }
}

/*
  Text sizes of the original design (Material Design 2).
  The Vuetify 4 sizes (Material Design 3) for these classes are slightly different.
*/
.text-display-medium {
  font-size: 3rem;
  line-height: 3.125rem;
}
.text-headline-large {
  font-size: 2.125rem;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em;
}
.text-title-large {
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0.0125em;
}
.text-label-medium {
  line-height: 2rem;
  letter-spacing: 0.1666666667em;
}
.v-btn {
  letter-spacing: 0.0892857143em;
}

/* light blue links on the dark sections; buttons keep their own color */
.v-theme--dark a:not(.v-btn) {
  color: #b1d8ff;
}
</style>
