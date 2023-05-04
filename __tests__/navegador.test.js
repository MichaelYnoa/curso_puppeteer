const puppeteer = require('puppeteer')

describe(' Mi primer test en puppeteer', () =>{

    it('debe de abrir y cerrar el navergador',async() => {

        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            devtools: false,
        //    defaultViewport: {
        //        width: 2100,
        //        height: 1080
        //    }
        })
        const page = await browser.newPage()
        await page.goto('https://automationexercise.com/')
        await page.waitForTimeout (5000)
        await browser.close()

    }, 50000 )

})