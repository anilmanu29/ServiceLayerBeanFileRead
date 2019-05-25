package cucumberServicePages;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import VehicleTests.FirefoxVehicleEnquiry;
import VehicleTests.VehicleEnquiry;
import Vehiclepages.ErrorPage;
import Vehiclepages.Page;
import Vehiclepages.RegEnterPage;


/**
 * @author olusola
 * Selenium and Cucumber tests for user.feature
 */
public class UserRunSteps {

    private VehicleEnquiry vehicleEnquiry;
    private Page page;
    private String[] info;

    @Before
    public void init(){
        System.setProperty(
            //"webdriver.gecko.driver",
        		
        		"webdriver.chrome.driver",
            "X:\\Softwares\\chromedriver_win32\\chromedrivernew.exe");
    }

    @Given("^I am a user of the website$")
    public void testUserWebsite() throws Exception {
        vehicleEnquiry = new FirefoxVehicleEnquiry();
        assertNotNull(vehicleEnquiry);
    }

    @When("^I enter a correct registration plate of NG07NNT$")
    public void testCorrectRegistration () throws Exception {
        info = vehicleEnquiry.checkDetails("NG07NNT");
    }

    @When("^I enter a incorrectly formatted registraton plate of AB343467$")
    public void testIncorrectlyFormatRegistration () throws Exception {
        page = vehicleEnquiry.enterInvalidFormatRegNo("AB343467");
    }

    @When("^I enter a correctly formatted invalid registration plate of V765DPR$")
    public void testCorrectFormatedInvalidRegistration () throws Exception {
        page = vehicleEnquiry.incorrectRegNo("V765DPR");
    }

    @And("^press continue$")
    public void testPressContinue() throws Exception {

    }

    @Then("^I will receive the correct make as FORD and colour of car as BLUE$")
    public void testCorrect () throws Exception {
        assertEquals(3, info.length);
        assertEquals(info[1], "FORD");
        assertEquals(info[2], "BLUE");
    }

    @Then("^I will receive an error messsage on the same page$")
    public void testErrorMessageSamePage () throws Exception {
        RegEnterPage regEnterPage = (RegEnterPage)page;
        assertEquals(regEnterPage.getErrorString(),Page.RegEnterPage_ERROR_STRING);
    }

    @Then("^I will be taken to an error page$")
    public void testErrorPage () throws Exception {
        ErrorPage errorPage = (ErrorPage) page;
        assertEquals(errorPage.getErrorContactInfoString(),Page.ErrorPage_CONTACT_INFO);
    }

    @After
    public void tearDown() {
        if(vehicleEnquiry != null) {
            vehicleEnquiry.quit();
        }
    }

}
