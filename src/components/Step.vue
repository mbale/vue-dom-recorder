<template>
  <div class="w-full text-sm flex flex-col bg-white p-4 mb-4">
    <div class="text-gray-700 flex flex-row justify-between mb-6">
      <!-- Header -->
      <span class="font-medium flex-col justify-center">Step {{ level }}</span>
      <!-- Delete -->
      <span v-show="isDeletable" class="w-5 fill-current cursor-pointer" @click="removeStep">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 1000"><path d="M420 80c116 0 215 41 297 123s123 181 123 297-41 215-123 297-181 123-297 123-215-41-297-123S0 616 0 500s41-215 123-297S304 80 420 80m86 420l154-154-86-86-154 152-152-152-88 86 154 154-154 152 88 86 152-152 154 152 86-86-154-152"/></svg>
      </span>
    </div>
    <div class="flex flex-row justify-between">
      <span class="font-medium mr-2 flex flex-col justify-center">Element</span>
      <span data-cy="show-css-selector" v-show="!isEditable" class="">{{ text }}</span>
      <div data-cy="edit-css-selector" v-show="isEditable" class="w-2/3">
        <input
          class="w-1/2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          :value="text"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { recorderModule } from '@/store/recorder'

@Component({})
export default class Step extends Vue {
  @Prop({
    type: Number,
    required: true
  })
  level!: number

  @Prop({
    type: String,
    required: true
  })
  text!: string

  get isEditable () {
    return recorderModule.stepsEditable
  }

  get isDeletable () {
    return recorderModule.stepsDeletable
  }

  removeStep () {
    this.$emit('removed', this.level)
  }
}
</script>

<style lang="scss">

</style>
