describe("My First E2E Test", () => {
  it("Should add an item to the cart", () => {
    cy.visit('http://localhost:3000/');
    cy.get('#app').click();
    cy.get('#showlogin').click();
    cy.get('#loginbtn').click();
    cy.get('#addtocart_1').click();
    cy.get('#addtocart_2').click();
    cy.get('#addtocart_4').click();
    cy.get('a:nth-child(2)').click();
    cy.get('#showcart').click();
    cy.get('div').should('have.class', 'text-right font-bold');
    cy.get('#grand_total').should('contain.text', '$');
  });
});