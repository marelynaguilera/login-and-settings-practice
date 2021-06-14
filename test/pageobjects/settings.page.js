import Page from "./page";

class SettingsPage extends Page {
  get inputSearchCitizen() {
    return $('//*[@id="react-select-2-input"]');
  }
  get inputSearchTaxCountry() {
    return $('//*[@id="react-select-3-input"]');
  }
  get inputSearchLegalStatus() {
    return $('//*[@id="react-select-4-input"]');
  }
  get inputDateOfBirth() {
    return $('//input[@name="birthDate"]');
  }
  get inputPhoneNumber() {
    return $('//input[@name="phone"]');
  }
  get inputStreet() {
    return $('//input[@name="street"]');
  }
  get inputCity() {
    return $('//input[@name="city"]');
  }
  get inputZip() {
    return $('//input[@name="zip"]');
  }
  get inputSearchResidenceCountry() {
    return $('//*[@id="react-select-8-input"]');
  }
  get btnSubmit() {
    return $('//*[@id="root"]/div/div[2]/div/div/div[3]/form/div[2]/button');
  }
  get linkIamIndividual() {
    return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/button');
  }
  get btnNext() {
    return $('//*[@id="root"]/div/div[2]/div/div/div/div[3]/a/button');
  }
  get h1SuccessMessage() {
    return $('//*[@id="root"]/div/div[4]/div/div[1]/div/div/div/div[1]/h1');
  }

  async selectTypeContractorIndividual() {
    await (await this.linkIamIndividual).click();
    await (await this.btnNext).click();
  }

  async updateSettings(mySettings) {
    await (await this.inputSearchCitizen).setValue(mySettings.citizenship);
    browser.keys("Enter");
    await (await this.inputSearchTaxCountry).setValue(mySettings.taxCountry);
    browser.keys("Enter");
    await (await this.inputSearchLegalStatus).setValue(mySettings.legalStatus);
    browser.keys("Enter");
    await (await this.inputDateOfBirth).setValue(mySettings.dateOfBirth);
    await (await this.inputPhoneNumber).setValue(mySettings.phoneNumber);
    await (await this.inputStreet).setValue(mySettings.street);
    await (await this.inputCity).setValue(mySettings.city);
    await (await this.inputZip).setValue(mySettings.zip);
    await (await this.inputSearchResidenceCountry).setValue(mySettings.country);
    browser.keys("Enter");
    await (await this.btnSubmit).click();
  }

  async seeSuccessMessage() {
    await expect(await this.h1SuccessMessage).toHaveTextContaining("Good");
  }
}

export default new SettingsPage();
