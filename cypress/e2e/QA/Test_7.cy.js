describe('Test Grifer', function() {
    it('test grinfer web', () => {
        cy.visit('https://grinder.pro/')
        cy.viewport(1920, 1080)
        cy.get('button[class="catalog-menu__toggle"]').should('be.visible').click()
        cy.get('a[href="catalog/grinderyi-shlifovalnyie-stanki/"]').should('be.visible').click()   // так удобнее быстрее и больше нравится
        //cy.get('a[href="catalog/grinderyi-shlifovalnyie-stanki/"]').should('be.visible').contains('Гриндеры (Шлифовальные станки)').click()  - так длиннее немного
    })
})