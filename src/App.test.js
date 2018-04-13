const puppeteer = require('puppeteer');

const isDebugging = () => {
    let debugging_mode = {
        headless: true,
        slowMo: 250,
        devtools: true
    }
    return process.env.NODE_ENV === 'debug' ? debugging_mode : {};

};

describe('on page load',() => {
    test('h1 loads correctly',async() =>{
        let browser = await puppeteer.launch(isDebugging())
        let page = await browser.newPage()

        page.emulate({
            viewport: {
                width: 500,
                height:2400
            },
            userAgent: ''
        })
    })

});


