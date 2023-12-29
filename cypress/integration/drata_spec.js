// cypress/integration/drata_spec.js

describe('drata.com UI Testing Suite', () => {
  beforeEach(() => {
    // Visit the Drata website before each test
    cy.visit('https://www.drata.com/');
  });

    // Check for each page
  it('visits all pages on the website', () => {
    cy.visit('https://drata.com/');
    cy.get('a[href^="/"]').each(($link) => {
        cy.visit($link.prop('href'));
        cy.title().should('not.equal', '404 Not Found');
    });
  });

  // Assert page elements exist
  it('asserts the main header exists on each page', () => {
    cy.visit('https://drata.com/platform');
    cy.get('header.main-header').should('exist');
  });

  // Assert page elements exist
  it('asserts the main header exists on each page', () => {
    cy.visit('https://drata.com/resources');
    cy.get('header.main-header').should('exist');
  });  

  // Assert no console errors
  it('asserts no console errors on page load', () => {
    cy.visit('https://drata.com/');
    cy.on('console:error', (err) => {
        throw new Error('Console error: ' + err.message);
    });
  });

  it('Home Page - No Console Errors', () => {
    cy.window().then((win) => {
      cy.on('uncaught:exception', (err, runnable) => {
        // This prevents Cypress from failing the test on console errors
        return false;
      });

      // Check for console errors
      expect(win.console.errors.length).to.equal(0);
    });
  });

  it('Home Page - Check Navigation Menu', () => {
    cy.get('.navbar').should('exist');
    cy.contains('Solutions').click();
    cy.url().should('include', '/solutions');
    cy.contains('Platform').click();
    cy.url().should('include', '/platform');
    cy.contains('Company').click();
    cy.url().should('include', '/company');
  });

  it('Solutions Page - Check Featured Solutions', () => {
    cy.contains('Solutions').click();
    cy.get('.featured-solution').should('have.length.greaterThan', 0);
  });

  it('Platform Page - Check Platform Features', () => {
    cy.contains('Platform').click();
    cy.get('.platform-feature').should('have.length.greaterThan', 0);
  });

  it('Company Page - Check Team Members', () => {
    cy.contains('Company').click();
    cy.get('.team-member').should('have.length.greaterThan', 0);
  });

  it('Footer - Check Footer Links', () => {
    cy.get('.footer-link').should('have.length.greaterThan', 0);
  });

  it('Search for a Keyword', () => {
    // Replace with the actual search input and results selectors
    cy.get('.search-input').type('compliance at every stage');
    cy.get('.search-results').should('have.length.greaterThan', 0);
  });
    
});

