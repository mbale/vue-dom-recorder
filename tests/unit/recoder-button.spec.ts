import { shallowMount } from '@vue/test-utils'
import RecorderButton from '@/components/RecorderButton.vue'

describe('RecorderButton.vue', () => {
  const text = 'example test'

  it('renders text when prop text is passed', () => {
    const wrapper = shallowMount(RecorderButton, {
      propsData: { text }
    })

    expect(
      wrapper
        .text())
      .toMatch(text)
  })

  it('should emit event when button is clicked', () => {
    const wrapper = shallowMount(RecorderButton, {
      propsData: { text }
    })

    wrapper
      .find('button')
      .trigger('click')

    expect(
      wrapper
        .emitted('changeMode'))
      .toBeTruthy()
  })
})
