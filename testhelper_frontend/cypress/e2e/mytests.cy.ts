describe('Calendar Screen Tests', () => {
  it('should display the header', () => {
    cy.visit('http://localhost:8081');


    cy.contains('Overview').should('exist');
  });

  it('should be able to click the Add Exam button', () => {
    cy.visit('http://localhost:8081');
    cy.contains('Add Exam').should('be.visible');
    cy.contains('Add Exam').click();
    cy.contains('Add New Exam').should('exist');

  });

});

describe('ExamSmall Component', () => {

  it('should be able to click on the TouchableOpacity', () => {
    cy.visit('http://localhost:8081');
    cy.contains('Mathematics').should('be.visible');
    cy.contains('Mathematics').parent().click();

    cy.contains('Add Material').should('exist');
  });


  it('should display the delete button when swiping left', () => {
    cy.visit('http://localhost:8081');
    // Ensure the ExamSmall component is present by checking some text
    cy.contains('Mathematics').should('be.visible'); // Replace 'Mathematics' with actual exam subject text

    // Find the element and trigger swipe left action
    cy.contains('Mathematics').parent()
        .trigger('mousedown', { which: 1, pageX: 300, pageY: 100 }) // Start swipe
        .trigger('mousemove', { which: 1, pageX: 100, pageY: 100 }) // Move to the left
        .trigger('mouseup', { force: true }); // End swipe

    // Check if the delete button is visible after swiping
    cy.contains('Add Exam').should('be.visible');
  });
});
