const puppeteer = require('puppeteer')

describe('performance', () =>{

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


    test('Medir el performance de la automatizacion', async() => {

        await page.goto('https://platzi.com')
        await page.waitForSelector('img')
        const metrics = await page.metrics()
        console.log(metrics)

    }, 500000)


    test('Medir el performance de la pagina', async() => {

        await page.goto('https://platzi.com')
        await page.waitForSelector('img')
        const metrics2 = await page.evaluate(()=>JSON.stringify(window.performance))
        console.log(metrics2)

    }, 500000)

    test('Medir el performance del page load', async() => {

        await page.tracing.start({path: 'profile_google.json'})
        await page.goto('https://google.com')
        await page.tracing.stop()

    }, 500000)

    test('Medir el performance del page load con screenshots', async() => {

        await page.tracing.start({path: 'profile_platzi.json', screenshots: true})
        await page.goto('https://platzi.com')
        await page.tracing.stop()

    }, 500000)

    test('Medir el performance del page load con screenshots y extraccion', async() => {

        const fs = require('fs')
        await page.tracing.start({path: 'profile_platzi.json', screenshots: true})
        await page.goto('https://platzi.com')
        await page.tracing.stop()
        const tracing = JSON.parse(fs.readFileSync('./profile_platzi.json', 'utf8'))
        //filtrat el json
        const traceScreenShots = tracing.traceEvents.filter(
            (x)=>
            x.cat === 'disabled-by-default-devtools.screenshot' &&
            x.name === 'Screenshot' &&
            typeof x.args !== 'undefined' &&
            typeof x.args.snapshot !== 'undefined'
            
        )

        //iterar sobre el arreglo para obtener las imagenes

        traceScreenShots.forEach(function(snap,index){
            fs.writeFile("trace-screenshot-${index}.png", snap.args.snapshot, 'base64', function(err){
                if(err){
                    console.log('No pude crear el archivo', err)
                }
            })
        })

    }, 500000)

    
})