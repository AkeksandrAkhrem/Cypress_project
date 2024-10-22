describe('Assertion', function() {
    it('Assert Web Test', () => {
        cy.visit("https://unsplash.com/");
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');

        cy.get(".W1Or3 > .J7FDr > .X2u6K")
        .should('be.visible')
        .click();

        cy.get('input[type="email"]')
        .type('ggg123@hmail.com')
        .should('have.value', 'ggg123@hmail.com');

        cy.get('input[type="password"]')
        .type('123456qwerty')
        .should('have.value', '123456qwerty');

        cy.get(".IF9eQ ")
        .should('be.visible')
        .click();

        cy.contains('Invalid email or password.')
        .should('be.visible');
    })
})