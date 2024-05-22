// LambdaPage.js
const { By } = require('selenium-webdriver');

class LambdaPage {
    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get("https://lambdatest.github.io/sample-todo-app/");
    }

    async maximize() {
        await this.driver.manage().window().maximize();
    }

    async sleep(ms) {
        await this.driver.sleep(ms);
    }

    async getHeaderText() {
        const header = await this.driver.findElement(By.className("ng-binding"));
        return await header.getText();
    }

    async getRemainingText() {
        const remainingElem = await this.driver.findElement(By.xpath("//span[@class='ng-binding']"));
        return await remainingElem.getText();
    }

    async getItemClass(index) {
        const item = await this.driver.findElement(By.xpath(`//input[@name='li${index}']/following-sibling::span`));
        return await item.getAttribute("class");
    }

    async clickItem(index) {
        await this.driver.findElement(By.name(`li${index}`)).click();
    }

    async setInputText(text) {
        await this.driver.findElement(By.id("sampletodotext")).sendKeys(text);
    }

    async clickAddButton() {
        await this.driver.findElement(By.id("addbutton")).click();
    }

    async getNewItemText() {
        const item = await this.driver.findElement(By.xpath("//input[@name='li6']/following-sibling::span"));
        return await item.getText();
    }

    async getNewItemClass() {
        const item = await this.driver.findElement(By.xpath("//input[@name='li6']/following-sibling::span"));
        return await item.getAttribute("class");
    }

    async clickNewItem() {
        await this.driver.findElement(By.name("li6")).click();
    }
}

module.exports = { LambdaPage };
