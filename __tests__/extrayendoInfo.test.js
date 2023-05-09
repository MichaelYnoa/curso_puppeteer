const puppeteer = require('puppeteer')

describe('Extrayendo informacion', () =>{

    it('Extraer el titulo del elemento', async() => {

        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            defaultViewport: null

        })
        const page = await browser.newPage()
        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        
        const titulo = await page.title()
        const url = await page.url()
        
        console.log('Titulo: ', titulo)
        console.log('Url: ', url)

        await browser.close()

    }, 500000 )

    it('Extraer la informacion de un elemento',async() => {

        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            defaultViewport: null

        })
        const page = await browser.newPage()
        await page.goto('https://platzi.com', {waitUntil: 'networkidle0' })
        await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(7) > a')
        
        nombreBoton = await page.$eval('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(7) > a', (button) => button.textContent )
        
        console.log('Nombre del boton: ', nombreBoton)
        
        const [buttonn] = await page.$x('//*[@id="Header-v2"]/nav[2]/section/button[2]')
        const propiedad = await buttonn.getProperty('textContent')
        const texto = await propiedad.jsonValue()

        console.log('texto: ', texto)

        
        await browser.close()

    }, 500000 )


})