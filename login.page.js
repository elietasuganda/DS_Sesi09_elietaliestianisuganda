const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {  
    // NOTE: elements collection
    get fieldUsername () { return $('#user-name');}
    get fieldPassword () { return $('#password');}
    get buttonLogin () { return $('#Login-button');}
    get errorLockedOutUser (){return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')}
    get ProblemUser () { return $('#Login-button')}
    get PerformanceGlitchUser () { return $('#Login-button')}
    get ErrorUser () { return $('#Login-button')}
    get VisualUser () { return $('#Login-button')}

    async login () {
        console.log (`USERNAME: ${process.env.USERNAME_STANDARD_USER}`)
        console.log (`PASSWORD: ${process.env.PASSWORD_SAUCEDEMO}`)

        await this.fieldUsername.setValue(process.env.USERNAME_STANDARD_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError (){
        expect(this.errorLockedOutUser).toBeDisplayed
    }

    async validateProblemUserError (){
        expect(this.errorProblemUser).toBeDisplayed
    }

    async validateProblemUserError (){
        expect(this.errorPerformanceGlitchUser).toBeDisplayed
    }

    async validateProblemUserError (){
        expect(this.errorErrorUser).toBeDisplayed
    }

    async validateProblemUserError (){
        expect(this.errorVisualUser).toBeDisplayed
    }

    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
