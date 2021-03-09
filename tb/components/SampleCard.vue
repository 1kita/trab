<template>
    <div class="sample-card card col-sm-4 pt-3">
      <img class="card-img-top" :src="imagePath" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ text }}</p>
        <sample-button @click="click"></sample-button>
      </div>
    </div>
</template>

<script>
import SampleButton from '@/components/SampleButton'

export default {
  components: {
    SampleButton
  },
  props: {
    /**
     * 画像
     */
    image: {
      type: String,
      default: ''
    },
    /**
     * タイトル
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 説明
     */
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    imagePath() {
      return require('@/assets/img/'+this.image)
    }
  },
  methods: {
    click() {
      alert('button clicked');
    }
  }
}
</script>

<style lang="scss" scoped>
.sample-card {

}
</style>
