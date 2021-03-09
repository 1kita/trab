<template>
  <button
    type="button"
    class="btn btn-primary"
    :value="value"
    :pressed="pressed"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    /**
     * 値
     */
    value: {
      type: String,
      default: 'on'
    },
    /**
     * テキスト
     */
    text: {
      type: String,
      default: 'ボタン'
    },
    /**
     * 押下状態
     */
    pressed: {
      type: Boolean,
      default: false
    },
    /**
     * 無効状態
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(data) {
      this.$emit('click', data)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
