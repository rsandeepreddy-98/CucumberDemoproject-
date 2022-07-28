package cucumber.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	public WebDriver driver;
	
	public LoginPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	/*Here we need to identify the webelements of the Login page*/
	@FindBy(name = "Email")
	WebElement emailElement;
	
	public void setEmailElement(String email) {
		emailElement.clear();
		emailElement.sendKeys(email);
	}
	
	/*For Password element*/
	@FindBy(id = "Password")
	WebElement passwordElement;
	
	public void setPasswordElement(String password) {
		passwordElement.clear();
		passwordElement.sendKeys(password);
	}
	
	/*For Login Button*/
	@FindBy(xpath = "//button[@class='button-1 login-button']")
	WebElement loginButtonElement;
	
	public void setLoginButton() {
		loginButtonElement.click();
	}
	
}
