const puppeteer = require('puppeteer')

describe(' Interactuando con elementos', () =>{

    it('debe de abrir y llenar un formulario',async() => {

        const browser = await puppeteer.launch({
            headless: true,
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
        //await page.waitForTimeout(3000)
        
        await page.goto('https://devexpress.github.io/testcafe/example/')
        //await page.waitForTimeout(3000)
        await page.type('#developer-name', 'Michael')
        await page.click('#remote-testing')
        await page.click('#tried-test-cafe')
        await page.type('#comments', 'Esto es un comentario con tiempo de escritura', {delay: 100})
        await page.click('#submit-button')
        //await page.waitForTimeout(3000)






        await browser.close()

    }, 500000 )

})