<template>
  <div class="standalone-text">
    <p class="standalone-text-red">
      This standalone-text was rendered by Vue. The color should be red.
    </p>
  </div>
</template>

<script>
export default {
  name: 'StandaloneText',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.standalone-text-red {
  color: red;
}
.findmestyle {
  display: initial;
}
</style>
