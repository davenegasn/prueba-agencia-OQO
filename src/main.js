import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps,{
	load: {
		key: 'xxx'
	}
});


new Vue({
  render: h => h(App),
}).$mount('#app')
