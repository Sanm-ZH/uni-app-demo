import Vue from 'vue'
import App from './App'
import PageFooter from './components/PageFooter'
import TabBar from './components/TabBar'

Vue.component('PageFooter', PageFooter)
Vue.component('TabBar', TabBar)

Vue.config.productionTip = false
Vue.prototype.$author = 'Sanm ZH'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount(() => {
    console.log(document);
})
