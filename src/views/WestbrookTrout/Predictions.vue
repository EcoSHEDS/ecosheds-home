<template>
  <div>
    <v-app-bar
      app
      color="blue-grey"
      dark
      style="margin-top:68px"
    >
      <v-toolbar-title class="text-h5">
        Westbrook Trout / Predictions
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/" exact color="white"><v-icon left>mdi-chevron-left</v-icon> Back to EcoSHEDS</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main style="margin-top:80px">
      <section>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="10" md="8" xl="6" class="text-h6 font-weight-regular">
              <v-card class="elevation-0">
                <v-card-title primary-title>
                  <div class="text-h4">Westbrook River Trout Growth Model Predictions</div>
                </v-card-title>

                <v-card-text class="body-1 black--text">
                  <div class="text-subtitle-2 mb-4">by Ben Letcher</div>
                  <div id="observablehq-101e6c76" class="observablehq-container">
                    <div class="observablehq-introText" style="max-width:800px"></div>
                    <v-divider class="my-4"></v-divider>
                    <div class="observablehq-input1"></div>
                    <div class="observablehq-input2"></div>
                    <div class="observablehq-input3"></div>
                    <v-divider class="my-4"></v-divider>
                    <div class="observablehq-charts"></div>
                    <div class="observablehq-chartsAccum"></div>
                    <v-divider class="my-4"></v-divider>
                    <div class="observablehq-paramText"></div>
                    <div class="observablehq-params"></div>
                    <div class="hidden observablehq-shadowPush"></div>
                    <div class="hidden observablehq-shadow"></div>
                    <div class="hidden observablehq-shadowCount"></div>
                    <div class="hidden observablehq-grObjGrowthAccum"></div>
                    <div class="hidden observablehq-grObjAccumul"></div>
                    <div class="hidden observablehq-grObj"></div>
                    <div class="hidden observablehq-styles"></div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
    <link rel="stylesheet" href="css/observable.css">
  </div>
</template>

<script>
export default {
  name: 'WestbrookTroutPredictions',
  created () {
    const script = document.createElement('script')
    script.async = true
    script.type = 'module'
    script.src = 'js/westbrook-trout/predictions.js'
    document.head.appendChild(script)
  }
}
</script>

<style>
.hidden {
  visibility: hidden;
  height: 0;
}
</style>
