/// <reference types="Cypress" />

const TAG_INPUT_SELECTOR = '[data-testid=tag-input]';
const TAG_SELECTOR = '[data-testid=tag]';
const addThreeTags = () => {
  cy.get(TAG_INPUT_SELECTOR)
    .type('one')
    .type('{enter}')
    .type('two')
    .type('{enter}')
    .type('three')
    .type('{enter}');
};

describe('Tags component', () => {
  beforeEach(() => {
    cy.visit('/products/add-product');
  });

  it('should render an input field', () => {
    cy.get(TAG_INPUT_SELECTOR).should('be.visible');
  });

  it('should generate a new tag if the user enters a new tag in the input field', () => {
    cy.get(TAG_INPUT_SELECTOR).type('I am a tag').type('{enter}');
    cy.get(TAG_SELECTOR).should('have.length', 1);
  });

  it('should generate three tags if the user adds thre words into the input field and hits enter every time', () => {
    addThreeTags();
    cy.get(TAG_SELECTOR).should('have.length', 3);
  });

  it('should select the first tag if users presses the right arrow key', () => {
    addThreeTags();
    cy.get(TAG_INPUT_SELECTOR).type('{rightarrow}');
    cy.get(TAG_SELECTOR)
      .first()
      .should('have.attr', 'data-selected', 'selected');
  });

  it('should remove the second tag if the left arrow key was hit twice and then backspace', () => {
    addThreeTags();
    cy.get(TAG_INPUT_SELECTOR).type('{leftarrow}{leftarrow}{backspace}');
    cy.get(TAG_SELECTOR).first().contains('ONE');
    cy.get(TAG_SELECTOR).last().contains('THREE');
  });
});
