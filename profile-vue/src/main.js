import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
Vue.use(VueParticles)


library.add(fas,fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
