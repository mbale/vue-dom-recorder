/// <reference types='cypress' />

const {
  step, stepCssSelectorEdit, trackedElements, startButton,
  continueButton, restartButton, pauseButton
} = {
  step: '[data-cy=step]',
  stepCssSelectorEdit: '[data-cy=edit-css-selector]',
  trackedElements: '[data-cy=watched-element',
  startButton: '[data-cy=button-start]',
  continueButton: '[data-cy=button-continue]',
  restartButton: '[data-cy=button-restart]',
  pauseButton: '[data-cy=button-pause]'
}

describe('Interaction', () => {
  it('Should be able to visit site', () => {
    cy
      .visit('/')
  })

  it('Should be able to start recording', () => {
    cy
      .get(startButton)
      .click()
  })

  it('Tracked DOM elements should be presented as step if clicked', () => {
    cy
      .get(trackedElements)
      .click({
        multiple: true
      })
      .get(step)
  })

  it('Pushing recording button should pause recording', () => {
    cy
      .get(pauseButton)
      .click()
      .get(restartButton)
      .get(continueButton)
      .get(trackedElements)
      .click({
        multiple: true
      })
      .should('have.length', 6)
  })

  it('CSS selectors should be editable in paused mode', () => {
    cy
      .get(stepCssSelectorEdit)
      .first()
      .type('{selectall}changedText')
  })

  it('In continue state we should continuously track all clicked elements', () => {
    cy
      .get(continueButton)
      .click()
      .get(trackedElements)
      .click({
        multiple: true
      })
      .get(step)
      .should('have.length', 12)
  })

  it('After saving we should forget all of the tracked elements and start a new session', () => {
    cy
      .get(pauseButton)
      .click()
      .get(restartButton)
      .click()
      .get(step)
      .should('have.length', 0)
  })
})
