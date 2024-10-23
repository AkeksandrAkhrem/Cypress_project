/// <reference types="cypress" />


describe('Test udemy 2', () => {

    it('Using Get with Find and eq', () => {

        cy.visit('https://unsplash.com/')
        // cy.get('tbody').find('td').eq(8)
        // cy.get('.sc-kqGoIF > :nth-child(1) > :nth-child(8)')  // не работает на данном сайте 
        cy.get('div').find('ul').find('li').find('a').eq(2) // работате прошли по вложенностям

    })

})