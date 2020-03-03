const crmPage = require("../pages/crm.page")

describe("scroll to element", function(){

    it.skip("should scroll to forgot pwd link", function(){

        browser.url("https://classic.crmpro.com/")
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
      crmPage.forgotpwdLink.scrollIntoView();
      console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
      crmPage.forgotpwdLink.click();

    })

    it.skip("should scroll to forgot pwd link, move and click", function(){

        browser.url("https://classic.crmpro.com/")
      crmPage.forgotpwdLink.scrollIntoView();
      crmPage.moveToElement(crmPage.forgotpwdLink)
      crmPage.forgotpwdLink.click();

    })

   



})