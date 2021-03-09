<template>
  <div class="row card-group sample-card-group">
    <sample-card image="image1.jpg" title="タイトル" text="説明"></sample-card>
    <sample-card image="image2.jpg" title="タイトル" text="説明"></sample-card>
    <sample-card image="image3.jpg" title="タイトル" text="説明"></sample-card>
  </div>
</template>

<script>
import SampleCard from '@/components/SampleCard'

export default {
  components: { SampleCard },
  props: {

  }
}
</script>

<style lang="scss" scoped></style>
