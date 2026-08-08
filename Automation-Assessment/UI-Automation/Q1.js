import { Browser, Builder, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRun() {

    await driver.get("https://www.saucedemo.com/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(1000);


    await driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("locked_out_user");
    await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce");
    await driver.findElement(By.xpath("//input[@id='login-button']")).click();
    await driver.sleep(2000);


let actualMessage = await driver.findElement(By.xpath("//h3[@data-test='error']")).getText();

console.log(actualMessage);

if (actualMessage == "Epic sadface: Sorry, this user has been locked out.") {
    console.log("Test Passed");
}
else {
    console.log("Test Failed");
}

await driver.sleep(3000);
await driver.quit();
}

testRun();