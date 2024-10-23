describe('Test 6 Action With Elements', () => {

    it('type', () => {

        cy.visit('https://unsplash.com/login?referrer=%2F')
            .get('input[type="email"]')
            .type('ggg123@hmail.com')
    })

    it('focus', () => {

        cy.visit('https://unsplash.com/login?referrer=%2F')  //очищается поле и подсвечивается зеленым
            .get('input[type="email"]')
            .focus()
    })

    it('blur', () => {

        cy.visit('https://unsplash.com/login?referrer=%2F')    // подсвечивает поле с ошибкой
            .get('input[type="email"]')                        // сначала фокус а потом блур иначе ошибка
            .focus()
            .blur()
    })

    it('clear', () => {

        cy.visit('https://unsplash.com/login?referrer=%2F')   //вписали что-то подождали и потом очистили
            .get('input[type="email"]') 
            .type(999)
            .wait(3000)
            .clear()
    })

    it('submit', () => {

        cy.visit('https://unsplash.com/login?referrer=%2F')  // сабмитить можно только формы
            .get('form[class="XIAAM"]')                      // пробовал с атрибутом method="post" нашел 2 формы и по этому упал в ошибку, через класс получилось
            .submit()
    })

    it('click', () => {

        cy.visit('https://unsplash.com/')
        cy.get(".W1Or3 > .J7FDr > .X2u6K")
        .click()
    })

    it('rightclick', () => {

        cy.visit('https://example.cypress.io/commands/actions')  // нжатие правой кнопкой мыши
        cy.get(".rightclick-action-div")
        .rightclick()
    })

    it('dblclick', () => {

        cy.visit('https://example.cypress.io/commands/actions')  // двойное нажатие
        cy.get(".action-div")
        .dblclick()
    })

    it('check', () => {

        cy.visit('https://example.cypress.io/commands/actions')  
        cy.get('input[type="checkbox"]').not('[disabled]')   // применим только к элементам которое имеют тип радио или чекбокс
        .check()  
    })

    it('uncheck', () => {

        cy.visit('https://example.cypress.io/commands/actions')  // противоположное действие чеку (убрать элемент)
        cy.get('input[type="checkbox"]')
        .check({ force: true })
        .wait(3000)
        .uncheck({ force: true })
    })

    it('select', () => {   // выбирает из списка

        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-select')
        .should('have.value', '--Select a fruit--')
        .select('apples')
    })

    it('scrollIntoVew', () => { 

        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#scroll-horizontal button')
        .scrollIntoView()
    })

    it('scrollTo', () => { 

        cy.visit('https://example.cypress.io/commands/actions')
        .wait(3000)
        .scrollTo(0, 1000)
    })

    it.only('trigger', () => { 

        cy.visit('https://www.plerdy.com/ru/blog/top-50-web-design-inspiration-websites/')
        .contains('Продукты')
        .wait(5000)
        .trigger('mouseover')
        .wait(5000)
    })
})