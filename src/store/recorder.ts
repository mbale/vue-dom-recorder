import { VuexModule, Module, Mutation } from 'vuex-class-modules'
import { Omit } from 'utility-types'
import store from './index'

/**
 * Contains the possible modes for RecorderModule
 *
 * @export
 * @enum {number}
 */
export enum RecordingModeType {
  Offline = 'Offline',
  InAction = 'InAction',
  Paused = 'Paused'
}

/**
 * Model for a tracked step
 *
 * @export
 * @internal
 * @interface Step
 */
interface Step {
  /**
   * Click count
   * auto increments
   * @example e.g second click => level: 2
   *
   * @type {number}
   * @memberof Step
   */
  level: number;

  /**
   * CSS selector to access the DOM element
   *
   * @type {string}
   * @memberof Step
   */
  text: string;
}

type AddStepPayload = Omit<Step, 'level'>

/**
 * Data layer for tracking DOM clicks
 *
 * @class RecorderModule
 * @extends {VuexModule}
 */
@Module
class RecorderModule extends VuexModule {
  /**
   * Gets the current mode
   *
   * @type {RecordingModeType}
   * @memberof RecorderModule
   */
  activeModeType: RecordingModeType = RecordingModeType.Offline

  /**
   * Collection of tracked steps
   *
   * @type {Step[]}
   * @memberof RecorderModule
   */
  steps: Step[] = []

  /**
   * Shows if we're in tracking mode
   *
   * @readonly
   * @memberof RecorderModule
   */
  get isRecording () {
    return this.activeModeType === RecordingModeType.InAction
  }

  /**
   * Shows whether steps can be edited or not
   *
   * @readonly
   * @memberof RecorderModule
   */
  get stepsEditable () {
    return this.activeModeType === RecordingModeType.Paused
  }

  /**
   * Shows whether steps can be deleted or not
   *
   * @readonly
   * @memberof RecorderModule
   */
  get stepsDeletable () {
    return this.activeModeType === RecordingModeType.Paused
  }

  /**
   * Sets the new state mode for the recorder module
   *
   * @param {RecordingModeType} to
   * @memberof RecorderModule
   */
  @Mutation
  changeMode (to: RecordingModeType) {
    this.activeModeType = to
  }

  /**
   * Resets the tracked steps
   *
   * @memberof RecorderModule
   */
  @Mutation
  cleanSteps () {
    this.steps = []
  }

  /**
   * Call to submit a new tracked step
   *
   * @param {AddStepPayload} { text }
   * @memberof RecorderModule
   */
  @Mutation
  addStep ({ text }: AddStepPayload) {
    this.steps.push({
      level: this.steps.length + 1,
      text
    })
  }

  /**
   * Removes step from tracking
   *
   * @param {number} level
   * @memberof RecorderModule
   */
  @Mutation
  removeStep (level: number) {
    this.steps = this.steps.filter(step => step.level !== level)
  }
}

export const recorderModule = new RecorderModule({ store, name: 'recorder' })
