import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Article from './components/Article.vue';
import CreateArticle from './components/CreateArticle.vue';
import EditArticle from './components/EditArticle.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, {
  moment
});

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/editar/:id', name: 'edit', component: EditArticle},
  {path: '/crear-articulo', name: 'create', component: CreateArticle},
  {path: '/articulo/:id', name: 'article', component: Article},
  {path: '/redirect/:searchString', component: Redirect},
  {path: '/peliculas', name: 'peliculas', component: Peliculas},
  {path: '/formulario', component: Formulario},
  {path: '/buscador/:searchString', component: Search},
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/mi-componente', component: MiComponente},
  {path: '/', component: LastArticles},
  {path: '/hola-mundo', component: HelloWorld},
  {path: '*', component: ErrorComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
