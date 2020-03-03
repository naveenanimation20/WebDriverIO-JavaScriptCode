describe("interaction with web element", function(){

    it("enter value in a field", function(){
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');
        browser.pause(5000);

    });

    it("get text of field", function(){
        browser.url('/');
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);


    });

    it("click on a field", function(){
        browser.url('/');
        const icon = $('input.nav-input');
        icon.click();

    });


});