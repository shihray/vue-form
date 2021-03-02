import Vue from 'vue'
// import App from './App.vue'
import Router from './router'
import store from './store'
import Home from  './view/home.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import {
    BNavbar,
    BootstrapVue,
    BootstrapVueIcons,
    FormPlugin,
    FormSelectPlugin,
    SidebarPlugin,
    TablePlugin
} from 'bootstrap-vue';

import 'sweetalert2/dist/sweetalert2.min.css';
// import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueSweetalert2);
Vue.use(FormPlugin);
Vue.component('b-navbar', BNavbar)
Vue.use(SidebarPlugin)
Vue.config.productionTip = false
Vue.use(TablePlugin)
Vue.use(FormSelectPlugin)

new Vue({
    Router,
    store,
    render: h => h(Home)
}).$mount('#app')
