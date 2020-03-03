describe("drop down handling", function(){

    it.skip("select drop down value by text", function(){
        browser.url("https://www.facebook.com/")
        $('#day').selectByVisibleText('10')
        $('#month').selectByVisibleText('Apr')
        $('#year').selectByVisibleText('1990')
        browser.pause(3000)
    })

    it.skip("select drop down value by index", function(){
        browser.url("https://www.facebook.com/")
        $('#day').selectByIndex(3)
        $('#month').selectByIndex(9)
        $('#year').selectByIndex(13)
        browser.pause(3000)
    })

    it.skip("select drop down value by attribute value", function(){
        browser.url("https://www.facebook.com/")
        $('#day').selectByAttribute('value',"25")
        $('#month').selectByAttribute('value',"7")
        $('#year').selectByAttribute('value',"2015")
        browser.pause(3000)
    })

    it("get all the values from dropdown", function(){
        browser.url("https://www.facebook.com/")
        let list = $$('#month option');
        console.log('length is ', list.length)

        for(let i = 0; i<list.length; i++){
            const element = list[i];
            console.log(i, element.getText())
            if(element.getText() === 'Mar'){
                element.click();
                break;
            }
        }
        browser.pause(3000)


    })




})