import { By } from 'selenium-webdriver';

class BasketPage {
    constructor(driver) {
        this.driver = driver;
        this.deleteButton = By.xpath('//div[@class="basket-item-block-actions"]/span[@class="basket-item-actions-remove" and @data-entity="basket-item-delete"]');
        this.checkoutButton = By.xpath('//*[@id="bx_117848907_82344"]/div[3]/div/div/div[3]/div[5]/div/div[3]/div/div[2]');
        this.productLink = By.xpath('//*[@id="bx_1182278561_3412934129"]');
        this.restore = By.xpath('//div[@class="basket-items-list-item-removed-block"]');
    }

    async deleteProduct() {
        await this.driver.findElement(this.deleteButton).click();
    }

    async getTotalPrice() {
        const totalPriceElement = await this.driver.findElement(this.totalPrice);
        return await totalPriceElement.getText();
    }
    async clickOnProductBasket() {
        await this.driver.findElement(this.productLink).click();

    }
    async restoreItem() {
        await this.driver.findElement(this.restore).click();

    }
}

export default BasketPage;