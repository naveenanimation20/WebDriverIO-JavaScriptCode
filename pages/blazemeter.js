class BlazePage {

    get mainHeader() {
        return $('h2.home_title')
    }
    get productLink() {
        return $('ul.list-nav-links li:nth-child(11111) a')
    }
    clickOnProductLink() {
        this.productLink.waitForDisplayed();
        if (this.productLink.isDisplayed() === true) {
            this.productLink.click();
        }
    }
    get jmeterLink() {
        return $("//a[text()='JMeter']")
    }
    get parent() {
        return $('ul.list-nav-links');
    }
    get childElements() {
        return this.parent.$$('li');
    }
    get getTextForLi() {
        return this.childElements.filter(element => {
            console.log(element.getText());
        });
    }

    get useCasesElements() {
        return $$('div#main_b_footer_second_block>ul>li')
    }

    get useCasesElementsText() {
        return this.useCasesElements.filter(element => {
            console.log(element.getText());
        });
    }

    specifChildElement(index) {
        return this.parent.$(`li:nth-child(${index})`)
    }

    getSpecificChildElementText(index) {
        console.log(this.specifChildElement(index).getText());
    }




}

module.exports = new BlazePage();