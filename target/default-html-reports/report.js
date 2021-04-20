$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/weather.feature");
formatter.feature({
  "name": "Verification of retrieving the weather information for given date and location",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MW_001"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Sending GET request for location search using city name by using two different \u003ctest types\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip1"
    }
  ]
});
formatter.step({
  "name": "the user specifies \"\u003cend point\u003e\" ,  \"\u003cquery params\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.step({
  "name": "the user verifies the \"\u003cstatus code\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the user verifies the \"\u003ctitle\u003e\" , \"\u003clocation type\u003e\" , \"\u003cwoeid\u003e\" , \"\u003clatt_long\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "end point",
        "query params",
        "status code",
        "title",
        "location type",
        "woeid",
        "latt_long",
        "test types"
      ]
    },
    {
      "cells": [
        "api/location/search/",
        "notttingham",
        "200",
        "Nottingham",
        "City",
        "30720",
        "52.949219,-1.143920",
        "positive1"
      ]
    },
    {
      "cells": [
        "api/location/search/",
        "NottinghaM",
        "200",
        "Nottingham",
        "City",
        "30720",
        "52.949219,-1.143920",
        "positive1:case sensitive"
      ]
    },
    {
      "cells": [
        "api/location/search/",
        "1223",
        "200",
        "",
        "",
        "",
        "",
        "negative1:null"
      ]
    },
    {
      "cells": [
        "api/location/search/",
        "asdffhjhjhj",
        "200",
        "",
        "",
        "",
        "",
        "negative2:invalid"
      ]
    },
    {
      "cells": [
        "api/location/search/",
        "..;\u0027/;.;.",
        "200",
        "",
        "",
        "",
        "",
        "negative3:punctuation characters"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sending GET request for location search using city name by using two different positive1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MW_001"
    },
    {
      "name": "@wip1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user specifies \"api/location/search/\" ,  \"notttingham\"",
  "keyword": "Given "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_specifies(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"Nottingham\" , \"City\" , \"30720\" , \"52.949219,-1.143920\"",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending GET request for location search using city name by using two different positive1:case sensitive",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MW_001"
    },
    {
      "name": "@wip1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user specifies \"api/location/search/\" ,  \"NottinghaM\"",
  "keyword": "Given "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_specifies(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"Nottingham\" , \"City\" , \"30720\" , \"52.949219,-1.143920\"",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending GET request for location search using city name by using two different negative1:null",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MW_001"
    },
    {
      "name": "@wip1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user specifies \"api/location/search/\" ,  \"1223\"",
  "keyword": "Given "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_specifies(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"\" , \"\" , \"\" , \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending GET request for location search using city name by using two different negative2:invalid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MW_001"
    },
    {
      "name": "@wip1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user specifies \"api/location/search/\" ,  \"asdffhjhjhj\"",
  "keyword": "Given "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_specifies(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"\" , \"\" , \"\" , \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending GET request for location search using city name by using two different negative3:punctuation characters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MW_001"
    },
    {
      "name": "@wip1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user specifies \"api/location/search/\" ,  \"..;\u0027/;.;.\"",
  "keyword": "Given "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_specifies(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"\" , \"\" , \"\" , \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the report information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MW_001"
    },
    {
      "name": "@wip2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user specifies \"api/location/search/\" ,  \"Nottingham\"",
  "keyword": "Given "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_specifies(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets woeid from the body",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_gets_woeid_from_the_body()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets the tomorrow\u0027s date",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_gets_the_tomorrow_s_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request for day location method",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request_for_day_location_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies below data",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_below_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the report is being received once in every 3 hours",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MW_001"
    },
    {
      "name": "@wip3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user specifies \"api/location/search/\" ,  \"Nottingham\"",
  "keyword": "Given "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_specifies(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets woeid from the body",
  "keyword": "When "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_gets_woeid_from_the_body()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets the tomorrow\u0027s date",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_gets_the_tomorrow_s_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user sends GET request for day location method",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_sends_GET_request_for_day_location_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies that the report is being taken approximately within 3 hours intervals",
  "keyword": "And "
});
formatter.match({
  "location": "io.metaWeather.step_definitions.tomorrowsWeather.the_user_verifies_that_the_report_is_being_taken_approximately_within_hours_intervals(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});