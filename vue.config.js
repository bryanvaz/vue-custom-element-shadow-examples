function enableShadowCss(config) {
  const configs = [
    // Required to explicitly call the __inject__ function exported by
    // vue-style-loader on vue mounting
    // (though the shadow DOM should be created and marked
    //  first by the main js or the style injection will fail)
    config.module.rule('vue').use('vue-loader'),
  ];
  const ruleSets = ['css', 'postcss', 'scss', 'sass', 'less', 'stylus'];
  const ruleNames = ['vue-modules', 'vue', 'normal-modules', 'normal'];
  // console.info('**** config.module.rules **** ');
  // console.info(config.module.rules.store.keys());

  ruleSets.forEach((ruleSet) => {
    if (config.module.rules.store.has(ruleSet)) {
      // console.info(`**** config.module.rule(${ruleSet}) names: `);
      // console.info(config.module.rule(ruleSet).oneOfs.store.keys());

      ruleNames.forEach((rName) => {
        if (config.module.rule(ruleSet).oneOfs.store.has(rName)) {
          // console.info(`**** config.module.rule(${ruleSet}).oneOf(${rName}) uses: `);
          // console.info(config.module.rule(ruleSet).oneOf(rName).uses.store.keys());
          if (config.module.rule(ruleSet).oneOf(rName).uses.store.has('vue-style-loader')) {
            // console.info(`*** vue-style-loader found in rule(${ruleSet}).oneOf(${rName})!`);
            configs.push(config.module.rule(ruleSet).oneOf(rName).use('vue-style-loader'));
          }
        }
      });
    }
  });
  if (!process.env.BUILD_MODE) {
    process.env.BUILD_MODE = config.store.get('mode');
  }
  configs.forEach((c) => c.tap((options) => {
    // eslint-disable-next-line no-param-reassign
    options.shadowMode = true;
    return options;
  }));
}

module.exports = {
  chainWebpack:
    (config) => {
      // config.resolve.symlinks(false);
      enableShadowCss(config);
    },
  css: {
    sourceMap: true,
    extract: false,
    // modules: true,
  },
};
