const search = element(by.id('tsf'));
browser.ignoreSynchronization = true;

async function isElementPresent(element) {
    let isPresent = await element.isPresent();
    let time = 500;
    do {
        if (isPresent) { console.log('Element is in a DOM'); return; }
        else {
            await browser.sleep(time);
            time += 500;
        }
    }
    while (time < 5000);
    console.log('Element isn\'t presented in a DOM');
}

async function isElementDisplayed(element, count = 0) {
    if (count > 0) { await browser.sleep(500); }
    let isDisplayed;
    try {
        isDisplayed = await element.isDisplayed();
        if (isDisplayed) {
            console.log('Element is displayed at the page');
            return;
        }
        else {
            if (count < 10) {
                return isElementDisplayed(element, count + 1);
            }
        }
    }
    catch (e) {
        if (e instanceof NoSuchElementError && count < 10) {
            return isElementDisplayed(element, count + 1);
        }
        throw e;
    }
}

describe('Protractor Test', function () {
    beforeEach(function () {
        browser.get('https://www.google.com.ua');
    });
    it('isDisplayed', function () {
        isElementDisplayed(search);
    });

    it('isPresent', function () {    
        isElementPresent(search);
    });
});

