const spicejetPage = require("../pages/actions.page")


describe("page actions Features", function(){

    it("move to element", function(){
        browser.url("https://www.spicejet.com/");
        spicejetPage.moveToElement(spicejetPage.loginSignUpLink);
        spicejetPage.moveToElement(spicejetPage.spiceClubMem);
        spicejetPage.clickElement(spicejetPage.memberLogin);
        browser.pause(3000);
    });

    it("KEYS action perform Tab", function(){
        browser.url("http://the-internet.herokuapp.com/key_presses?");
        spicejetPage.enterSearch("Tab");
        const text = spicejetPage.getResultLabelText();
        console.log(text);
        assert.equal("You entered: TAB", text);
        browser.pause(3000);
    });

    // it("KEYS action perform Shift", function(){
    //     browser.url("http://the-internet.herokuapp.com/key_presses?");
    //     spicejetPage.enterSearch("Shift");
    //     const text = spicejetPage.getResultLabelText();
    //     console.log(text);
    //     assert.equal("You entered: SHIFT", text);
    //     browser.pause(3000);
    // });

    // it("KEYS action perform F1", function(){
    //     browser.url("http://the-internet.herokuapp.com/key_presses?");
    //     spicejetPage.enterSearch("F1");
    //     const text = spicejetPage.getResultLabelText();
    //     console.log(text);
    //     assert.equal("You entered: F1", text);
    //     browser.pause(3000);
    // });

    // it("KEYS action perform F1", function(){
    //     browser.url("http://the-internet.herokuapp.com/key_presses?");
    //     spicejetPage.enterSearch("F1");
    //     const text = spicejetPage.getResultLabelText();
    //     console.log(text);
    //     assert.equal("You entered: F1", text);
    //     browser.pause(3000);
    // });

   

});