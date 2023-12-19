<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="hover ? 16 : 4" class="fill-height d-flex flex-column">
      <v-card-title primary-title color="black">
        <div>
          <a :href="url" style="color:black;text-decoration:none">
            <h3 class="headline font-weight-regular mb-0" style="word-break:break-word">{{ title }}</h3>
          </a>
          <h4 class="subtitle-1 font-weight-regular text--secondary mb-0" style="word-break: break-word" v-if="subtitle">{{ subtitle }}</h4>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <a :href="url">
        <v-img
          :src="image"
          :max-height="600"
          position="top left"
          :aspect-ratio="1.9"
          eager
        ></v-img>
      </a>
      <v-divider></v-divider>
      <v-card-text class="body-1 black--text">
        <slot></slot>
      </v-card-text>
      <v-spacer></v-spacer>
      <div class="my-0 px-4 py-2" style="background: #EEE">
        <div class="d-flex align-center">
          <div>
            <a class="black--text" :href="url">{{ url }}</a>
            <v-icon v-if="external" right small class="align-self-center">mdi-open-in-new</v-icon>
          </div>
          <v-spacer></v-spacer>
          <div v-if="external" class="text-caption" style="color:grey;font-weight:bold">
            External Link
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <v-card-actions class="pa-4 justify-space-around">
        <v-btn
          class="px-4"
          large
          color="primary"
          :href="url"
        >
          Launch
          <v-icon right small>mdi-chevron-right</v-icon>
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
    url: String,
    external: Boolean
  }
}
</script>
