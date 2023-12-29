
// Check drata site is accessible with no errors
describe('Drata UI Testing Suite', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {})
    // Visit the drata website before each test
    cy.visit({
      url: "https://drata.com/",
      headers: {
        "Accept" : "*/*",
        "User-Agent": "Chrome/120.0.6099"
              }
          })
        })
  });

  // Check for each page opens up on drata.com
  it('visits all pages on the website', () => {
    cy.on('uncaught:exception', (err, runnable) => {})
    cy.visit({
      url: "https://drata.com/",
      headers: {
              "Accept" : "application/html, application/json, */*",
              "User-Agent": "Chrome/120.0.6099"
              }
      })
    cy.get('a[href^="/"]').each(($link) => {
        cy.visit($link.prop('href'));
        cy.title().should('not.equal', '404 Not Found');
    });
})

  // Check for specific element on drata.com platform page.
  it('Find specific button ', () => {
    cy.on('uncaught:exception', (err, runnable) => {})
    cy.visit({
      url: "https://drata.com/platform",
      headers: {
              "Accept" : "application/html, application/json, */*",
              "User-Agent": "Chrome/120.0.6099"
              }
      })
    // Assert that the element with button id exists
    cy.get('c6887503-47a7-45d1-90e0-d76c228722e0').should('exist'); 
})
