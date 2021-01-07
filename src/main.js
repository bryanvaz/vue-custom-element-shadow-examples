import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import vuetify from '@/plugins/vuetify'; // path to vuetify export

// import App from './App.vue';
import StandaloneText from './components/StandaloneText.vue';
import StyleModuleExample from './components/StyleModuleExample.vue';
import VuetifyExample from './components/VuetifyExample.vue';

Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app');

Vue.use(vueCustomElement);

Vue.customElement('standalone-text', StandaloneText, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      console.debug('shadowRoot found! Using as root node ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = rootNode;
    } else {
      console.debug('shadowRoot not found! Using document head ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = document.head;
    }

    return root;
  },
});

Vue.customElement('style-module-example', StyleModuleExample, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = rootNode;
    } else {
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = document.head;
    }
    return root;
  },
});

VuetifyExample.vuetify = vuetify;

Vue.customElement('vuetify-example', VuetifyExample, {
  shadow: true,
  // shadowCss: vuetifyCss,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = rootNode;
    } else {
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = document.head;
    }
    return root;
  },
});
