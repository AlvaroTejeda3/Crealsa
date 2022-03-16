

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Crealsa extends Page {
    /**
     * define selectors using getter methods
     */
    get conocenos () {return $('#DesktopNav > li:nth-child(1) > a > div > span');}
    get servicios_financieros () {return $('#servicesDropDown');}
    get factoring () {return $('#servicesDropDownMenu > div > a:nth-child(1)');}
    get acceder () {return $('//*[@id="Landing"]/div[1]/div/div/div/div/div[3]/a[1]');}
    get link () {return $('=Acceder');}
    get inputUsername () {return $('#root > div.display-flex.flex > div > div > div > form > div:nth-child(2) > input');}
    get inputPassword () {return $('#root > div.display-flex.flex > div > div > div > form > div:nth-child(3) > input');}
    get btnSubmit () {return $('#root > div.display-flex.flex > div > div > div > form > button');}
    get error_message () {return $('=Credenciales inválidos');}
   
    /**
     * a method to encapsule automation code to interact with the page
     */
    async go_to_page () {
        await browser.url('https://www.crealsa.com/');
    }
    async select_conocenos () {
        await this.conocenos.click();
    }
    async select_servicios_financieros () {
        await this.servicios_financieros.click();
    }
    async select_factoring () {
        await this.factoring.click();
    }
    async select_acceder () {
        await this.link.click();
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async error_message_exits () {
        await this.error_message.isDisplayed()
    }

    
    
}

module.exports = new Crealsa();
