<template>
  <div class="style-module-example">
    <p :class="$style.blue">
      This text was rendered by Vue with CSS Modules. The color should be blue.
    </p>
  </div>
</template>

<script>
export default {
  name: 'StyleModuleExample',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.blue {
  color: rgba(13, 13, 192, 1);
}
</style>
