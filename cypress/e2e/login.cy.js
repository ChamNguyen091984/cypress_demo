import myAccountPage from "../pages/myAccountPage";

describe('My Account - Login', () => {
  beforeEach('Open My Account Page',()=>{
    myAccountPage.visit();
  });

//test_auto_02@gmail.com
  //test_auto_02
  it('1. Login with valid username and password', () => {
    myAccountPage.loginForm.login("test_auto_02@gmail.com","test_auto_02")
    myAccountPage.myAccountNavigation.shouldBeVisible();
  });

  it('2. Login with incorrect username and incorrect password', () => {
    let expectedMessage = 'Error: The username incorrectUS is not registered on this site. If you are unsure of your username, try your email address instead.';
    myAccountPage.loginForm.login("incorrectUS","Test01@gmail.com")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('3. Login with correct username and empty password',()=>{
    let expectedMessage = 'Error: Password is required.';
    myAccountPage.loginForm.login("test_auto_02@gmail.com","")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('4. Login with empty username and valid password',()=>{
    let expectedMessage = 'Error: Username is required.';
    myAccountPage.loginForm.login("","test_auto_02")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('5. Login with empty username and empty password',()=>{
    let expectedMessage = 'Error: Username is required.';
    myAccountPage.loginForm.login("","")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('6. Login password should be mask',()=>{
    myAccountPage.loginForm.txtPassword().type("test_auto_02");
    myAccountPage.loginForm.txtPassword().should('not.contain.text','test_auto_02')
  });

  it('7. Login-Handles case sensitive',()=>{
    let expectedMessage = 'Error: The password you entered for the username Test01@gmail.com is incorrect. Lost your password?';
    myAccountPage.loginForm.login("Test01@gmail.com","Test01@gmail.com01")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });
})
