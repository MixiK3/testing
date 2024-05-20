// lambdaTest.js
const assert = require('assert');
const { Builder, Browser } = require('selenium-webdriver');
const { LambdaPage } = require('./LambdaPage');

async function lambdaTest() {
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    const lambdaPage = new LambdaPage(driver);

    try {
        await lambdaPage.open();
        await lambdaPage.maximize();
        await lambdaPage.sleep(2000);

        assert.equal(await lambdaPage.getHeaderText(), "5 of 5 remaining");
        await lambdaPage.sleep(1000);

        for (let i = 1; i <= 5; i++) {
            const expectedRemainingText = `${6 - i} of 5 remaining`;
            assert.equal(await lambdaPage.getRemainingText(), expectedRemainingText);

            assert.equal(await lambdaPage.getItemClass(i), "done-false");
            await lambdaPage.clickItem(i);
            assert.equal(await lambdaPage.getItemClass(i), "done-true");
        }

        await lambdaPage.setInputText("Some new cool value");
        await lambdaPage.sleep(1000);

        await lambdaPage.clickAddButton();

        assert.equal(await lambdaPage.getNewItemText(), "Some new cool value");
        assert.equal(await lambdaPage.getNewItemClass(), "done-false");

        await lambdaPage.clickNewItem();
        assert.equal(await lambdaPage.getNewItemClass(), "done-true");

        await lambdaPage.sleep(3000);
    } catch (err) {
        await driver.takeScreenshot().then(function (image) {
            require("fs").writeFileSync('screenshot.jpg', image, 'base64');
        });

        console.error("Тест упал по причине %s", err);
    } finally {
        await driver.quit();
    }
}

lambdaTest();
