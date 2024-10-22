describe('Test 3 Contains', () => {

    it('Contains', () => {

        cy.visit('https://unsplash.com/')
        cy.contains('a', 'EXPLORE', {matchCase: false})
    })
})