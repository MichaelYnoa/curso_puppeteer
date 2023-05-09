const puppeteer = require('puppeteer')

describe(' Interactuando con elementos', () =>{

    it('debe de abrir y cerrar el navergador',async() => {

        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            defaultViewport: null

        })
        const page = await browser.newPage()

        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

        page.on('dialog', async(dialog) => {
            await dialog.accept()
        })

        //click derecho 

       // await page.click('.context-menu-one', {button: 'right', delay: 500})
       // await page.waitForTimeout(3000)

        //doble click
        await page.click('#authentication > button', {clickCount: 2 ,delay: 500})
        await page.waitForTimeout(3000)
        
        







        await browser.close()

    }, 500000 )

})