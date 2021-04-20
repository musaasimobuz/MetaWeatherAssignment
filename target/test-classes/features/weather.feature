@MW_001
Feature: Verification of retrieving the weather information for given date and location

  @wip1
  Scenario Outline: Sending GET request for location search using city name by using two different <test types>
    Given the user specifies "<end point>" ,  "<query params>"
    When the user sends GET request
    Then the user verifies the "<status code>"
    And the user verifies the "<title>" , "<location type>" , "<woeid>" , "<latt_long>"

    Examples:
      | end point            | query params | status code | title      | location type | woeid | latt_long           | test types                       |
      | api/location/search/ | notttingham  | 200         | Nottingham | City          | 30720 | 52.949219,-1.143920 | positive1                        |
      | api/location/search/ | NottinghaM   | 200         | Nottingham | City          | 30720 | 52.949219,-1.143920 | positive1:case sensitive         |
      | api/location/search/ | 1223         | 200         |            |               |       |                     | negative1:null                   |
      | api/location/search/ | asdffhjhjhj  | 200         |            |               |       |                     | negative2:invalid                |
      | api/location/search/ | ..;'/;.;.    | 200         |            |               |       |                     | negative3:punctuation characters |

  @wip2
  Scenario: Verifying the report information
    Given the user specifies "api/location/search/" ,  "Nottingham"
    When the user sends GET request
    Then the user verifies the "200"
    When the user gets woeid from the body
    And the user gets the tomorrow's date
    And the user sends GET request for day location method
    Then the user verifies the "200"
    And the user verifies below data
      | id                     |
      | weather_state_name     |
      | wind_direction_compass |
      | created                |
      | applicable_date        |
      | min_temp               |
      | max_temp               |
      | the_temp               |
      | wind_speed             |
      | wind_direction         |
      | air_pressure           |
      | humidity               |
      | visibility             |
      | predictability         |

  @wip3
  Scenario: Verifying the report is being received once in every 3 hours
    Given the user specifies "api/location/search/" ,  "Nottingham"
    When the user sends GET request
    Then the user verifies the "200"
    When the user gets woeid from the body
    And the user gets the tomorrow's date
    And the user sends GET request for day location method
    Then the user verifies the "200"
    And the user verifies that the report is being taken approximately within 3 hours intervals