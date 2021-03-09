<template>
  <div class="sample-main-visual">
    <img src="~/assets/img/bg.jpg" class="img-fluid " alt="Responsive image">
    <p class="sample-main-visual-title">Sample Text</p>
  </div>
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
.sample-main-visual {
  position: relative;
  .sample-main-visual-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4em;
    color: #ffffff;
  }
}
</style>
