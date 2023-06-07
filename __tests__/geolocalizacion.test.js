const puppeteer = require('puppeteer')

describe('Geolocalizacion', () =>{

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


    test('Cambio de la geolocalizacion', async() => {

        
        
        const context = browser.defaultBrowserContext()

        await context.overridePermissions('https://chercher.tech/practice/geo-location.html',[
            'geolocation'
        ])

        await page.setGeolocation({ latitude:90, longitude: 20})

        await page.goto('https://chercher.tech/practice/geo-location.html', {waitUntil: 'networkidle0' })

    

    }, 500000)

})



  

    
