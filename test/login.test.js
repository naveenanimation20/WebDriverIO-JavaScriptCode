const loginPage = require("../pages/loginpage");
const loginData = require("../testdata/logindata");

describe("handle application login", function(){

    it("enter username", function(){
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName(loginData.username);
        assert.equal(loginData.username, loginPage.username.getValue());
    });
    it("enter password", function(){
        loginPage.enterPassword(loginData.password);
        assert.equal(loginData.password, loginPage.password.getValue());
    });
    it("click login button", function(){
        loginPage.clickOnLogin();
    });
    it.skip("should clear username value", function(){
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('', loginPage.username.getValue());
    });

    it.skip("move to element", function(){
        browser.url("http://mrbool.com/how-to-create-menu-with-submenu-using-css-html/26146");
        const parent = $('.menulink');
        parent.moveTo();
       // browser.pause(5000);
        const child = $('=COURSES');
        child.click();
    });

    



});
