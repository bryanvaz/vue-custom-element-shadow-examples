import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
// import App from './App.vue';
// import StandaloneText from './components/StandaloneText.vue';
// import ButtonStyles from '!!raw-loader!sass-loader!./components/StandaloneText.vue';

Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app');

Vue.use(vueCustomElement);

// Vue.customElement('standalone-text', StandaloneText, { shadow: true });

Vue.customElement(
  'standalone-text',
  () => import('./components/StandaloneText.vue').then((c) => c.default), {
    shadow: true,
    shadowCss: '.test-css { color: black; }',
  },
);
