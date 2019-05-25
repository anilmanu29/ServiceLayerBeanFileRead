package cucumberServicePages;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

import FileReader.pojo.FileDetails;
import FileReader.pojo.VehicleDetails;
import FileReader.service.FileReaderService;
import FileReader.service.FileReaderServiceImpl;
import VehicleTests.FirefoxVehicleEnquiry;
import VehicleTests.VehicleEnquiry;
import Vehiclepages.ErrorPage;
import Vehiclepages.Page;
import Vehiclepages.RegEnterPage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

/**
 *@author olusola
 * Selenium and Cucumber tests for service.feature
 */
public class ServiceRunSteps {

    private FileReaderService fileReaderService;
    private List<FileDetails> fileDetailsList;
    private VehicleEnquiry vehicleEnquiry;
    private Page page;
    private String[] vehicleInfo;
    private String fileName;
    private VehicleDetails vehicleDetails;

    private static String DIRECTORY = "/home/olusola/Documents/Java/";

    @Before
    public void init(){
        System.setProperty(
                //"webdriver.gecko.driver",
        		"webdriver.chrome.driver",
                "X:\\Softwares\\chromedriver_win32\\chromedrivernew.exe");
    }

    @Given("^the service has (-?\\d+) files to read in directory (.*)$")
    public void testServiceReadsDirectory (int number, String path) throws Exception {
        fileReaderService = new FileReaderServiceImpl();
        fileDetailsList = fileReaderService.getFileContents(DIRECTORY + path);
    }

    @Given("^the service reads files from directory testfiles$")
    public void testServiceReadsDirectoryTestfiles1() throws Exception {
        fileReaderService = new FileReaderServiceImpl();
        fileDetailsList = fileReaderService.getFileContents(DIRECTORY + "testfiles");
    }

    @When("^the service is evoked$")
    public void testServiceIsEvoked () throws Exception {
        vehicleEnquiry = new FirefoxVehicleEnquiry();
    }

    @And("^the registration number (.*) from (.*) is entered into the website$")
    public void testCorrectNumberEntered (String plate, String file) throws Exception {
        vehicleInfo = vehicleEnquiry.checkDetails(plate);
    }

    @And("^registration numbers from each file with (.*) is entered into the website inturn$")
    public void testRegistrationNumbersFromEachFile (String name) throws Exception {
         this.fileName = name;
    }

    @Then("^the service will produce a list of size (-?\\d+)$")
    public void testServiceProduceListSize (int result) throws Exception {
        assertEquals(fileDetailsList.size(), result);
    }

    @Then("^the website details will match the service with make of FORD with a colour of BLUE$")
    public void testWebsiteDetails () throws Exception {
        assertEquals(vehicleInfo[1], "FORD");
        assertEquals(vehicleInfo[2], "BLUE");
    }

    @Then("^the website details for registration (.*) will be (.*) the exact vehicle make (.*) with colour (.*)$")
    public void testWebsiteFoundOrNot (String plate, String foundOrNot, String make, String colour) throws Exception {
        switch(foundOrNot) {
            case "found":
                vehicleInfo = vehicleEnquiry.checkDetails(plate);
                assertEquals(make, vehicleInfo[1]);
                assertEquals(colour, vehicleInfo[2]);
                break;
            case "not found":
                page = vehicleEnquiry.incorrectRegNo(plate);
                ErrorPage errorPage = (ErrorPage) page;
                assertEquals(Page.ErrorPage_CONTACT_INFO, errorPage.getErrorContactInfoString());
                break;
            case "error":
                page = vehicleEnquiry.enterInvalidFormatRegNo(plate);
                RegEnterPage regEnterPage = (RegEnterPage) page;
                assertEquals(Page.RegEnterPage_ERROR_HEADING, regEnterPage.getErrorStringHeading());
                assertEquals(Page.RegEnterPage_ERROR_STRING, regEnterPage.getErrorString());
                break;
        }
    }

    @Then("^the website details for registration (.*) with make of (.*) with a colour of (.*)  will (.*) " +
            "the service with make of (.*) with a colour of (.*)$")
    public void testWebsiteMatchOrNot(String plate, String make, String colour, String matchOrNot,
                                      String make1, String colour1) throws Exception {
        switch(matchOrNot){
            case "match":
                vehicleInfo = vehicleEnquiry.checkDetails(plate);
                assertEquals(make, vehicleInfo[1]);
                assertEquals(colour,vehicleInfo[2]);
                vehicleDetails = fileReaderService.getVehicleDetailsFromFile(fileName);
                assertEquals(make1, vehicleDetails.getMake());
                assertEquals(colour1, vehicleDetails.getColour());
                break;
            case "not match":
                page = vehicleEnquiry.incorrectRegNo(plate);
                ErrorPage errorPage = (ErrorPage) page;
                assertEquals(errorPage.getErrorContactInfoString(),Page.ErrorPage_CONTACT_INFO);
                vehicleDetails = fileReaderService.getVehicleDetailsFromFile(fileName);
                assertEquals(make1, vehicleDetails.getMake());
                assertEquals(colour1, vehicleDetails.getColour());
                break;
            case "not be found":
                vehicleInfo = vehicleEnquiry.checkDetails(plate);
                assertEquals(make, vehicleInfo[1]);
                assertEquals(colour,vehicleInfo[2]);
                vehicleDetails = fileReaderService.getVehicleDetailsFromFile(fileName);
                assertEquals(make1, vehicleDetails.getMake());
                assertEquals(colour1, vehicleDetails.getColour());
                break;
            case "error":
                page = vehicleEnquiry.enterInvalidFormatRegNo(plate);
                RegEnterPage regEnterPage = (RegEnterPage) page;
                assertEquals(Page.RegEnterPage_ERROR_HEADING, regEnterPage.getErrorStringHeading());
                assertEquals(Page.RegEnterPage_ERROR_STRING, regEnterPage.getErrorString());
                vehicleDetails = fileReaderService.getVehicleDetailsFromFile(fileName);
                assertEquals(make1, vehicleDetails.getMake());
                assertEquals(colour1, vehicleDetails.getColour());
                break;
        }
    }

    @After
    public void tearDown() {
        if(vehicleEnquiry != null) {
            vehicleEnquiry.quit();
        }
    }

}
