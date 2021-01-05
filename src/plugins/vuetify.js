// src/plugins/vuetify.js

// eslint-disable-next-line import/no-extraneous-dependencies
// import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const opts = {
  // icons: {
  //   iconfont: 'mdi', // default - only for display purposes
  // },
  theme: { shadowMode: true },
};

export default new Vuetify(opts);
