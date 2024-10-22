import Login from './Page Object/Login.cy'

const email = 'ggg123@hmail.com'
const password = '123456qwerty'

describe('Assertion', function() {

    const login = new Login()

    it('Assert Web Test', () => {
        cy.visit("https://unsplash.com/");
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');

        login.btnLogin()
        .should('be.visible')
        .click();

        login.email()
        .type(`${email}`)
        .should('have.value', 'ggg123@hmail.com');

        login.password()
        .type(`${password}`)
        .should('have.value', '123456qwerty');

        login.clickBtnLogin()
        .should('be.visible')
        .click();

        cy.contains('Invalid email or password.')
        .should('be.visible');
    })
})