const puppeteer = require('puppeteer')

describe(' Mi primer test en puppeteer', () =>{

    it('debe de abrir y cerrar el navergador',async() => {

        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            defaultViewport: null

        })
        const page = await browser.newPage()
        await page.goto('https://github.com/')
        await page.waitForTimeout (5000)
        await page.waitForSelector('img')

        await page.reload()
        await page.waitForTimeout (5000)
        await page.waitForSelector('img')

        await page.goto('https://platzi.com/')
        await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Logo > div > a > div > figure > img')
        //await page.waitForXPath("(//img[@alt='Platzi Logo'])[2]")

        await page.goBack()
        await page.goForward()

        //abrir otra pagina
        const page2 = await browser.newPage()
        await page2.goto('https://google.com/')


        await browser.close()





    }, 500000 )

})