describe('Rozetka', ()=> {
    it('By', () => {
        cy.visit('https://rozetka.by/');
        cy.viewport(1920, 1080);
        cy.get(".header_form_search > .search-field").type('iphone 12');
        cy.contains("Поиск").click();
        cy.contains("Apple iPhone XS MAX 256GB Spase Gray").click();
        cy.contains("Аккаунт").click();
        cy.get("#menu-item-7902").click();  //он в уроке нажал купить но у меня нет такой кнопки тут, я жмакнул аккаунт и в всплывающем списке жмакнул мой аккаунт
    })
})