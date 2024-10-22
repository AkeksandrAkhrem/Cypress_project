describe('Test 5 Udemy', () => {

    it('Assertions Test Should and Expect', () => {

        cy.visit('https://unsplash.com/login?referrer=%2F');

        cy.get('input[type="email"]')
        .type('100')
        .should('have.value', 100)
        .and('be.visible');           //не явные проверки c SHOULD
    })

    it('Expect', () => {

        cy.visit('https://unsplash.com/login?referrer=%2F');

        cy.get('input[type="email"]')
        .type('100').then( input=> {
            expect (input).to.have.value(100)
        })
    })

    it('Expect', () => {

        cy.visit('https://bnb.by/');
        // cy.scrollTo(0, 3100)
        cy.get('#bx_651765591_200355')
        .should('be.class', 'profitable-offer__item swiper-slide swiper-slide-active')  // можно и have и be проверка что в таком-то элементе есть такой-то парамет
    })

    it.only('check visible archive link', () => {

        cy.visit('https://unsplash.com/');
        cy.contains('Explore').trigger('mouseover').wait(5000) //наведение мыши mouseover, не хочет работать на ансплэщ
        .get('.kuv0i')
        // .should('be.visible') // не всплывает окно почему-то по этому не видим
    })

    it('Expect', () => {

        cy.visit('https://bnb.by/');
        cy.get('#bx_651765591_200355')
        .should('have.attr', 'class')   // имеет такой-то атрибут
    })

    it('Expect', () => {

        cy.visit('https://unsplash.com/');   //проверили что аттрибут type совпадат со значением button
        cy.contains('Submit an image')
        .should('have.attr', 'type')
        .and('match', /button/)
    })

    it('Expect', () => {

        cy.visit('https://unsplash.com/');   //проверили корректо ли отображается URL
        cy.url()
        .should('eq', 'https://unsplash.com/')   //eq - эквивалетный
    })
}) 