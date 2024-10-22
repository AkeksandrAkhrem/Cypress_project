describe ('Scrolling', function () {
    it('scroll to catousel', () => {
        cy.visit("https://unsplash.com/")
        cy.viewport(1920, 1080)
        cy.get('[data-testid="nav-bar-search-form-input"]').type('Car{enter}')
        cy.contains("Car").should('have.text', 'Car')
        cy.scrollTo(0, 1000)
        cy.get('[data-masonryposition="6"] > ._cnA1 > :nth-child(1) > .jWMSo > .JM3zT > .zNNw1 > .wdUrX > [data-testid="photo-grid-masonry-img"]').click()
    })
})