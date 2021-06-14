import App from "../pageobjects/App";
import LoginPage from "../pageobjects/login.page";
import SettingsPage from "../pageobjects/settings.page";

describe("Save User settings", () => {
  it("Should login into Deel app successfully", async () => {
    await App.openLoginPage();
    var credentials = App.getCredentialsFromArguments();
    await LoginPage.login(credentials.email, credentials.password);
    await LoginPage.checkUserIsLogged();
  });

  it("Should Accept All Cookies", async () => {
    await LoginPage.acceptAllCookies();
  });

  it("Should select Contractor Type", async () => {
    await SettingsPage.selectTypeContractorIndividual();
  });

  it("should save User Settings", async () => {
    var mySettings = {
      citizenship: "Venezuela",
      taxCountry: "Ecuador",
      legalStatus: "Individual",
      dateOfBirth: "03/27/1994",
      phoneNumber: "0999795423",
      street: "Calle Rafael Fajardo",
      city: "Cuenca",
      zip: "010107",
      country: "Ecuador",
    };

    await SettingsPage.updateSettings(mySettings);
    await SettingsPage.seeSuccessMessage();
  });
});
