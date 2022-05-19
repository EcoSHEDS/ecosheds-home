<template>
  <v-app>
    <UsgsHeader></UsgsHeader>
    <router-view></router-view>
    <UsgsFooter></UsgsFooter>
  </v-app>
</template>

<script>
import UsgsHeader from '@/components/usgs/UsgsHeader'
import UsgsFooter from '@/components/usgs/UsgsFooter'

export default {
  name: 'App',
  components: {
    UsgsHeader,
    UsgsFooter
  }
}
</script>

<style>
.theme--dark a {
  color: #b1d8ff !important;
}
</style>
