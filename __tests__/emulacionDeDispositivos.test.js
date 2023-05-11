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
        page = await browser.newPage()

    }, 100000)

    afterAll( async() => {
        await browser.close()
    }, 100000)


    test('Emulacion de dispositivos de manera manual', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        await page.emulate ({
            name: 'Mi dispositivo',
            viewport: {
                width: 375,
                height: 667,
                deviceScaleFactor:2,
                isMobile: true,
                hasTouch: true,
                isLandscape: false
            },
            userAgent: 'Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-J600G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.1 Chrome/71.0.3578.99 Mobile Safari/537.36'
        })
        
        await page.waitForTimeout(3000)

    }, 500000 )


    test('Emulacion de dispositivos de escritorio', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        await page.setViewport({
            width: 1280,
            height: 800,
        })
        
        await page.waitForTimeout(3000)

    }, 500000 )

    test('Emulacion de pagina web en una tablet', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const tablet = puppeteer.devices['iPad Pro']
        await page.emulate(tablet)
        
        await page.waitForTimeout(3000)

    }, 500000 )

    test('Emulacion de pagina web en una tablet modo landscape', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const tablet = puppeteer.devices['iPad landscape']
        await page.emulate(tablet)
        
        await page.waitForTimeout(3000)

    }, 500000 )

    test('Emulacion de un dispositivo celular', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const iphone = puppeteer.devices['iPhone 13 Mini']
        await page.emulate(iphone)
        
        await page.waitForTimeout(3000)

    }, 500000 )

    
})