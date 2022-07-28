package cucumber.StepDefination;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {

	public WebDriver driver;
	@BeforeClass
	public void setup() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"./Drivers/chromedriver.exe");

		driver = new ChromeDriver();
	}
	
	@AfterClass
	public void terminate() {
		
	}
}
