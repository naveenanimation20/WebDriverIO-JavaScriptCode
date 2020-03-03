const loginPage = require("../pages/loginpage");

describe("handle application login", function(){

    it("enter username", function(){
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith', loginPage.username.getValue());
    });
    it("enter password", function(){
        loginPage.enterPassword('SuperSecretPassword');
        assert.equal('SuperSecretPassword', loginPage.password.getValue());
    });
    it("click login button", function(){
        loginPage.clickOnLogin();
    });
    it("should clear username value", function(){
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('', loginPage.username.getValue());
    });

    it("move to element", function(){
        browser.url("http://mrbool.com/how-to-create-menu-with-submenu-using-css-html/26146");
        const parent = $('.menulink');
        parent.moveTo();
       // browser.pause(5000);
        const child = $('=COURSES');
        child.click();
    });

    



});
