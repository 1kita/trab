<template>
  <header class="sample-header">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="#">Logo</a>
  </nav>
  </header>
</template>

<script>
export default {
  props: {
    /**
     * テキスト
     */
    text: {
      type: String,
      default: 'ボタン'
    }
  }
}
</script>

<style lang="scss" scoped>
.sample-header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
