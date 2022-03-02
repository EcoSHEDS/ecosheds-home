<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="hover ? 16 : 4" class="fill-height d-flex flex-column">
      <v-card-title primary-title color="black">
        <div >
          <h3 class="headline font-weight-regular mb-0" style="word-break:break-word">{{ title }}</h3>
          <h4 class="subtitle-1 font-weight-regular text--secondary mb-0" style="word-break: break-word" v-if="subtitle">{{ subtitle }}</h4>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-img
        :src="require('@/assets/img/' + image)"
        :max-height="600"
        position="top left"
        :aspect-ratio="1.77"
        eager
      ></v-img>
      <v-divider></v-divider>
      <v-card-text class="body-1 black--text">
        <slot></slot>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-card-actions class="pa-4 justify-space-around">
        <v-btn
          class="px-4"
          large
          color="primary"
          :href="url"
        >
          Launch <v-icon right small>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    subtitle: String,
    image: String,
    url: String
  }
}
</script>
