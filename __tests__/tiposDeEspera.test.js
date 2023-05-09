const puppeteer = require('puppeteer')

describe('Tipos de espera', () =>{

    it('Mostrar todos los diferentes tipos de espera',async() => {

        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 500,
            defaultViewport: null

        })
        const page = await browser.newPage()

        //await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })

        //espera explicita

       // await page.waitForTimeout(2000)

        //espera por un CSS selector

       // await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Logo > div > a > div > figure > img')

        //Espera por un Xpath

       // await page.waitForXPath("(//img[contains(@alt,'Platzi Logo')])[2]")

        await page.goto('https://demoqa.com/modal-dialogs', {waitUntil: 'networkidle2'})
        await page.waitForSelector('#showSmallModal', {visible: true })


        await page.click('#showSmallModal')

        await page.waitForSelector('#example-modal-sizes-title-sm')

        const observaResize = page.waitForFunction('window.innerWidth < 100')
        await page.setViewport({width: 50, height: 50 })

        await observaResize





        await browser.close()

    }, 500000 )

})