class LoginPage{

    get username() { return $('#username')}
    get password() { return $('#password')}
    get loginBtn() { return $('button')}

    enterUserName(text){
        this.username.waitForDisplayed();
        this.username.setValue(text);
    }
    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }
    clickOnLogin(){
        this.loginBtn.waitForDisplayed();
        this.loginBtn.click();
    }
}

module.exports = new LoginPage();