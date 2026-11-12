<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" :elevation="isHovering ? 5 : 2" class="fill-height d-flex flex-column">
      <!-- text-wrap lets long titles use more than one line -->
      <v-card-title class="text-wrap pa-4">
        <div>
          <a :href="url" style="color:black;text-decoration:none">
            <h3 class="text-headline-small font-weight-regular mb-0" style="word-break:break-word">{{ title }}</h3>
          </a>
          <h4 class="text-body-large font-weight-regular text-medium-emphasis mb-0" style="word-break:break-word;line-height:1.75rem;letter-spacing:0.009375em" v-if="subtitle">{{ subtitle }}</h4>
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
          cover
        ></v-img>
      </a>
      <v-divider></v-divider>
      <v-card-text class="text-body-large text-black">
        <slot></slot>
      </v-card-text>
      <v-spacer></v-spacer>
      <div class="my-0 px-4 py-2" style="background: #EEE">
        <div class="d-flex align-center">
          <div>
            <a class="text-black" :href="url">{{ url }}</a>
            <v-icon v-if="external" end size="16" class="align-self-center">mdi-open-in-new</v-icon>
          </div>
          <v-spacer></v-spacer>
          <div v-if="external" class="text-body-small" style="color:grey;font-weight:bold">
            External Link
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <v-card-actions class="pa-4 justify-space-around">
        <v-btn
          class="px-4"
          size="large"
          style="font-size:0.875rem"
          variant="elevated"
          color="primary"
          :href="url"
          :disabled="offline"
        >
          <span v-if="offline">Offline</span>
          <span v-else>Launch <v-icon end size="16">mdi-chevron-right</v-icon></span>
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
    external: Boolean,
    offline: Boolean
  }
}
</script>
