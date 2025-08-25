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
    await driver.wait(
      until.elementLocated(By.css(".inventory_list")), 
      10000
    );
    const products = await driver.findElements(By.css(".inventory_item_name"));
    const productNames = await Promise.all(products.map(el => el.getText()));
    console.log(productNames);


  } finally {
    await driver.quit();
  }
}

if (require.main === module) {
  loginAndList().catch(console.error);
}
