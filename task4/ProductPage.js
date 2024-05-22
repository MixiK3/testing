import { By, until } from 'selenium-webdriver';

class ProductPage {
    constructor(driver) {
        this.driver = driver;
        this.addToBasketButton = By.xpath('//*[@id="content"]/div[2]/div/div/div/div/div/div/div/div[2]/div/div[4]/div/div[3]/div/div[2]');
        this.goToBasketButton = By.xpath('//*[@id="content"]/div[2]/div/div/div/div/div/div/div/div[2]/div/div[4]/div/div[3]/div/div[2]/a');
        this.put = By.xpath('//div[@class="basket-items-list-item-warning-container wish_item_button"]');
        this.unPut = By.xpath("//a[@data-entity='basket-item-remove-delayed' and contains(text(), 'Добавить к заказу')]");
    }

    async addToBasket() {
        await this.driver.findElement(this.addToBasketButton).click();
    }

    async goToBasket() {
        await this.driver.findElement(this.goToBasketButton).click();
    }
    async putAside() {
        await this.driver.findElement(this.put).click();
    }
    async unPutAside() {
        await this.driver.findElement(this.unPut).click();
    }
}

export default ProductPage;