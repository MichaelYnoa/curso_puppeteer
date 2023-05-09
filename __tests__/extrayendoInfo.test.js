const puppeteer = require('puppeteer')

describe('Extrayendo informacion', () =>{

    let browser
    let page
    
    beforeEach( async() => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            defaultViewport: null

        })
        page = await browser.newPage()

    })

    afterEach( async() => {
        await browser.close()
    })


    it('Extraer el titulo del elemento', async() => {

        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const titulo = await page.title()
        const url = await page.url()
        
        console.log('Titulo: ', titulo)
        console.log('Url: ', url)

    }, 500000 )

    it('Extraer la informacion de un elemento',async() => {

       
        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(7) > a')
        
        nombreBoton = await page.$eval('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(7) > a', (button) => button.textContent )
        
        console.log('Nombre del boton: ', nombreBoton)
        
        const [buttonn] = await page.$x('//*[@id="Header-v2"]/nav[2]/section/button[2]')
        const propiedad = await buttonn.getProperty('textContent')
        const texto = await propiedad.jsonValue()

        console.log('texto: ', texto)

    }, 500000 )


})