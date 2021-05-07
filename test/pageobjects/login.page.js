import Page from './page';

class LoginPage extends Page {
    
    get inputEmail () { return $('//input[@name="email"]') }
    get inputPassword () { return $('//input[@name="password"]') }
    get btnSubmit () { return $('button[type="submit"]') }
    get logoutLink() { return $('//*[@id="root"]/div/div[1]/h6') }
   
    login (email, password) {
        const inputEmail = this.inputEmail
        this.inputEmail.setValue(email)
        const inputPassword = this.inputPassword
        inputPassword.setValue(password)
        const btnSubmit = this.btnSubmit
        btnSubmit.click()
    }

    checkUserIsLogged(){
        const logoutLink = this.logoutLink
        logoutLink.isDisplayed()
    }

    logout(){
        const logoutLink = this.logoutLink
        logoutLink.click()
    }

}

export default new LoginPage();
