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


    test('PDF de pantalla completa', async() => {

        await page.goto('https://google.com', {waitUntil: 'networkidle0' })
        
        let pdfCSS = []
        pdfCSS.push('<style>')
        pdfCSS.push('h1 { font-size:10px; margin-left:30px;}')
        pdfCSS.push('<style>')

        const css = pdfCSS.join('')

        await page.pdf({
            path:'./google.pdf',
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: css + '<h1>' + 'Mi primer PDF con puppeteer' + '</h1>',
            footerTemplate: css + '<h1> page <span class="pageNumber"></span> of <span class="totalPages"></span> </h1>',
            margin: {
                top: '100px',
                bottom: '200px',
                right: '30px',
                left: '30px'

            }


        })

    }, 500000)

    test('PDF de pantalla completa en modo landscape', async() => {

        await page.goto('https://google.com', {waitUntil: 'networkidle0' })
        
        let pdfCSS = []
        pdfCSS.push('<style>')
        pdfCSS.push('h1 { font-size:10px; margin-left:30px;}')
        pdfCSS.push('<style>')

        const css = pdfCSS.join('')

        await page.pdf({
            path:'./googleLandscape.pdf',
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: css + '<h1>' + 'Mi primer PDF con puppeteer' + '</h1>',
            footerTemplate: css + '<h1> page <span class="pageNumber"></span> of <span class="totalPages"></span> </h1>',
            margin: {
                top: '100px',
                bottom: '200px',
                right: '30px',
                left: '30px'

            },
            landscape: true


        })

    }, 500000)

    
})