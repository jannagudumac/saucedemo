const { Builder, By, Key, until } = require("selenium-webdriver");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function loginAndList() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.saucedemo.com/");
    await sleep(1000);

    const username = await driver.findElement(By.id("user-name"));
    const password = await driver.findElement(By.id("password"));
    const loginbutton = await driver.findElement(By.id("login-button"));
    await username.sendKeys("standard_user");
    await password.sendKeys("secret_sauce");
    await loginbutton.click();
    await driver.wait(until.elementLocated(By.css(".inventory_list")), 10000);

    const inventoryButtons = await driver.findElements(
      By.css(".btn_inventory")
    );

    for (let i = 0; i < 2; i++) {
      await inventoryButtons[i].click();
      await sleep(1000);
    }

    const shoppingCart = await driver.findElement(By.css(".shopping_cart_link"));
    await shoppingCart.click();
    await sleep(2000);

    const checkoutButton = await driver.findElement(By.id("checkout"));
    await checkoutButton.click();
    await sleep(2000);

    const firstName = await driver.findElement(By.id("first-name"));
    await firstName.sendKeys("Test");
    await sleep(1000);
    const lastName = await driver.findElement(By.id("last-name"));
    await lastName.sendKeys("User");
    await sleep(1000);
    const postalCode = await driver.findElement(By.id("postal-code"));
    await postalCode.sendKeys("75001");
    await sleep(1000);

    const continueButton = await driver.findElement(By.id("continue"));
    await continueButton.click();
    await sleep(1000);

    const finishButton = await driver.findElement(By.id("finish"));
    await finishButton.click();
    await sleep(3000);
  } finally {
    await driver.quit();
  }
}

if (require.main === module) {
  loginAndList().catch(console.error);
}
