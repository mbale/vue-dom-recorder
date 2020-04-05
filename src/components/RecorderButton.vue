<template>
  <button
    @click="changeMode"
    class="bg-blue-600 focus:outline-none hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class RecorderButton extends Vue {
  @Prop({
    type: String,
    required: true
  })
  readonly text!: string

  changeMode () {
    this.$emit('changeMode')
  }
}
</script>

<style lang="scss">

</style>
