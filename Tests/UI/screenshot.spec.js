/// <reference types="Cypress" />

describe('Open immoscout24', function() {
    it('Verify homepage', () => {
        cy.visit('web-int-00.immoscout24.ch')

        cy.matchImageSnapshot();
    })
})