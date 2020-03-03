describe('wait for delete button using waitFotExist', function(){
    it('should wait for delete button', function(){
        browser.url('http://the-internet.herokuapp.com/add_remove_elements/')
        const addElement = $(`//button[text()='Add Element']`)
        const deleteElement = $(`//button[text()='Delete']`)
        addElement.waitForDisplayed()
        addElement.click()
        deleteElement.waitForExist(4000)
        assert.equal(true, deleteElement.isExisting())
        deleteElement.click()
        assert.equal(false, deleteElement.isExisting())
        browser.pause(3000)
    })

    it('should wait for preview button', function(){
        browser.url('https://app.hubspot.com/login')
        const email = $('#username')
        const password = $('#password')
        const loginButton = $('#loginBtn')
        //login stpes:
        email.waitForDisplayed()
        email.setValue('naveenanimation30@gmail.com')
        password.setValue('Test@1234')
        loginButton.click()
        //landing on Contacts page:
        $('#nav-primary-contacts-branch').waitForDisplayed()
        $('#nav-primary-contacts-branch').click()
        $('#nav-secondary-contacts').waitForDisplayed()
        $('#nav-secondary-contacts').click()

        const previewButton = $(`//span[text()='hemal LN1']//ancestor::a//following-sibling::span/button`)
        previewButton.moveTo()
        previewButton.waitForExist(3000)
        previewButton.waitForDisplayed()
        previewButton.click()

        browser.pause(3000)

    })


   




})