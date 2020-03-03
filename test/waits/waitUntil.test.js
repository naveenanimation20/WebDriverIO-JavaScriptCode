describe('wait until sync for the elements', function(){

    it('wait for home page', function(){

        browser.url('https://app.hubspot.com/login')
        const email = $('#username')
        const password = $('#password')
        const loginButton = $('#loginBtn')

        browser.waitUntil(function(){
            return email.isDisplayed() === true
        }, 6000, 'email is not displayed after the given time')

        email.setValue('naveenanimation30@gmail.com')
        password.setValue('Test@1234')
        loginButton.click()

        const header = $('h1.private-page__title')
        browser.waitUntil(function(){
            return header.getText() === 'Sales Dashboard' 
                    && browser.getTitle() === 'Reports dashboard'
        }, 6000, 'header or title is not displayed after the given time')

        console.log(header.getText());
        assert.equal('Sales Dashboard', header.getText())

        // browser.waitUntil(function(){
        //     return browser.getTitle() === 'Reports dashboard'
        // }, 6000, 'title is not displayed after the given time')

        console.log(browser.getTitle())
        assert.equal('Reports dashboard', browser.getTitle())



    })




})