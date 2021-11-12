import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//Impoartar VueRouter
import VueRouter from 'vue-router';

//Importacion de componentes
import inicio from './components/Inicio';
import listarReportes from './components/ListarReporte';
import crearReporte from './components/CrearReporte';
import editarReporte from './components/EditarReporte';
import contacto from './components/Contacto';

//Crea componentes
Vue.component('inicio', inicio);
Vue.component('listarReportes', listarReportes);
Vue.component('crearReporte', crearReporte);
Vue.component('editarReporte', editarReporte);
Vue.component('contacto', contacto);

//Uso de VueRouter
Vue.use(VueRouter);

//Definimos rutas
const routes = [
  {path:'/', component:inicio},
  {path:'/inicio',component:inicio},
  {path:'/reporte', component:listarReportes},
  {path:'/crear', component:crearReporte, name:'crearReporte'},
  {path:'/editar/:Dataid', component:editarReporte, name:'editarReporte'},
  {path:'/contacto',component:contacto}
]

//crearmos el objeto router
const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')