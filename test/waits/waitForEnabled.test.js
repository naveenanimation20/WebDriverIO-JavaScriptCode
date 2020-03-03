describe('wait for enabled case', function(){

    it.skip('should wait for button to be enabled', function(){

        browser.url('http://classic.crmpro.com/register/')
        const checkBox = $(`//input[@name='agreeTerms']`)
        const submitBtn = $('#submitButton')
        checkBox.click()
        //browser.pause(3000)
        submitBtn.waitForEnabled(4000)
        assert.equal(true, submitBtn.isEnabled())

    })

    it('should wait for button to be disabled', function(){
        browser.url('http://classic.crmpro.com/register/')

        const checkBox = $(`//input[@name='agreeTerms']`)
        const submitBtn = $('#submitButton')
        checkBox.waitForDisplayed()
        checkBox.click()
        //browser.pause(3000)
        submitBtn.waitForEnabled(4000)
        assert.equal(true, submitBtn.isEnabled())

        checkBox.click()
        submitBtn.waitForEnabled(4000, true)
        assert.equal(false, submitBtn.isEnabled())

    })





})