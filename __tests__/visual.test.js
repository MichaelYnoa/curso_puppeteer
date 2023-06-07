const puppeteer = require('puppeteer')
const {toMatchImageSnapshot} = require('jest-image-snapshot')
expect.extend({toMatchImageSnapshot})

describe('Visual Test', () =>{

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


    test('Snapshot de toda la pagina', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        await page.waitForSelector('img')

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot()

    }, 500000)

    test('Snapshot de solo un elemento', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const image = await page.waitForSelector('img')

        const screenshot = await image.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        })

    }, 500000)

    test('Snapshot de un dipositivo movil', async() => {

        const tablet = puppeteer.devices['iPad Pro']
        await page.emulate(tablet)

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const image = await page.waitForSelector('img')

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        })

    }, 500000)

    test('Remover una imagen antes de crear un Snapshot', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const image = await page.waitForSelector('img')

        await page.evaluate( ()=> (document.querySelectorAll('img') || []).forEach((img) => img.remove()))

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        })

    }, 500000)
    
})