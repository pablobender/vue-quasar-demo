import Vue from 'vue'
import App from './App.vue'

import './styles/quasar.styl'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QCard,
  QCardSection,
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QCard,
    QCardSection,
  },
  directives: {
  },
  plugins: {
  },
  lang: lang
 })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
