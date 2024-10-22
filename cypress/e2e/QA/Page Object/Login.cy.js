class Login {

    btnLogin(){
        return cy.get(".W1Or3 > .J7FDr > .X2u6K")
    }

    email(){
        return cy.get('input[type="email"]')
    }

    password(){
        return cy.get('input[type="password"]')
    }

    clickBtnLogin(){
        return cy.get(".IF9eQ ")
    }
}

export default Login