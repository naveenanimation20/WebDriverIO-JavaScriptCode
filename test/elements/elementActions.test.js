const blazePage = require("/Users/NaveenKhunteta/Documents/WebDriver-IO-Scripts/pages/blazemeter.js")


describe("blaze page elements actions", function () {
    

    it("check page url", function () {
        browser.url("https://www.blazemeter.com/");
        expect(browser.getUrl()).equals("https://www.blazemeter.com/");
    });

    it("verify main header text", function () {
        browser.url("https://www.blazemeter.com/");
        expect(blazePage.productLink.getText()).equals("PRODUCT");
    });

    it("click on product link", function () {
        browser.url("https://www.blazemeter.com/");
        blazePage.productLink.click();
        browser.url("https://www.blazemeter.com/");
        blazePage.clickOnProductLink();
    })
});


