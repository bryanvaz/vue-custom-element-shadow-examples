# ShadowDOM examples for vue-custom-element

Demonstrates how ShadowDOM based WebComponents functionality should work with VueCLI 3 based projects.

This project uses [vue-custom-element](https://github.com/karol-f/vue-custom-element) for WebComponent functionality, however similar principles should apply for the native web-component-wrapper.

Working example: https://bryanvaz.github.io/vue-custom-element-shadow-examples/

## Run example in dev mode
```
yarn install
yarn watch
```
_Note:_ Vuetify does not natively support ShadowDOM-based WebComponents, and therefore does not work with HMR.

## Compiles and builds web component
```
yarn build:lib
yarn http demo
```

## Notes
* The built library is quite large due to Vuetify including its entire code base into the WebComponent. This is an example of how a prebuilt UI library should used a-la-cart to avoid bloat.