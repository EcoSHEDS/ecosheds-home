import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    // Vuetify 4 follows the operating system theme by default. This site has a fixed light design.
    defaultTheme: 'light'
  },
  defaults: {
    // Vuetify 4 no longer makes button text uppercase
    VBtn: {
      class: 'text-uppercase'
    }
  }
})
