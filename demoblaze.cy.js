/// <reference types="cypress" />

describe('Demoblaze', () => {
  const user = {
    username: 'testuser133',
    password: 'Testuser133'
  }

  beforeEach(() => {
    cy.visit('/');
  });

  it('should sign up a user', () => {
    cy.get('#signin2')
      .click();
    cy.get('#sign-username')
      .type(user.username);
    cy.get('#sign-password')
      .type(user.password);
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click();
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Sign up successful.`);
      });
  });

  it('should log in a user and add Samsung phone to the cart', () => {
    cy.get('#login2')
      .click();
    cy.get('#loginusername')
      .wait(1000)
      .type(user.username);
    cy.get('#loginpassword')
      .wait(1000)
      .type(user.password);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click();
      cy.get('#nameofuser')
        .should('contain', user.username);
      
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
        .click();
      cy.get('.col-sm-12 > .btn')
        .click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal(`Product added.`);
      });
  });
});
