import Page from "./page";

class LoginPage extends Page {
  get btnAcceptAllCookies() {
    return $('//*[@id="CybotCookiebotDialogBodyButtonAccept"]');
  }
  get inputEmail() {
    return $('//input[@name="email"]');
  }
  get inputPassword() {
    return $('//input[@name="password"]');
  }
  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get logoutLink() {
    return $('//*[@id="root"]/div/nav/div/div[2]/div[2]/div[1]/div[2]/button');
  }

  async acceptAllCookies() {
    await (await this.btnAcceptAllCookies).click();
  }

  async login(email, password) {
    await (await this.inputEmail).setValue(email);
    await (await this.inputPassword).setValue(password);
    await (await this.btnSubmit).click();
  }

  async checkUserIsLogged() {
    await (await this.logoutLink).isDisplayed();
  }

  async logout() {
    browser.fullscreenWindow();
    await (await this.logoutLink).click();
  }
}

export default new LoginPage();
