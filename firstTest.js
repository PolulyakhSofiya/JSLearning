browser.ignoreSynchronization = true;
const EC = protractor.ExpectedConditions;
const timeout = 7500;

const YandexLocationPage = function () {
    const locationInput = element(by.id("city__front-input"));
    const locationTarget = element(by.css(".popup__items li:first-child"));

    this.setLocation = async function (city) {
        await this.clearLocationInput();
        await this.setCityName(city);
        await this.chooseDropdownItem();
    };
    this.clearLocationInput = async function () {
        await browser.wait(EC.presenceOf(locationInput), timeout);
        await locationInput.clear();
    };
    this.setCityName = async function (city) { await locationInput.sendKeys(city); };
    this.chooseDropdownItem = async function () {
        await this.waitElement(locationTarget);
        await browser.sleep(500);
        await locationTarget.click();
    };
    this.waitElement = async function (element) { await browser.wait(EC.elementToBeClickable(element), timeout); };
};
//module.exports = new YandexLocationPage();

const YandexHomepage = function () {
    const currentLocation = element(by.className("geolink__reg"));
    const moreContent = element(by.css('a[data-statlog="tabs.more"]'));
    const contentText = element.all(by.css(".home-tabs__more >div > div>a"));

    this.openYandex = function () {
        browser.wait(browser.get('https://yandex.by/'), timeout);
    };

    this.openLocationPage = async function () {
        await this.waitElement(currentLocation);
        await currentLocation.click();
    };

    this.openMoreContentTab = async function () {
        await this.waitElement(moreContent);
        await moreContent.click();
    };

    this.getBarItems = async function () {
        await contentText.getText();
    };
    this.displayMoreContent = async function () {
        await this.openMoreContentTab();
        await this.getBarItems();
    };
    this.waitElement = async function (element) { await browser.wait(EC.elementToBeClickable(element), timeout); };
}
//module.exports = new YandexHomePage();

//let YandexHomePage = require('./YandexHomePage');
//let YandexLocationPage = require('./YandexLocationPage');
describe('Yandex browser', function () {
    const yandexHomepage = new YandexHomepage();
    const yandexLocationpage = new YandexLocationPage();

    beforeEach(yandexHomepage.openYandex);

    it('is content equal', async function () {
        await yandexHomepage.openLocationPage();
        await yandexLocationpage.setLocation('London');
        const tabsLondon = await yandexHomepage.displayMoreContent();
        await yandexHomepage.openLocationPage();
        await yandexLocationpage.setLocation('Paris');
        const tabsParis = await yandexHomepage.displayMoreContent();

        expect(tabsLondon).toEqual(tabsParis);
    });
});
