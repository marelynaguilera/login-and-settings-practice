import App from '../pageobjects/App'
import LoginPage from  '../pageobjects/login.page'

describe('Login into Deel app successfully', () => {
    it('should login with valid credentials', () => {
        App.openLoginPage()
        var credentials = App.getCredentialsFromArguments()
        LoginPage.login(credentials.email, credentials.password);
        LoginPage.checkUserIsLogged()
    });

    it('should logout successfully', () => {
        App.openLoginPage();
        var credentials = App.getCredentialsFromArguments()
        LoginPage.login(credentials.email, credentials.password)
        LoginPage.checkUserIsLogged()
        LoginPage.logout()
    });

}); 

