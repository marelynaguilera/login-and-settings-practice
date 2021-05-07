import App from '../pageobjects/App'
import LoginPage from  '../pageobjects/login.page'
import SettingsPage from  '../pageobjects/settings.page'


describe('Save User settings', () => {
    
    it('Should login into Deel app successfully', () => {
        App.openLoginPage();
        var credentials = App.getCredentialsFromArguments()
        LoginPage.login(credentials.email, credentials.password);
        LoginPage.checkUserIsLogged();
    });

    
    it('Should Accept All Cookies', () => {
        SettingsPage.acceptAllCookies()
    });
    
    
    it('Should select Contractor Type', () => {
        SettingsPage.selectTypeContractorIndividual()
    });
    
    it('should save User Settings', () => {
        var mySettings = {
            citizenship: 'Venezuela',
            taxCountry: 'Ecuador',
            legalStatus: 'Individual',
            dateOfBirth: '03/27/1984',
            phoneNumber: '0999795423',
            street: 'Calle Rafael Fajardo',
            city: 'Cuenca',
            zip:'010107',
            country: 'Ecuador'
        };
        
        SettingsPage.updateSettings(mySettings)
        SettingsPage.seeSuccessMessage()
    });
    
}); 

