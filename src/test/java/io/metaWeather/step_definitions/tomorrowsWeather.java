package io.metaWeather.step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public class tomorrowsWeather {
    private String endPoint;
    private String queryParams;
    private Response response;
    private Response response1;
    int woeid;
    String date;

    @Given("the user specifies {string} ,  {string}")
    public void the_user_specifies(String endPoint, String city) {
        this.endPoint = endPoint;
        this.queryParams = city;
    }

    @When("the user sends GET request")
    public void the_user_sends_GET_request() {
        response = RestAssured.given().queryParams("query", this.queryParams)
                .when().get(this.endPoint);
    }

    @Then("the user verifies the {string}")
    public void the_user_verifies_the(String expectedStatusCode) {
        int actualStatusCode = this.response.statusCode();
        Assert.assertEquals("INFO - PASS: The expected status code is same with actual one", Integer.parseInt(expectedStatusCode), actualStatusCode);
    }

    @And("the user verifies the {string} , {string} , {string} , {string}")
    public void the_user_verifies_the(String title, String locationType, String woeid, String latt_long) {
        String body = null;
        JsonPath jsonPath = response.jsonPath();

        // Because of not being able to get the "null" value,
        // we use "try/catch" block to prevent throwing "NullPointerException"!
        // If there is no matching city, it should return empty body instead of returning 404!
        try {
            Assert.assertEquals(jsonPath.get("title[0]").toString(), title);
        } catch (NullPointerException e) {
            body = response.body().asString();
            Assert.assertEquals("!! Expected Result is EMPTY BODY, returning 200 !!", body, "[]");
        }

        try {
            Assert.assertEquals(jsonPath.get("location_type[0]").toString(), locationType);
        } catch (NullPointerException e) {
            body = response.body().asString();
            Assert.assertEquals("!! Expected Result is EMPTY BODY, returning 200 !!", body, "[]");
        }

        try {
            Assert.assertEquals(jsonPath.get("woeid[0]").toString(), woeid);
        } catch (NullPointerException e) {
            body = response.body().asString();
            Assert.assertEquals("!! Expected Result is EMPTY BODY, returning 200 !!", body, "[]");
        }

        try {
            Assert.assertEquals(jsonPath.get("latt_long[0]").toString(), latt_long);
        } catch (NullPointerException e) {
            body = response.body().asString();
            Assert.assertEquals("!! Expected Result is EMPTY BODY, returning 200 !!", body, "[]");
        }
    }

    @When("the user gets woeid from the body")
    public void the_user_gets_woeid_from_the_body() {

        JsonPath jsonPath = response.jsonPath();

        //response.prettyPrint();
        this.woeid = jsonPath.getInt("woeid[0]");
    }

    @When("the user gets the tomorrow's date")
    public void the_user_gets_the_tomorrow_s_date() {

        LocalDateTime tomorrow = LocalDateTime.now().plusDays(1);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        this.date = formatter.format(tomorrow);
    }

    @When("the user sends GET request for day location method")
    public void the_user_sends_GET_request_for_day_location_method() {

        Response response1 = RestAssured.given().accept("application/json")
                .when().get("api/location/" + woeid + "/" + date);
        //response1.prettyPrint();
        this.response1 = response1;

    }

    @Then("the user verifies below data")
    public void the_user_verifies_below_data(List<String> expectedKeySet) {

        JsonPath jsonPath = response1.jsonPath();

        Map<String, Object> dataMap = jsonPath.getMap("[0]");
        Set<String> keySet = dataMap.keySet();

        for (int i = 0; i < expectedKeySet.size(); i++) {
            Assert.assertTrue("INFO - PASS: The expected data contains all the elements in the actual one",keySet.contains(expectedKeySet.get(i)));
        }

    }

    @And("the user verifies that the report is being taken approximately within {int} hours intervals")
    public void the_user_verifies_that_the_report_is_being_taken_approximately_within_hours_intervals(Integer int1) {

        JsonPath jsonPath = this.response1.jsonPath();

        List<String> created = jsonPath.get("created");

        List<LocalDateTime> datesOfQuery = created.stream().map(allDateTime -> {

            String dateString = allDateTime.substring(0, 23) + " Z";

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS 'Z'");

            LocalDateTime dateTime = LocalDateTime.parse(dateString, formatter);

            return dateTime;

        }).collect(Collectors.toList());

        for (int i=0;i < datesOfQuery.size()-1;i++){

            Duration between = Duration.between(datesOfQuery.get(i + 1), datesOfQuery.get(i));

            long seconds = between.getSeconds();

            Assert.assertTrue("--Comparing whether the time is in desired limit",seconds >= 10700 && seconds <= 10900);
        }
    }
}
