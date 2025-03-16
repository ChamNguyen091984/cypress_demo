
class MyAccountPage {
    visit(){
        cy.visit('/my-account');
    };

    loginForm ={
        txtUsername:() => cy.get('input#username'),
        txtPassword:() => cy.get('input#password'),
        btnLogin:() => cy.get('input[value="Login"]'),
        login:(username,password) =>{
            if (username !== ''){
                this.loginForm.txtUsername().type(username);
            }

            if (password !== ''){
                this.loginForm.txtPassword().type(password);
            }

            this.loginForm.btnLogin().click({force: true});

        },
        shouldBeDisplayed:()=>{
            this.loginForm.btnLogin().should('be.visible');
            cy.contains("Logout").should("not.exist");
        }
    };

    errorWarning = {
        textError:() => cy.get('ul.woocommerce-error li'),
        shouldHaveMessage:(message)=>{
            this.errorWarning.textError().should('have.text', message);
        },
    }

    myAccountNavigation = {
        shouldBeVisible:() => cy.get('nav.woocommerce-MyAccount-navigation').should('be.visible'),
    };

}

module.exports = new MyAccountPage();
