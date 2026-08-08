import { Browser, Builder, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRun() {

    await driver.get("https://www.saucedemo.com/");
    await driver.sleep(2000);

    await driver.manage().window().maximize();
    await driver.sleep(1000);

    await driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("standard_user");
    await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce");
    await driver.findElement(By.xpath("//input[@id='login-button']")).click();

    await driver.sleep(5000);

    await driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//a[@id='reset_sidebar_link']")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("(//button[text()='Add to cart'])[1]")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("(//button[text()='Add to cart'])[2]")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("(//button[text()='Add to cart'])[3]")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//a[@class='shopping_cart_link']")).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath("//button[@id='checkout']")).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath("//input[@id='first-name']")).sendKeys("Antor");

    await driver.findElement(By.xpath("//input[@id='last-name']")).sendKeys("Haque");
    await driver.findElement(By.xpath("//input[@id='postal-code']")).sendKeys("6622");
    await driver.sleep(3000);

   
    await driver.findElement(By.xpath("//input[@id='continue']")).click();
    await driver.sleep(2000);

  
    let product1 = await driver.findElement(By.xpath("(//div[@class='inventory_item_name'])[1]")).getText();
    console.log(product1);

    let product2 = await driver.findElement(By.xpath("(//div[@class='inventory_item_name'])[2]")).getText();
    console.log(product2);

    let product3 = await driver.findElement(By.xpath("(//div[@class='inventory_item_name'])[3]")).getText();
    console.log(product3);

  
    let totalPrice = await driver.findElement(By.xpath("//div[@class='summary_total_label']")).getText();

    console.log(totalPrice);

    await driver.findElement(By.xpath("//button[@id='finish']")).click();
    await driver.sleep(4000);

    let successMessage = await driver.findElement(By.xpath("//h2[@class='complete-header']")).getText();

    console.log(successMessage);

    if(successMessage == "Thank you for your order!"){
        console.log("Order Successful");
    }
    else{
        console.log("Order Failed");
    }

    await driver.findElement(By.xpath("//button[@id='back-to-products']")).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']")).click();
    await driver.sleep(1000);


    await driver.findElement(By.xpath("//a[@id='reset_sidebar_link']")).click();
    await driver.sleep(1000);

    await driver.findElement(By.xpath("//a[@id='logout_sidebar_link']")).click();
    await driver.sleep(2000);

    await driver.quit();


}

testRun();