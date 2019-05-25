package VehicleTests;

import org.junit.Before;
import org.junit.Test;

import Vehiclepages.ErrorPage;
import Vehiclepages.Page;
import Vehiclepages.RegEnterPage;
import Vehiclepages.VehicleCheckPage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;


/**
 * @author olusola
 * Selenium test of website to check right details can be found in the pages
 */
public class VehicleEnquireTest {

    private VehicleEnquiry vehicleEnquiry;

    @Before
    public void setUp() {
        System.setProperty(
                //"webdriver.gecko.driver",
        		"webdriver.chrome.driver",
                "X:\\Softwares\\chromedriver_win32\\chromedrivernew.exe");
                
        vehicleEnquiry = new FirefoxVehicleEnquiry();
    }


    @Test
    public void testEnquirePage() throws Exception{
        Page page = vehicleEnquiry.enterRegNo("GX18HBL");
        assertEquals(page.getPageHeading(), Page.VehicleCheckPage_HEADING);
        vehicleEnquiry.quit();
    }

    @Test
    public void testVehicleCheckPage () throws Exception {

        String[] vehicleInfo = vehicleEnquiry.checkDetails("GX18HBL");
        assertEquals(vehicleInfo[0], "GX18HBL");
        assertEquals(vehicleInfo[1], "AUDI");
        assertEquals(vehicleInfo[2], "BLACK");
        vehicleEnquiry.quit();
    }

    @Test
    public void testErrorPage() throws Exception {

        Page page = vehicleEnquiry.incorrectRegNo("V765DPR");
        ErrorPage errorPage = (ErrorPage) page;
        assertEquals(errorPage.getPageHeading(), Page.ErrorPage_HEADING);
        assertEquals(errorPage.getErrorContactInfoString(), Page.ErrorPage_CONTACT_INFO);
        vehicleEnquiry.quit();
    }

    @Test
    public void testInvalidRegNoNumber() throws Exception{

        Page page = vehicleEnquiry.enterInvalidFormatRegNo("1234567");
        assertEquals(page.getPageHeading(), Page.RegEnterPage_HEADING);
        RegEnterPage regEnterPage = (RegEnterPage)page;
        assertEquals(regEnterPage.getErrorStringHeading(),Page.RegEnterPage_ERROR_HEADING);
        assertEquals(regEnterPage.getErrorString(), Page.RegEnterPage_ERROR_STRING);
        vehicleEnquiry.quit();
    }

    @Test
    public void testInvalidRegNoLetters() throws Exception{

        Page page = vehicleEnquiry.enterInvalidFormatRegNo("ABCDEF");
        assertEquals(page.getPageHeading(), Page.RegEnterPage_HEADING);
        RegEnterPage regEnterPage = (RegEnterPage)page;
        assertEquals(regEnterPage.getErrorStringHeading(),Page.RegEnterPage_ERROR_HEADING);
        assertEquals(regEnterPage.getErrorString(), Page.RegEnterPage_ERROR_STRING);
        vehicleEnquiry.quit();
    }
}
