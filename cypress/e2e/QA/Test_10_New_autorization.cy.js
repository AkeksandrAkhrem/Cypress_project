describe('Autorization', () => {

    const USER_EMAIL = 'pow1234@gmail.com'
    const PASSWORD = '666WorkBob999'

    it('Test Autorization', () => {

        cy.visit("https://unsplash.com/")
        //cy.contains("Log in").click() не срабатывает на том сайте хз почему
        
        cy.get(".W1Or3 > .J7FDr > .X2u6K")
        .should('be.visible')
        .click()  // отработал только с 3-мя локаторами и нашел через прицел
        
        cy.get('.m7plr').should('contain', 'Welcome back.')

        cy.get('input[type="email"]')
        .type(USER_EMAIL)
        .should('have.value', USER_EMAIL)

        cy.get('input[type="password"]')
        .type(PASSWORD)
        .should('have.value', PASSWORD)

        //cy.get('input[type="submit"]').click() - так же с сабмитом не отработал
        cy.get(".IF9eQ ").click()

    })
})