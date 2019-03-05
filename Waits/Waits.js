const timeOut = 10000;
const search = element(by.id('tsf'));
browser.manage().timeouts().implicitlyWait(5000);
browser.ignoreSynchronization = true;

function isElementEnabled(element) {
    let isEnabled = false;
    try {
        isEnabled = element.isEnabled();
    } catch (e) {
        console.error(e);
    }
    return isEnabled;
}
function isElementDisplayed(element) {
    let isDisplayed = false;
    try {
        isDisplayed = element.isDisplayed();
    } catch (e) {
        console.error(e);
    }
    return isDispalyed;
}

describe('Protractor Test', function () {
    beforeEach(function () {
        browser.get('https://www.google.com.ua');
    });
    it('isDisplayed', function () {
        //browser.sleep(timeOut);
        browser.wait(() => isElementDisplayed.bind(search), timeOut);
    });

    it('isEnabled', function () {
        //browser.sleep(timeOut);
        browser.wait(() => isElementEnabled.bind(search), timeOut);
    });
});

