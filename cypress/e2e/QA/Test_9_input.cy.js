describe('Test YouTube Input', () => {

    it('Test YouTube', () => {

        cy.visit('https://www.youtube.com/');
        cy.viewport(1920, 1080);
        
        cy.get('input[type="text"]')
        .type('Benny Benassi - Time{enter}')
        .should('have.value', 'Benny Benassi - Time');

        cy.get('img[src="https://i.ytimg.com/vi/qcXM_M0dxWU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcoH29MsYQbsgVxs2pnBhaBBXhdA"]')
        .should('be.visible')
        .click();

        // cy.get('.style-scope ytd-watch-metadata').should('be.visible')
        cy.get('.style-scope ytd-watch-metadata').should('contain', 'Benny Benassi - Time HQ')
    })
})