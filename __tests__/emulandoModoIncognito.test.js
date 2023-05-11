const puppeteer = require('puppeteer')

describe('Emulando dispositivos', () =>{

    let browser
    let page
    
    beforeAll( async() => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            defaultViewport: null

        })
        // Aqui esta el modo incognito 
        const context = await browser.createIncognitoBrowserContext()
        page = await context.newPage()
    }, 100000)

    afterAll( async() => {
        await browser.close()
    }, 100000)


    test('Emulacion de un dispositivo celular', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const iphone = puppeteer.devices['iPhone 13 Mini']
        await page.emulate(iphone)
        
        await page.waitForTimeout(3000)

    }, 500000 )

    
})