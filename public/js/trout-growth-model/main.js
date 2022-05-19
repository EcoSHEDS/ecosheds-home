import { Runtime, Inspector } from 'https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js'
import define from 'https://api.observablehq.com/@bletcher/predictedtroutgrowth-predictions.js?v=3'
(new Runtime()).module(define, name => {
  if (name === 'introText') return Inspector.into('#observablehq-e5ebfad5 .observablehq-introText')()
  if (name === 'input1') return Inspector.into('#observablehq-e5ebfad5 .observablehq-input1')()
  if (name === 'input2') return Inspector.into('#observablehq-e5ebfad5 .observablehq-input2')()
  if (name === 'input3') return Inspector.into('#observablehq-e5ebfad5 .observablehq-input3')()
  if (name === 'charts') return Inspector.into('#observablehq-e5ebfad5 .observablehq-charts')()
  if (name === 'chartsAccum') return Inspector.into('#observablehq-e5ebfad5 .observablehq-chartsAccum')()
  if (name === 'params') return Inspector.into('#observablehq-e5ebfad5 .observablehq-params')()
  if (name === 'shadowPush') return Inspector.into('#observablehq-e5ebfad5 .observablehq-shadowPush')()
  if (name === 'shadow') return Inspector.into('#observablehq-e5ebfad5 .observablehq-shadow')()
  if (name === 'shadowCount') return Inspector.into('#observablehq-e5ebfad5 .observablehq-shadowCount')()
  if (name === 'grObjGrowthAccum') return Inspector.into('#observablehq-e5ebfad5 .observablehq-grObjGrowthAccum')()
  if (name === 'grObjAccumul') return Inspector.into('#observablehq-e5ebfad5 .observablehq-grObjAccumul')()
  if (name === 'grObj') return Inspector.into('#observablehq-e5ebfad5 .observablehq-grObj')()
  if (name === 'styles') return Inspector.into('#observablehq-e5ebfad5 .observablehq-styles')()
})
