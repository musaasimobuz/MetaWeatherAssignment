package io.metaWeather.step_definitions;

import io.cucumber.java.Before;
import io.metaWeather.utilities.ConfigurationReader;
import io.restassured.RestAssured;

public class Hooks {
    @Before
    public void setUp(){
        RestAssured.baseURI= ConfigurationReader.get("url");
    }
    }
