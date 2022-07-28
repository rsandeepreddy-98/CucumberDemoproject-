package cucumber.StepDefination;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.PageObjects.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinationCheck {
	public WebDriver driver;
	public LoginPage loginPage;

	@Given("^user launches chrome browser$")
	public void user_launches_chrome_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//String driverLocation = System.getProperty("user.dir")+"/Drivers/chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		loginPage = new LoginPage(driver);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
	}
	
	@When("^user enter the url \"([^\"]*)\"$")
	public void user_enter_the_url(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.get(url);
	    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
	    driver.manage().window().maximize();
	}

	@When("^user enters username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enters_username_as_and_password_as(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    loginPage.setEmailElement(username);
	    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
	    loginPage.setPasswordElement(password);
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    loginPage.setLoginButton();
	}
	@Then("^if login fails grab the error text displayed on screen$")
	public void if_login_fails_grab_the_error_text_displayed_on_screen() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    String acutal = "Login was unsuccessful. Please correct the errors and try again.\r\n"
	    		+ "The credentials provided are incorrect";
	   if(driver.getPageSource().contains("Login was unsuccessful. Please correct the errors and try again.\r\n"
	   		+ "The credentials provided are incorrect")) {
		   System.out.println("Login Error");
		   
	   }
	   else {
		   System.out.println("Login Success");
	   }
	}
	
	@When("^close browser$")
	public void close_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.quit();
	}


}
