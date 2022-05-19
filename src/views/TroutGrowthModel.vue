<template>
  <div>
    <v-app-bar
      app
      color="blue-grey"
      dark
      style="margin-top:68px"
    >
      <v-toolbar-title class="text-h5">
        Trout Growth Model
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
            <v-col cols="10" xl="8" class="text-h6 font-weight-regular">
              <v-card>
                <v-card-title primary-title>
                  <div class="text-h4">Trout Growth Model</div>
                </v-card-title>

                <v-card-text class="body-1 black--text">
                  <div class="text-subtitle-2 mb-4">by Ben Letcher</div>
                  <div id="observablehq-e5ebfad5" class="observablehq-container">
                    <div class="observablehq-introText" style="max-width:800px"></div>
                    <v-divider class="my-4"></v-divider>
                    <div class="observablehq-input1"></div>
                    <div class="observablehq-input2"></div>
                    <div class="observablehq-input3"></div>
                    <div class="observablehq-charts"></div>
                    <div class="observablehq-chartsAccum"></div>
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
  </div>
</template>

<script>
export default {
  name: 'TroutGrowthModel',
  mounted () {
    const script = document.createElement('script')
    script.async = true
    script.type = 'module'
    script.src = 'js/trout-growth-model/main.js'
    document.head.appendChild(script)
  }
}
</script>

<style>
.hidden {
  visibility: hidden;
  height: 0;
}

:root {
  --syntax_normal: #1b1e23;
  --syntax_comment: #a9b0bc;
  --syntax_number: #20a5ba;
  --syntax_keyword: #c30771;
  --syntax_atom: #10a778;
  --syntax_string: #008ec4;
  --syntax_error: #ffbedc;
  --syntax_unknown_variable: #838383;
  --syntax_known_variable: #005f87;
  --syntax_matchbracket: #20bbfc;
  --syntax_key: #6636b4;
  --mono_fonts: 82%/1.5 Menlo, Consolas, monospace;
}

.observablehq--expanded,
.observablehq--collapsed,
.observablehq--function,
.observablehq--import,
.observablehq--string:before,
.observablehq--string:after,
.observablehq--gray {
  color: var(--syntax_normal);
}

.observablehq--collapsed,
.observablehq--inspect a {
  cursor: pointer;
}

.observablehq--field {
  text-indent: -1em;
  margin-left: 1em;
}

.observablehq--empty {
  color: var(--syntax_comment);
}

.observablehq--keyword,
.observablehq--blue {
  color: #3182bd;
}

.observablehq--forbidden,
.observablehq--pink {
  color: #e377c2;
}

.observablehq--orange {
  color: #e6550d;
}

.observablehq--null,
.observablehq--undefined,
.observablehq--boolean {
  color: var(--syntax_atom);
}

.observablehq--number,
.observablehq--bigint,
.observablehq--date,
.observablehq--regexp,
.observablehq--symbol,
.observablehq--green {
  color: var(--syntax_number);
}

.observablehq--index,
.observablehq--key {
  color: var(--syntax_key);
}

.observablehq--prototype-key {
  color: #aaa;
}

.observablehq--empty {
  font-style: oblique;
}

.observablehq--string,
.observablehq--purple {
  color: var(--syntax_string);
}

.observablehq--error,
.observablehq--red {
  color: #e7040f;
}

.observablehq--inspect {
  font: var(--mono_fonts);
  overflow-x: auto;
  display: block;
  white-space: pre;
}

.observablehq--error .observablehq--inspect {
  word-break: break-all;
  white-space: pre-wrap;
}

.observablehq-container select {
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
  background-color: rgb(255, 255, 255);
  cursor: default;
  margin: 0em;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(187, 187, 187);
  border-image: initial;
  border-radius: 0px;
}

.observablehq-container button {
  appearance: auto;
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  background-color: rgb(239, 239, 239);
  margin: 0em;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
}

.observablehq-container input {
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: rgb(255, 255, 255);
  margin: 0em;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-color: rgb(187, 187, 187);
  border-image: initial;
}
</style>
