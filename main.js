import Vue from 'vue'
import App from './App'
import PageFooter from './components/PageFooter'

Vue.component('PageFooter', PageFooter)

Vue.config.productionTip = false
Vue.prototype.$author = 'Sanm ZH'

App.mpType = 'app'

const app =  new Vue({
    ...App
})
app.$mount()
