import { Builder } from 'selenium-webdriver';
import { expect } from 'chai';
import { describe, it, after, before } from 'mocha';

import HomePage from './HomePage.js';
import ProductPage from './ProductPage.js';
import BasketPage from './BasketPage.js';


describe('Levitacia Website Test', function () {
    this.timeout(120000);
    let driver;
    let homePage;
    let productPage;
    let basketPage;


    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        homePage = new HomePage(driver);
        productPage = new ProductPage(driver);
        basketPage = new BasketPage(driver);
    });

    after(async () => {
        await driver.quit();
    });

    it('Добавление товара в корзину ', async () => {
        await homePage.open();

        await homePage.clickOnChapter();


        await homePage.clickOnChapter2();
        await driver.sleep(1000);

        await homePage.clickOnProduct();
        await driver.sleep(1000);

        await productPage.addToBasket();
        await driver.sleep(1000);


    });

    it('Перейти в корзину, удалить товар и убедиться, что общая цена равна нулю', async () => {
        await productPage.goToBasket();
        await driver.sleep(1000);

        await basketPage.deleteProduct();
        await driver.sleep(1000);

    });



    it('Далее попробовать востановить продукт', async () => {
        await basketPage.restoreItem();
        await driver.sleep(1000);

    });

    it('Попробуем отложить товар и вернуть обратно', async () => {
        await productPage.putAside();
        await driver.sleep(2000);
        await productPage.unPutAside();
        await driver.sleep(2000);

    });
    it('Убедится что кнопка выход на главное меню работает', async () => {
        await homePage.goToLogo();
        await driver.sleep(2000);
    });


});