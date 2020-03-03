const blazePage = require("../pages/blazemeter")

describe("blaze page elements handle on the page", function(){

    it("get texts of all main links", function(){
        browser.url('https://www.blazemeter.com/');
        // blazePage.getTextForLi;
        // blazePage.useCasesElementsText;

        console.log('third link is : ',
                          blazePage.specifChildElement(3).getText());

        blazePage.getSpecificChildElementText(4); 
        
    })

    it("main heading displayed? ", function(){
       console.log( blazePage.mainHeader.isDisplayed());
    })

    it("main heading enabled? ", function(){
        console.log( blazePage.mainHeader.isEnabled());
     })

     it("main heading exists? ", function(){
        console.log( blazePage.mainHeader.isExisting());
     })

     it("main heading displyed in view port? ", function(){
        console.log( blazePage.mainHeader.isDisplayedInViewport());
     })

     it("jmeter is displeyd in view port ", function(){
        console.log( blazePage.jmeterLink.isDisplayedInViewport());
     })

     it("click on product link if displayed ", function(){
        blazePage.clickOnProductLink();
        browser.pause(5000);
    })




});
