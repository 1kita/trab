<template>
  <div id="home">
    <sample-header></sample-header>
    <sample-main-visual></sample-main-visual>
    <div class="container p-5">
        <sample-card-group></sample-card-group>
    </div>
  </div>
</template>

<script>
import SampleHeader from '@/components/SampleHeader'
import SampleMainVisual from '@/components/SampleMainVisual'
import SampleCardGroup from '@/components/SampleCardGroup'

export default {
  components: { SampleHeader, SampleMainVisual, SampleCardGroup }
}
</script>

<style SampleHeader lang="scss" scoped>

</style>
