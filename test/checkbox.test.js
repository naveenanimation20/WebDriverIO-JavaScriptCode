const internetPage = require("../pages/internetpage");

describe("handling checkboxes", function(){
    it("check page url", function(){
        browser.url("/");
        //expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/");
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/`);
    });
    it("should click checkbox", function(){
       browser.url("/");
        internetPage.clickOnLink(6);
        internetPage.h3Header.waitForDisplayed();
        internetPage.clickOnCheckBox(1);
        expect(internetPage.getCheckBoxElement(1).isSelected()).equals(true);
    });
    it("check checkbox page header", function(){
        browser.url("/");
        internetPage.clickOnLink(6);
        internetPage.h3Header.waitForDisplayed();
       const text = internetPage.h3Header.getText();
       expect(text).equals("Checkboxes");
    });
    it("check checkbox page url", function(){
        browser.url("/");
        internetPage.clickOnLink(6);
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`);
    });
});