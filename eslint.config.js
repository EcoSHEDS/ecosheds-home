import neostandard from 'neostandard'
import pluginVue from 'eslint-plugin-vue'

export default [
  { ignores: ['dist/', 'public/'] },
  ...neostandard(),
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
