# API MetaWeather Rest Service Testing & Instructions
 
 
#### Codes and Tests Prepared by:
 
**Musa Asim OBUZ**
 
*QA Test Automation Engineer*
 
  
[asimmmusaobuz@gmail.com](mailto:asimmusaobuz@gmail.com)
 
[https://www.linkedin.com/in/maobuz/](https://www.linkedin.com/in/maobuz/)
 
  
 
**- Build Tool:** Maven
 
**- Test Framework:** Cucumber BBD (with Junit 4 Assertions)
 
  
 
##### Api REST Service:
 
  
 
`https://www.metaweather.com/api`
 
  
 
##### [](https://github.com/musaasimobuz/MetaWeatherAssignment#endpoint-for-test)Endpoint for Test:
 
  
 
`/api/location/search/`
 
#### QA:
 
  
 
write a Cucumber BDD test that uses the method created to get the JSON response payload and validate to retrieve “tomorrows” weather for “Nottingham" as a MetaWeather API client.
 
  
 
#### System Requirements:
 
  
 
- Java 1.8 + SDK
 
  
 
## Test RUN
 
  
 
Notes: To run all Scenarios, use `@MW_001` tag in the CukesRunner class/Cucumber Options
 
  
 
#### [](https://github.com/musaasimobuz/MetaWeatherAssignment#1-way)1. Way:
 
  
 
- Clone the projects
 
- Import maven dependencies from POM
 
- Go **src -> test > java > io > metaWeather > runners > CukesRunner** and RUN
 
- To generate "HTML Maven Cucumber Report" ;
 
> Open Maven right-side panel Double Click Project's Lifecycle Click "verify"
 
  
 
#### [](https://github.com/musaasimobuz/MetaWeatherAssignment#2-way)2. Way:
 
  
 
- Run from command line invoke `mvn clean verify`
 
  
 
## Cucumber Test Feature Scenarios:
#### Assumption
- Assuming that we send GET request for  “/api/location/search/?query=cityName” with invalid input, it doesn’t return the status code of 404. Instead, it returns the status code of 200 with an empty body.

#### 1) Validate getting the appropriate request for location search using city name
 
  
 
a- In this Scenario, it tests the endpoint with a live API server ([https://www.metaweather.com/api/](https://www.metaweather.com/api/))
 
  
 
b- To run separately this scenario, use the `@wip1` tag in the CukesRunner class/Cucumber Options
 
  
 
#### 2) Validate getting all the weather report information
 
  
 
a- In this Scenario, it tests the endpoint within city name and a live API server ([https://www.metaweather.com/api/](https://www.metaweather.com/api/))
 
  
 
b- To run separately this scenario, use the `@wip2` tag in the CukesRunner class/Cucumber Options
 
  
 
#### 3) Validate getting all the weather report information within 3 hours interval
 
  
 
a- In this Scenario, it tests the endpoint within woeid, date time, and a live API server ([https://www.metaweather.com/api/](https://www.metaweather.com/api/))
 
  
 
b- To run separately this scenario, use the `@wip3` tag in the CukesRunner class/Cucumber Options
 
  
 
# Questions & Responses
 
  
 
#### • How can I expand the test to include different locations?
 
+ I have supported the outline system through setting up “dynamic Java methods & codes” that allow the different parameters provided by the users.
 
+ The "Scenario Outline & Examples", which is one of the most useful characteristics of the Cucumber BDD framework, enabling to explain the story and the acceptance criteria in an easy language, with the help of "Gherkin Language" syntax can be utilised to achieve the expansion of the test to include different locations in a dynamic way. 
 
+ The users can add the desired “title, location type, woeid, and latt_long” so that they can retrieve diversified information of the expected cities.
 
  
 
#### • How can I expand the test to include other dates?
 
+ As the dynamic keyword plays a crucial role in Cucumber BDD framework, the "LocalDateTime" method coming from "java.time" class could be helpful to expand the test to include other dates in a dynamic manner. 
 
+ Besides, "DateTimeFormatter" method coming from "java.time.format" class should be used to convert the date into the appropriate format.
 
#### • Explain why you chose to use those particular tools/frameworks in the technical challenge?
 
+ “IntelliJ IDE” has been used to write, run, and test the automated test scripts, scenarios and methods.
 
+ “Java” has been used as a programming language within Java Collection Framework context and classes. 
 
+ “Selenium” has been used as a testing tool in the Cucumber BDD framework.
 
+ “Maven”, a build and dependency management tool, has been used to manage and centralize the dependencies stored in “pom.xml”.
 
+ "Cucumber BDD" framework has been created to enable the reusability of the codes from different classes, and to generate HTML reports that show the pass/fail coverage for feature files, tags, and steps for each test.
 
+ “Cucumber feature files” has been created within the “GHERKIN syntax of Given, When, And, Then” to describe my test scenarios. By doing that I make sure that my test cases are understandable for each member of the team, even for those who aren't technically strong to describe my test scenarios.
 
+ “configuration.properties” type of file has been used where I keep the important test data about my framework such as “url” to change and run on different environments.
 
+ "Rest Assured Library" has been utilised to generate automation tests within thorough accessibility to the desired elements, data or information easily and appropriately.
 
+ “Postman” has been utilised to test the API manually by sending requests and verifying responses.
 
+ “Json” has been used to transmit data between a server and web application as an alternative to XML within possessing key and values format.
 
+ "Lambda Expression" has been used to manipulate our objects in the collection.
 
+ "Runner" class has been used to to run different types of testing suites that I created with my tags, and automated API tests with the help of the "CukesRunner", a class that strictly runs the tests, generate codes for step definitions and includes:
 
+ plugin --> for adding more information in the console including reporting.
 
+ features --> for accessing the feature files to run the expected tests
 
+ glue --> where to look for step definitions in which the test scripts are written. “Hook” class is part of glue, too.
 
+ dryRun--> for running the tests from the feature file
 
+ tags --> located in feature path for getting the result of the tests in a fast manner within the usage of different tags.
 
#### • Describe the reason for the scope of your solution. Why did you test what you did, and why didn’t you test other things?
 
The scope of my solution includes:
 
+ Validating the endpoint in the documentation works properly;
 
+ Validating the status codes of the endpoint work accurately;
 
+ Validating uncovered test data or query parameters exist;
 
+ Validating whether the API accepts negative test scenarios or not to provide bug-free and user-friendly application before it goes through the production deployment stage;
 
+ Validating the user can gain all the weather information whenever the input is taken;
 
+ Validating the updated information of the report is taken within 3 hours interval not to cause any discrepancy;
 
+ Assessing the test cases within the priority and severity levels to decide what to test and not to test
 
#### • What questions would you ask your Product Owner / what information would you need to know, to be able to test the whole MetaWeather API service comprehensively?
+ There are some issues with this endpoint ([/api/location/search/?query=cityName”](/api/location/search/?query=cityName) such as:
+ The response should return 200 or 403 after providing negative test scenarios such as invalid characters, null, or punctuation in the” endpoint. In the current circumstance, it provides 200 and empty body. The alternative way can be getting 404 and providing a message in response body “City name can not be empty, include punctuation or numeric values.”  

+ Also, if we put space as a city name, it returns all cities. Is this desired output? If yes, I would ask to specify this issue in the documentation. 
+ If there is double name matching such as “Manchester”, it returns both of them. There might be another location endpoint to prevent this situation.
 
#### • After completing the technical challenge, what would you do differently if you were asked to do the same challenge again?
 
+ I would perform end to end testing including UI and API together.
 
2021 April®
 
  
### [](https://github.com/musaasimobuz/MetaWeatherAssignment#end)End
 

