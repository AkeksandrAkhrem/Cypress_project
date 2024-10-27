/// <reference types="cypress" />

describe('Test 1 Udemy', () => {

    it('By ID', () => {

        cy.visit('https://vk.com/');
        cy.get('#index_email')

    })

    it('By Class', () => {

        cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
        cy.get('.searchBox_H2mL')

    })

    it('By Tag', () => {

        cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
        cy.get('nav')

    })

    it('By Tag Value', () => {

        cy.visit('https://vk.com/');
        cy.get('[name="login"]')

    })

    it('By Dofferent Tag', () => {

        cy.visit('https://vk.com/');
        cy.get('[type="text"] [name="login"]')  //не верный синтксис 

    })

    it('By Dofferent Tag', () => {

        cy.visit('https://vk.com/');
        cy.get('button[class="FlatButton"] [type="button"]')  //не верный синтксис 

    })

    it('By Dofferent Tag', () => {

        cy.visit('https://vk.com/');
        cy.get('.FlatButton--positive')  //через прицел, все ок


    })

    it.only('snapshot', () => {

        cy.visit('https://vk.com/');
        cy.wait(3000).document().toMutchImageSnapshot()


    })
})