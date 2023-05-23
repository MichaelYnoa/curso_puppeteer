const puppeteer = require('puppeteer')

describe('Capturas de pantallas', () =>{

    let browser
    let page
    
    beforeAll( async() => {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 0,
            defaultViewport: null

        })
        page = await browser.newPage()

    }, 100000)

    afterAll( async() => {
        await browser.close()
    }, 100000)


    test('Captura de pantalla completa', async() => {

        await page.goto('https://google.com', {waitUntil: 'networkidle0' })
        
        await page.screenshot({
            path:'./captura.png',
            fullpage: true
        })

    }, 500000)

    test('Captura de pantalla seleccionando un area', async() => {

        await page.goto('https://google.com', {waitUntil: 'networkidle0' })
        
        await page.screenshot({
            path:'./capturaPorArea.png',
            clip:{
                x:0,
                y:0,
                width: 500,
                height: 500
            }
        })

    }, 500000)

    test('Captura de pantalla con fondo transparente', async() => {

        await page.goto('https://google.com', {waitUntil: 'networkidle0' })

        await page.evaluate(()=>(document.body.style.background = 'transparent'))
        
        await page.screenshot({
            path:'./capturaDePantallaSinFondo.png',
            omitBackground: true
        })

    }, 500000)

    test('Captura de pantalla a un elemento', async() => {

        await page.goto('https://google.com', {waitUntil: 'networkidle0' })

        const elemento = await page.waitForSelector('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img')

        await page.evaluate(()=>(document.body.style.background = 'transparent'))
        
        await elemento.screenshot({
            path:'./capturaDePantallaDeUnElemento.png',
            omitBackground: true
        })

    }, 500000)

    
})