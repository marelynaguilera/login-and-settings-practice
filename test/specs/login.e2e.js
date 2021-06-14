import App from "../pageobjects/App";
import LoginPage from "../pageobjects/login.page";

describe("Login into Deel app successfully", () => {
  it("should login with valid credentials", async () => {
    await App.openLoginPage();
    var credentials = App.getCredentialsFromArguments();
    await LoginPage.login(credentials.email, credentials.password);
    await LoginPage.checkUserIsLogged();
  });

  it("should logout successfully", async () => {
    await App.openLoginPage();
    var credentials = App.getCredentialsFromArguments();
    await LoginPage.login(credentials.email, credentials.password);
    await LoginPage.checkUserIsLogged();
    await LoginPage.acceptAllCookies();
    await LoginPage.logout();
  });
});
