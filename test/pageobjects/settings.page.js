import Page from './page';

class SettingsPage extends Page {
    
    get btnAcceptAllCookies(){ return $('//*[@id="CybotCookiebotDialogBodyButtonAccept"]') }
    get inputSearchCitizen() { return $('//*[@id="react-select-2-input"]')}
    get inputSearchTaxCountry() { return $('//*[@id="react-select-3-input"]')}
    get inputSearchLegalStatus() { return $('//*[@id="react-select-4-input"]')}
    get inputDateOfBirth () { return $('//input[@name="birthDate"]') }
    get inputPhoneNumber () { return $('//input[@name="phone"]') }
    get inputStreet() { return $('//input[@name="street"]') }
    get inputCity() { return $('//input[@name="city"]') }
    get inputZip() { return $('//input[@name="zip"]') }
    get inputSearchResidenceCountry() { return $('//*[@id="react-select-8-input"]')}
    get btnSubmit () { return $('//*[@id="root"]/div/div[2]/div/div/div[3]/form/div[2]/button') }
    get linkIamIndividual(){ return $('//*[@id="root"]/div/div[2]/div/div/div/div[2]/button')  }
    get btnNext(){ return $('//*[@id="root"]/div/div[2]/div/div/div/div[3]/a/button') }
    get h1SuccessMessage() { return $('//*[@id="root"]/div/div[4]/div/div[1]/div/div/div/div[1]/h1') }
        
    acceptAllCookies(){
        const btnAcceptAllCookies = this.btnAcceptAllCookies
        btnAcceptAllCookies.click()
    }
    
    selectTypeContractorIndividual(){
        const linkIamIndividual = this.linkIamIndividual
        linkIamIndividual.click()
        const btnNext = this.btnNext
        btnNext.click()
    }

    updateSettings (mySettings) {
        
        const inputSearchCitizen = this.inputSearchCitizen
        inputSearchCitizen.setValue(mySettings.citizenship)
        browser.keys('Enter')
        const inputSearchTaxCountry = this.inputSearchTaxCountry
        inputSearchTaxCountry.setValue(mySettings.taxCountry)
        browser.keys('Enter')
        const inputSearchLegalStatus = this.inputSearchLegalStatus
        inputSearchLegalStatus.setValue(mySettings.legalStatus)
        browser.keys('Enter')
        const inputDateOfBirth = this.inputDateOfBirth
        inputDateOfBirth.setValue(mySettings.dateOfBirth)
        const inputPhoneNumber = this.inputPhoneNumber
        inputPhoneNumber.setValue(mySettings.phoneNumber)
        const inputStreet = this.inputStreet
        inputStreet.setValue(mySettings.street)
        const inputCity = this.inputCity
        inputCity.setValue(mySettings.city)
        const inputZip = this.inputZip
        inputZip.setValue(mySettings.zip)
        const inputSearchResidenceCountry = this.inputSearchResidenceCountry
        inputSearchResidenceCountry.setValue(mySettings.country)
        browser.keys('Enter')
        const btnSubmit = this.btnSubmit
        btnSubmit.click()
    }

    seeSuccessMessage(){
        const h1SuccessMessage = this.h1SuccessMessage
        expect(h1SuccessMessage).toHaveTextContaining('Good evening,')
    }

}

export default new SettingsPage();
