import { By } from 'selenium-webdriver';

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.chapterLink2 = By.xpath('//*[@id="bx_1847241719_578"]');
        this.chapterLink = By.xpath('//*[@id="header"]/div[2]/div/div/div/div[1]/div/div[2]/div/div/nav/div/table/tbody/tr/td/div/a');
        this.productLink = By.xpath('//*[@id="bx_3966226736_82344"]/div/div[2]/a');
        this.clickOnLogo = By.xpath('//*[@id="header"]/div/div[1]/div/div/div/div/div[2]/div');

    }

    async open() {
        await this.driver.get('https://outletium.ru/');
    }

    async clickOnChapter() {
        await this.driver.findElement(this.chapterLink).click();

    }
    async clickOnChapter2() {
        await this.driver.findElement(this.chapterLink2).click();

    }
    async clickOnProduct() {
        await this.driver.findElement(this.productLink).click();

    }
    async goToLogo() {
        await this.driver.findElement(this.clickOnLogo).click();

    }
}

export default HomePage;