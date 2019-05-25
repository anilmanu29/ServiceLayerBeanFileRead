package Vehiclepages;

/**
 * @Author olusola
 * Error page interface
 */
public interface ErrorPage extends Page {


    /**
     * Get information on the error page
     * @return a string representing information that is only present on the error page
     */
    public String getErrorContactInfoString();


}
