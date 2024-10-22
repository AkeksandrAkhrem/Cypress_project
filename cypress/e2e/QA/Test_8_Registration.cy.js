describe('Test Registration', () => {

    const USER_EMAIL = 'pow1234@gmail.com'
    const FIRST_NAME = 'Bob'
    const LAST_NAME = 'Work'
    const USERNAME = 'WorkBob'
    const PASSWORD = '666WorkBob999'

    it('Test registration positive', () => {

        cy.visit("https://unsplash.com/")

        cy.get(".W1Or3 > .J7FDr > .X2u6K")
            .should('be.visible')
            .click();

        cy.contains('Join')
            .should('be.visible')
            .click();

        cy.get('.kFxtp').should('contain', 'Join Unsplash')

        cy.get('input[type="email"]')
        .type(USER_EMAIL)
        .should('have.value', USER_EMAIL);

        cy.get('input[name="first_name"]')
        .type(FIRST_NAME)
        .should('have.value', FIRST_NAME);

        cy.get('input[name="last_name"]')
        .type(LAST_NAME)
        .should('have.value', LAST_NAME);

        cy.get('input[name="username"]')
        .type(USERNAME)
        .should('have.value', USERNAME);

        cy.get('input[name="password"]')
        .type(PASSWORD)
        .should('have.value', PASSWORD);

        cy.get('button[type="submit"]')
            .should('be.visible')
            .click();

    })
})