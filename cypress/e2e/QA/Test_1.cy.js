describe("Log in", function() {
    it("Sing in", function() {
        cy.visit("https://unsplash.com/")
        //cy.contains("Log in").click() не срабатывает на том сайте хз почему
        cy.get(".W1Or3 > .J7FDr > .X2u6K").click()  // отработал только с 3-мя локаторами и нашел через прицел
        cy.get('input[type="email"]').type('ggg123@hmail.com')
        cy.get('input[type="password"]').type('123456qwerty')
        //cy.get('input[type="submit"]').click() - так же с сабмитом не отработал
        cy.get(".IF9eQ ").click()
    }) 
})