<template>
  <div
    class="p-4 bg-gray-300 w-2/5 sm:w-2/5 lg:w-2/6 flex flex-col justify-end items-center"
    v-click-outside="onClickOutside"
  >
    <!-- Steps -->
    <div class="w-3/4 mb-4 flex flex-col" v-show="steps.length">
      <Step
        data-cy="step"
         v-for="({ level, text }, index) in steps"
        :key="index"
        :level="level"
        :text="text"
        @removed="removeStep"
      />
    </div>
    <!-- Buttons -->
    <div class="w-3/4">
      <!-- In offline mode -->
      <RecorderButton data-cy="button-start" v-show="isOffline" @changeMode="changeMode('start')" text="Start recording" />
      <!-- In action mode -->
      <RecorderButton data-cy="button-pause" v-show="inAction" @changeMode="changeMode('pause')" text="Recording..." />
      <!-- In pause mode -->
      <div class="flex flex-row justify-between" v-show="isPaused">
        <!-- Buttons -->
        <RecorderButton data-cy="button-restart" @changeMode="changeMode('restart')" class="mr-4" text="Save" />
        <RecorderButton data-cy="button-continue" @changeMode="changeMode('start')" text="Continue" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { recorderModule, RecordingModeType } from '@/store/recorder'
import RecorderButton from '@/components/RecorderButton.vue'
import Step from '@/components/Step.vue'

@Component({
  components: {
    RecorderButton,
    Step
  }
})
export default class SideBar extends Vue {
  /* local state */
  get activeModeType () {
    return recorderModule.activeModeType
  }

  get isOffline () {
    return this.activeModeType === RecordingModeType.Offline
  }

  get inAction () {
    return this.activeModeType === RecordingModeType.InAction
  }

  get isPaused () {
    return this.activeModeType === RecordingModeType.Paused
  }

  get steps () {
    return recorderModule.steps
  }

  changeMode (mode: string) {
    switch (mode) {
      case 'start':
        recorderModule.changeMode(RecordingModeType.InAction)
        break
      case 'pause':
        recorderModule.changeMode(RecordingModeType.Paused)
        break
      case 'restart':
        recorderModule.cleanSteps()
        recorderModule.changeMode(RecordingModeType.InAction)
        break
      default:
        break
    }
  }

  removeStep (stepLevel: number) {
    if (recorderModule.activeModeType === RecordingModeType.Paused) {
      recorderModule.removeStep(stepLevel)
    }
  }

  onClickOutside ({ target }: Event) {
    const element = (target as HTMLElement)
    const attribute = element.getAttribute('data-watched-element')
    const isWatched = attribute === 'true'
    const isRecording = recorderModule.isRecording

    if (isWatched && isRecording) {
      let selectors = `${element.nodeName.toLowerCase()}`

      element.classList.forEach(c => {
        selectors = selectors + `.${c}`
      })

      recorderModule.addStep({
        text: selectors
      })
    }
  }
}
</script>

<style lang="scss">

</style>
