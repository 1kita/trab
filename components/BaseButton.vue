<template>
  <button
    type="button"
    class="btn"
    :class="classObject"
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
     * 色
     * @values primary, secondary, success, danger, warning, info, light, dark
     */
    buttonColor: {
      type: String,
      default: 'primary'
    },
    /**
     * テキスト
     */
    text: {
      type: String,
      default: 'ボタン'
    },
    /**
     * 無効状態
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      return {
        'btn-primary': this.buttonColor === 'primary',
        'btn-secondary': this.buttonColor === 'secondary',
        'btn-success': this.buttonColor === 'success',
        'btn-danger': this.buttonColor === 'danger',
        'btn-warning': this.buttonColor === 'warning',
        'btn-info': this.buttonColor === 'info',
        'btn-light': this.buttonColor === 'light',
        'btn-dark': this.buttonColor === 'dark',
        toggle: this.toggle,
        pressed: this.pressed
      }
    }
  },
  methods: {
    handleClick(data) {
      this.$emit('click', data)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
