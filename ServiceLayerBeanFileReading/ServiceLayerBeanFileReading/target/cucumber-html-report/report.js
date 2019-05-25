$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/service.feature");
formatter.feature({
  "line": 1,
  "name": "service",
  "description": "As a user of the service when I get it to read files, the service to be able to enter a vehicle registration number and\nget the correct make and colour of the cars I own back from the website. This means I don\u0027t have to do it manually.",
  "id": "service",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "The user has \u003cnumber\u003e files to read by the service",
  "description": "",
  "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the service has \u003cnumber\u003e files to read in directory \u003cpath\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the service will produce a list of size \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;",
  "rows": [
    {
      "cells": [
        "number",
        "path",
        "result"
      ],
      "line": 11,
      "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;1"
    },
    {
      "cells": [
        "1",
        "testfiles1",
        "1"
      ],
      "line": 12,
      "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;2"
    },
    {
      "cells": [
        "2",
        "testfiles2",
        "2"
      ],
      "line": 13,
      "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;3"
    },
    {
      "cells": [
        "3",
        "testfiles3",
        "3"
      ],
      "line": 14,
      "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;4"
    },
    {
      "cells": [
        "14",
        "testfiles",
        "13"
      ],
      "line": 15,
      "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 211100,
  "status": "passed"
});
formatter.before({
  "duration": 81900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "The user has 1 files to read by the service",
  "description": "",
  "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the service has 1 files to read in directory testfiles1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the service will produce a list of size 1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "testfiles1",
      "offset": 45
    }
  ],
  "location": "ServiceRunSteps.testServiceReadsDirectory(int,String)"
});
formatter.result({
  "duration": 183252600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 187749500,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "ServiceRunSteps.testServiceProduceListSize(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 41300,
  "status": "passed"
});
formatter.after({
  "duration": 20800,
  "status": "passed"
});
formatter.before({
  "duration": 48000,
  "status": "passed"
});
formatter.before({
  "duration": 69400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "The user has 2 files to read by the service",
  "description": "",
  "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the service has 2 files to read in directory testfiles2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the service will produce a list of size 2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "testfiles2",
      "offset": 45
    }
  ],
  "location": "ServiceRunSteps.testServiceReadsDirectory(int,String)"
});
formatter.result({
  "duration": 235100,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7548000,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 40
    }
  ],
  "location": "ServiceRunSteps.testServiceProduceListSize(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16800,
  "status": "passed"
});
formatter.after({
  "duration": 19100,
  "status": "passed"
});
formatter.before({
  "duration": 43900,
  "status": "passed"
});
formatter.before({
  "duration": 61200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "The user has 3 files to read by the service",
  "description": "",
  "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the service has 3 files to read in directory testfiles3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the service will produce a list of size 3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "testfiles3",
      "offset": 45
    }
  ],
  "location": "ServiceRunSteps.testServiceReadsDirectory(int,String)"
});
formatter.result({
  "duration": 224200,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 11301800,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 40
    }
  ],
  "location": "ServiceRunSteps.testServiceProduceListSize(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 21400,
  "status": "passed"
});
formatter.after({
  "duration": 29600,
  "status": "passed"
});
formatter.before({
  "duration": 36600,
  "status": "passed"
});
formatter.before({
  "duration": 31200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "The user has 14 files to read by the service",
  "description": "",
  "id": "service;the-user-has-\u003cnumber\u003e-files-to-read-by-the-service;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the service has 14 files to read in directory testfiles",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the service will produce a list of size 13",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "testfiles",
      "offset": 46
    }
  ],
  "location": "ServiceRunSteps.testServiceReadsDirectory(int,String)"
});
formatter.result({
  "duration": 383600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 9935000,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 40
    }
  ],
  "location": "ServiceRunSteps.testServiceProduceListSize(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22200,
  "status": "passed"
});
formatter.after({
  "duration": 14600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "The user has files to read by the service in directory testfiles1",
  "description": "",
  "id": "service;the-user-has-files-to-read-by-the-service-in-directory-testfiles1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the service has \u003cnumber\u003e files to read in directory \u003cpath\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the registration number \u003cplate\u003e from \u003cfile\u003e is entered into the website",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the website details will match the service with make of FORD with a colour of BLUE",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "service;the-user-has-files-to-read-by-the-service-in-directory-testfiles1;",
  "rows": [
    {
      "cells": [
        "number",
        "path",
        "plate",
        "file"
      ],
      "line": 24,
      "id": "service;the-user-has-files-to-read-by-the-service-in-directory-testfiles1;;1"
    },
    {
      "cells": [
        "1",
        "testfiles1",
        "NG07NNT",
        "file1.csv"
      ],
      "line": 25,
      "id": "service;the-user-has-files-to-read-by-the-service-in-directory-testfiles1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41100,
  "status": "passed"
});
formatter.before({
  "duration": 91900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "The user has files to read by the service in directory testfiles1",
  "description": "",
  "id": "service;the-user-has-files-to-read-by-the-service-in-directory-testfiles1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the service has 1 files to read in directory testfiles1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the registration number NG07NNT from file1.csv is entered into the website",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the website details will match the service with make of FORD with a colour of BLUE",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "testfiles1",
      "offset": 45
    }
  ],
  "location": "ServiceRunSteps.testServiceReadsDirectory(int,String)"
});
formatter.result({
  "duration": 298200,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 8782200,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "NG07NNT",
      "offset": 24
    },
    {
      "val": "file1.csv",
      "offset": 37
    }
  ],
  "location": "ServiceRunSteps.testCorrectNumberEntered(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ServiceRunSteps.testWebsiteDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32400,
  "status": "passed"
});
formatter.after({
  "duration": 40400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with \u003cname\u003e is entered into the website inturn",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration \u003cplate\u003e will be \u003cfoundOrNot\u003e the exact vehicle make \u003cmake\u003e with colour \u003ccolour\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;",
  "rows": [
    {
      "cells": [
        "name",
        "plate",
        "foundOrNot",
        "make",
        "colour"
      ],
      "line": 33,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;1"
    },
    {
      "cells": [
        "file1.csv",
        "NG07NNT",
        "found",
        "FORD",
        "BLUE"
      ],
      "line": 34,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;2"
    },
    {
      "cells": [
        "file2.csv",
        "GX18HBL",
        "found",
        "AUDI",
        "BLACK"
      ],
      "line": 35,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;3"
    },
    {
      "cells": [
        "file3.csv",
        "V765DPR",
        "not found",
        "HYUNDAI",
        "SILVER"
      ],
      "line": 36,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;4"
    },
    {
      "cells": [
        "file4.csv",
        "GJ13EBK",
        "found",
        "HONDA",
        "RED"
      ],
      "line": 37,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;5"
    },
    {
      "cells": [
        "file5.csv",
        "LA12GZC",
        "found",
        "NISSAN",
        "BLUE"
      ],
      "line": 38,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;6"
    },
    {
      "cells": [
        "file6.csv",
        "GJ13EBX",
        "found",
        "CITROEN",
        "WHITE"
      ],
      "line": 39,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;7"
    },
    {
      "cells": [
        "file7.csv",
        "YS59ABZ",
        "found",
        "BMW",
        "BLUE"
      ],
      "line": 40,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;8"
    },
    {
      "cells": [
        "file8.csv",
        "P1LOT",
        "found",
        "BMW",
        "BLACK"
      ],
      "line": 41,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;9"
    },
    {
      "cells": [
        "file9.csv",
        "PK66PFF",
        "found",
        "MINI",
        "BLUE"
      ],
      "line": 42,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;10"
    },
    {
      "cells": [
        "file10.csv",
        "RK66PFF",
        "found",
        "AUDI",
        "WHITE"
      ],
      "line": 43,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;11"
    },
    {
      "cells": [
        "file11.csv",
        "1234567",
        "error",
        "BMW",
        "ORANGE"
      ],
      "line": 44,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;12"
    },
    {
      "cells": [
        "file12.csv",
        "GX18HBK",
        "found",
        "AUDI",
        "BLUE"
      ],
      "line": 45,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;13"
    },
    {
      "cells": [
        "file14.csv",
        "NG08NNT",
        "found",
        "FORD",
        "BLACK"
      ],
      "line": 46,
      "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;14"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45700,
  "status": "passed"
});
formatter.before({
  "duration": 40900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file1.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration NG07NNT will be found the exact vehicle make FORD with colour BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 147400,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7383900,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file1.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NG07NNT",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "FORD",
      "offset": 82
    },
    {
      "val": "BLUE",
      "offset": 99
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22100,
  "status": "passed"
});
formatter.after({
  "duration": 29700,
  "status": "passed"
});
formatter.before({
  "duration": 39400,
  "status": "passed"
});
formatter.before({
  "duration": 32600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file2.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration GX18HBL will be found the exact vehicle make AUDI with colour BLACK",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 110400,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7232700,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file2.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GX18HBL",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "AUDI",
      "offset": 82
    },
    {
      "val": "BLACK",
      "offset": 99
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23400,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 49100,
  "status": "passed"
});
formatter.before({
  "duration": 48100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file3.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration V765DPR will be not found the exact vehicle make HYUNDAI with colour SILVER",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 112200,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7997200,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file3.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "V765DPR",
      "offset": 37
    },
    {
      "val": "not found",
      "offset": 53
    },
    {
      "val": "HYUNDAI",
      "offset": 86
    },
    {
      "val": "SILVER",
      "offset": 106
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25600,
  "status": "passed"
});
formatter.after({
  "duration": 15200,
  "status": "passed"
});
formatter.before({
  "duration": 37500,
  "status": "passed"
});
formatter.before({
  "duration": 32800,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file4.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration GJ13EBK will be found the exact vehicle make HONDA with colour RED",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 110500,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 10501500,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file4.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GJ13EBK",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "HONDA",
      "offset": 82
    },
    {
      "val": "RED",
      "offset": 100
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 21900,
  "status": "passed"
});
formatter.after({
  "duration": 14700,
  "status": "passed"
});
formatter.before({
  "duration": 37900,
  "status": "passed"
});
formatter.before({
  "duration": 33800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file5.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration LA12GZC will be found the exact vehicle make NISSAN with colour BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 105000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7453500,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file5.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LA12GZC",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "NISSAN",
      "offset": 82
    },
    {
      "val": "BLUE",
      "offset": 101
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17700,
  "status": "passed"
});
formatter.after({
  "duration": 11200,
  "status": "passed"
});
formatter.before({
  "duration": 34500,
  "status": "passed"
});
formatter.before({
  "duration": 36100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file6.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration GJ13EBX will be found the exact vehicle make CITROEN with colour WHITE",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 100800,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7658800,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file6.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GJ13EBX",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "CITROEN",
      "offset": 82
    },
    {
      "val": "WHITE",
      "offset": 102
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19900,
  "status": "passed"
});
formatter.after({
  "duration": 13900,
  "status": "passed"
});
formatter.before({
  "duration": 39800,
  "status": "passed"
});
formatter.before({
  "duration": 35300,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file7.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration YS59ABZ will be found the exact vehicle make BMW with colour BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 94900,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 4876200,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file7.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "YS59ABZ",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "BMW",
      "offset": 82
    },
    {
      "val": "BLUE",
      "offset": 98
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20300,
  "status": "passed"
});
formatter.after({
  "duration": 94100,
  "status": "passed"
});
formatter.before({
  "duration": 35700,
  "status": "passed"
});
formatter.before({
  "duration": 26400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file8.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration P1LOT will be found the exact vehicle make BMW with colour BLACK",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 167100,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 12982600,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file8.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "P1LOT",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 51
    },
    {
      "val": "BMW",
      "offset": 80
    },
    {
      "val": "BLACK",
      "offset": 96
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1055300,
  "status": "passed"
});
formatter.after({
  "duration": 18500,
  "status": "passed"
});
formatter.before({
  "duration": 42400,
  "status": "passed"
});
formatter.before({
  "duration": 37500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file9.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration PK66PFF will be found the exact vehicle make MINI with colour BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 99200,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 6451200,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file9.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PK66PFF",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "MINI",
      "offset": 82
    },
    {
      "val": "BLUE",
      "offset": 99
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19200,
  "status": "passed"
});
formatter.after({
  "duration": 12400,
  "status": "passed"
});
formatter.before({
  "duration": 37700,
  "status": "passed"
});
formatter.before({
  "duration": 29300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file10.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration RK66PFF will be found the exact vehicle make AUDI with colour WHITE",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 116100,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 6896800,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file10.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RK66PFF",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "AUDI",
      "offset": 82
    },
    {
      "val": "WHITE",
      "offset": 99
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 56400,
  "status": "passed"
});
formatter.after({
  "duration": 16400,
  "status": "passed"
});
formatter.before({
  "duration": 872200,
  "status": "passed"
});
formatter.before({
  "duration": 897900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file11.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration 1234567 will be error the exact vehicle make BMW with colour ORANGE",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7055500,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file11.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567",
      "offset": 37
    },
    {
      "val": "error",
      "offset": 53
    },
    {
      "val": "BMW",
      "offset": 82
    },
    {
      "val": "ORANGE",
      "offset": 98
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 437700,
  "status": "passed"
});
formatter.after({
  "duration": 382900,
  "status": "passed"
});
formatter.before({
  "duration": 49700,
  "status": "passed"
});
formatter.before({
  "duration": 38900,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file12.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration GX18HBK will be found the exact vehicle make AUDI with colour BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 102800,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7612300,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file12.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GX18HBK",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "AUDI",
      "offset": 82
    },
    {
      "val": "BLUE",
      "offset": 99
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34500,
  "status": "passed"
});
formatter.after({
  "duration": 25600,
  "status": "passed"
});
formatter.before({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 32100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "The information in the files read by the service can be found or not found on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-can-be-found-or-not-found-on-the-website;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "registration numbers from each file with file14.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the website details for registration NG08NNT will be found the exact vehicle make FORD with colour BLACK",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 111700,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 8251800,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file14.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NG08NNT",
      "offset": 37
    },
    {
      "val": "found",
      "offset": 53
    },
    {
      "val": "FORD",
      "offset": 82
    },
    {
      "val": "BLACK",
      "offset": 99
    }
  ],
  "location": "ServiceRunSteps.testWebsiteFoundOrNot(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14200,
  "status": "passed"
});
formatter.after({
  "duration": 50700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with \u003cname\u003e is entered into the website inturn",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration \u003cplate\u003e with make of \u003cmake\u003e with a colour of \u003ccolour\u003e  will \u003cmatchOrNot\u003e the service with make of \u003cmake1\u003e with a colour of \u003ccolour1\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;",
  "rows": [
    {
      "cells": [
        "name",
        "plate",
        "make",
        "colour",
        "matchOrNot",
        "make1",
        "colour1"
      ],
      "line": 54,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;1"
    },
    {
      "cells": [
        "file1.csv",
        "NG07NNT",
        "FORD",
        "BLUE",
        "match",
        "FORD",
        "BLUE"
      ],
      "line": 55,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;2"
    },
    {
      "cells": [
        "file2.csv",
        "GX18HBL",
        "AUDI",
        "BLACK",
        "match",
        "AUDI",
        "BLACK"
      ],
      "line": 56,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;3"
    },
    {
      "cells": [
        "file3.csv",
        "V765DPR",
        "HYUNDAI",
        "SILVER",
        "not match",
        "HYUNDAI",
        "SILVER"
      ],
      "line": 57,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;4"
    },
    {
      "cells": [
        "file4.csv",
        "GJ13EBK",
        "HONDA",
        "RED",
        "match",
        "HONDA",
        "RED"
      ],
      "line": 58,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;5"
    },
    {
      "cells": [
        "file5.csv",
        "LA12GZC",
        "NISSAN",
        "BLUE",
        "match",
        "NISSAN",
        "BLUE"
      ],
      "line": 59,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;6"
    },
    {
      "cells": [
        "file6.csv",
        "GJ13EBX",
        "CITROEN",
        "WHITE",
        "match",
        "CITROEN",
        "WHITE"
      ],
      "line": 60,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;7"
    },
    {
      "cells": [
        "file7.csv",
        "YS59ABZ",
        "BMW",
        "BLUE",
        "match",
        "BMW",
        "BLUE"
      ],
      "line": 61,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;8"
    },
    {
      "cells": [
        "file8.csv",
        "P1LOT",
        "BMW",
        "BLACK",
        "match",
        "BMW",
        "BLACK"
      ],
      "line": 62,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;9"
    },
    {
      "cells": [
        "file9.csv",
        "PK66PFF",
        "MINI",
        "BLUE",
        "match",
        "MINI",
        "BLUE"
      ],
      "line": 63,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;10"
    },
    {
      "cells": [
        "file10.csv",
        "RK66PFF",
        "AUDI",
        "WHITE",
        "match",
        "AUDI",
        "WHITE"
      ],
      "line": 64,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;11"
    },
    {
      "cells": [
        "file11.csv",
        "1234567",
        "BMW",
        "ORANGE",
        "error",
        "BMW",
        "ORANGE"
      ],
      "line": 65,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;12"
    },
    {
      "cells": [
        "file12.csv",
        "GX18HBK",
        "AUDI",
        "BLUE",
        "not be found",
        "BMW",
        "BLUE"
      ],
      "line": 66,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;13"
    },
    {
      "cells": [
        "file14.csv",
        "NG08NNT",
        "FORD",
        "BLACK",
        "match",
        "FORD",
        "BLACK"
      ],
      "line": 67,
      "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;14"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38800,
  "status": "passed"
});
formatter.before({
  "duration": 28800,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file1.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration NG07NNT with make of FORD with a colour of BLUE  will match the service with make of FORD with a colour of BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 84200,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 4969800,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file1.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NG07NNT",
      "offset": 37
    },
    {
      "val": "FORD",
      "offset": 58
    },
    {
      "val": "BLUE",
      "offset": 80
    },
    {
      "val": "match",
      "offset": 91
    },
    {
      "val": "FORD",
      "offset": 122
    },
    {
      "val": "BLUE",
      "offset": 144
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10900,
  "status": "passed"
});
formatter.after({
  "duration": 12400,
  "status": "passed"
});
formatter.before({
  "duration": 29600,
  "status": "passed"
});
formatter.before({
  "duration": 19100,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file2.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration GX18HBL with make of AUDI with a colour of BLACK  will match the service with make of AUDI with a colour of BLACK",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 76100,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 6638000,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file2.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GX18HBL",
      "offset": 37
    },
    {
      "val": "AUDI",
      "offset": 58
    },
    {
      "val": "BLACK",
      "offset": 80
    },
    {
      "val": "match",
      "offset": 92
    },
    {
      "val": "AUDI",
      "offset": 123
    },
    {
      "val": "BLACK",
      "offset": 145
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10600,
  "status": "passed"
});
formatter.after({
  "duration": 7200,
  "status": "passed"
});
formatter.before({
  "duration": 46700,
  "status": "passed"
});
formatter.before({
  "duration": 42100,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file3.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration V765DPR with make of HYUNDAI with a colour of SILVER  will not match the service with make of HYUNDAI with a colour of SILVER",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 1137700,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7387500,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file3.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "V765DPR",
      "offset": 37
    },
    {
      "val": "HYUNDAI",
      "offset": 58
    },
    {
      "val": "SILVER",
      "offset": 83
    },
    {
      "val": "not match",
      "offset": 96
    },
    {
      "val": "HYUNDAI",
      "offset": 131
    },
    {
      "val": "SILVER",
      "offset": 156
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12100,
  "status": "passed"
});
formatter.after({
  "duration": 8300,
  "status": "passed"
});
formatter.before({
  "duration": 30400,
  "status": "passed"
});
formatter.before({
  "duration": 31000,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file4.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration GJ13EBK with make of HONDA with a colour of RED  will match the service with make of HONDA with a colour of RED",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 102300,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 12062000,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file4.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GJ13EBK",
      "offset": 37
    },
    {
      "val": "HONDA",
      "offset": 58
    },
    {
      "val": "RED",
      "offset": 81
    },
    {
      "val": "match",
      "offset": 91
    },
    {
      "val": "HONDA",
      "offset": 122
    },
    {
      "val": "RED",
      "offset": 145
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10700,
  "status": "passed"
});
formatter.after({
  "duration": 10400,
  "status": "passed"
});
formatter.before({
  "duration": 35800,
  "status": "passed"
});
formatter.before({
  "duration": 25900,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file5.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration LA12GZC with make of NISSAN with a colour of BLUE  will match the service with make of NISSAN with a colour of BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 87400,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 6406700,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file5.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LA12GZC",
      "offset": 37
    },
    {
      "val": "NISSAN",
      "offset": 58
    },
    {
      "val": "BLUE",
      "offset": 82
    },
    {
      "val": "match",
      "offset": 93
    },
    {
      "val": "NISSAN",
      "offset": 124
    },
    {
      "val": "BLUE",
      "offset": 148
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8100,
  "status": "passed"
});
formatter.after({
  "duration": 7300,
  "status": "passed"
});
formatter.before({
  "duration": 26000,
  "status": "passed"
});
formatter.before({
  "duration": 25000,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file6.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration GJ13EBX with make of CITROEN with a colour of WHITE  will match the service with make of CITROEN with a colour of WHITE",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 75900,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 5541100,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file6.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GJ13EBX",
      "offset": 37
    },
    {
      "val": "CITROEN",
      "offset": 58
    },
    {
      "val": "WHITE",
      "offset": 83
    },
    {
      "val": "match",
      "offset": 95
    },
    {
      "val": "CITROEN",
      "offset": 126
    },
    {
      "val": "WHITE",
      "offset": 151
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10200,
  "status": "passed"
});
formatter.after({
  "duration": 7900,
  "status": "passed"
});
formatter.before({
  "duration": 28400,
  "status": "passed"
});
formatter.before({
  "duration": 28500,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file7.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration YS59ABZ with make of BMW with a colour of BLUE  will match the service with make of BMW with a colour of BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 90300,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 6759100,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file7.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "YS59ABZ",
      "offset": 37
    },
    {
      "val": "BMW",
      "offset": 58
    },
    {
      "val": "BLUE",
      "offset": 79
    },
    {
      "val": "match",
      "offset": 90
    },
    {
      "val": "BMW",
      "offset": 121
    },
    {
      "val": "BLUE",
      "offset": 142
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9100,
  "status": "passed"
});
formatter.after({
  "duration": 5500,
  "status": "passed"
});
formatter.before({
  "duration": 26600,
  "status": "passed"
});
formatter.before({
  "duration": 18100,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file8.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration P1LOT with make of BMW with a colour of BLACK  will match the service with make of BMW with a colour of BLACK",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 103600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7823600,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file8.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "P1LOT",
      "offset": 37
    },
    {
      "val": "BMW",
      "offset": 56
    },
    {
      "val": "BLACK",
      "offset": 77
    },
    {
      "val": "match",
      "offset": 89
    },
    {
      "val": "BMW",
      "offset": 120
    },
    {
      "val": "BLACK",
      "offset": 141
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11800,
  "status": "passed"
});
formatter.after({
  "duration": 9000,
  "status": "passed"
});
formatter.before({
  "duration": 32400,
  "status": "passed"
});
formatter.before({
  "duration": 27100,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file9.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration PK66PFF with make of MINI with a colour of BLUE  will match the service with make of MINI with a colour of BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 6417800,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file9.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PK66PFF",
      "offset": 37
    },
    {
      "val": "MINI",
      "offset": 58
    },
    {
      "val": "BLUE",
      "offset": 80
    },
    {
      "val": "match",
      "offset": 91
    },
    {
      "val": "MINI",
      "offset": 122
    },
    {
      "val": "BLUE",
      "offset": 144
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9000,
  "status": "passed"
});
formatter.after({
  "duration": 6600,
  "status": "passed"
});
formatter.before({
  "duration": 27800,
  "status": "passed"
});
formatter.before({
  "duration": 23200,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file10.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration RK66PFF with make of AUDI with a colour of WHITE  will match the service with make of AUDI with a colour of WHITE",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7133200,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file10.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RK66PFF",
      "offset": 37
    },
    {
      "val": "AUDI",
      "offset": 58
    },
    {
      "val": "WHITE",
      "offset": 80
    },
    {
      "val": "match",
      "offset": 92
    },
    {
      "val": "AUDI",
      "offset": 123
    },
    {
      "val": "WHITE",
      "offset": 145
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7600,
  "status": "passed"
});
formatter.after({
  "duration": 5000,
  "status": "passed"
});
formatter.before({
  "duration": 21500,
  "status": "passed"
});
formatter.before({
  "duration": 16200,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file11.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration 1234567 with make of BMW with a colour of ORANGE  will error the service with make of BMW with a colour of ORANGE",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 95600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7554800,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file11.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567",
      "offset": 37
    },
    {
      "val": "BMW",
      "offset": 58
    },
    {
      "val": "ORANGE",
      "offset": 79
    },
    {
      "val": "error",
      "offset": 92
    },
    {
      "val": "BMW",
      "offset": 123
    },
    {
      "val": "ORANGE",
      "offset": 144
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12000,
  "status": "passed"
});
formatter.after({
  "duration": 7400,
  "status": "passed"
});
formatter.before({
  "duration": 27100,
  "status": "passed"
});
formatter.before({
  "duration": 22400,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file12.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration GX18HBK with make of AUDI with a colour of BLUE  will not be found the service with make of BMW with a colour of BLUE",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 92600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7686700,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file12.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GX18HBK",
      "offset": 37
    },
    {
      "val": "AUDI",
      "offset": 58
    },
    {
      "val": "BLUE",
      "offset": 80
    },
    {
      "val": "not be found",
      "offset": 91
    },
    {
      "val": "BMW",
      "offset": 129
    },
    {
      "val": "BLUE",
      "offset": 150
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9800,
  "status": "passed"
});
formatter.after({
  "duration": 7800,
  "status": "passed"
});
formatter.before({
  "duration": 29700,
  "status": "passed"
});
formatter.before({
  "duration": 24700,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "The information in the files read by the service match or not match the details on the website",
  "description": "",
  "id": "service;the-information-in-the-files-read-by-the-service-match-or-not-match-the-details-on-the-website;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "the service reads files from directory testfiles",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the service is evoked",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "registration numbers from each file with file14.csv is entered into the website inturn",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the website details for registration NG08NNT with make of FORD with a colour of BLACK  will match the service with make of FORD with a colour of BLACK",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceRunSteps.testServiceReadsDirectoryTestfiles1()"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRunSteps.testServiceIsEvoked()"
});
formatter.result({
  "duration": 7384400,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.ServiceRunSteps.testServiceIsEvoked(ServiceRunSteps.java:62)\r\n\tat ✽.When the service is evoked(features/service.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "file14.csv",
      "offset": 41
    }
  ],
  "location": "ServiceRunSteps.testRegistrationNumbersFromEachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NG08NNT",
      "offset": 37
    },
    {
      "val": "FORD",
      "offset": 58
    },
    {
      "val": "BLACK",
      "offset": 80
    },
    {
      "val": "match",
      "offset": 92
    },
    {
      "val": "FORD",
      "offset": 123
    },
    {
      "val": "BLACK",
      "offset": 145
    }
  ],
  "location": "ServiceRunSteps.testWebsiteMatchOrNot(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8300,
  "status": "passed"
});
formatter.after({
  "duration": 7700,
  "status": "passed"
});
formatter.uri("features/user.feature");
formatter.feature({
  "line": 1,
  "name": "user",
  "description": "As a user of the website I want to be able to enter a vehicle registration number and get\nthe correct make and colour of the cars I own back from the website.",
  "id": "user",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1255000,
  "status": "passed"
});
formatter.before({
  "duration": 39800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "The user enters a correctly formated registration plate",
  "description": "",
  "id": "user;the-user-enters-a-correctly-formated-registration-plate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am a user of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter a correct registration plate of NG07NNT",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "press continue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I will receive the correct make as FORD and colour of car as BLUE",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRunSteps.testUserWebsite()"
});
formatter.result({
  "duration": 6725200,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.UserRunSteps.testUserWebsite(UserRunSteps.java:41)\r\n\tat ✽.Given I am a user of the website(features/user.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserRunSteps.testCorrectRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserRunSteps.testPressContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserRunSteps.testCorrect()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9100,
  "status": "passed"
});
formatter.after({
  "duration": 8700,
  "status": "passed"
});
formatter.before({
  "duration": 22800,
  "status": "passed"
});
formatter.before({
  "duration": 15500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "The user enters a invalid registration plate",
  "description": "",
  "id": "user;the-user-enters-a-invalid-registration-plate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am a user of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter a correctly formatted invalid registration plate of V765DPR",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "press continue",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I will be taken to an error page",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRunSteps.testUserWebsite()"
});
formatter.result({
  "duration": 9283600,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.UserRunSteps.testUserWebsite(UserRunSteps.java:41)\r\n\tat ✽.Given I am a user of the website(features/user.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserRunSteps.testCorrectFormatedInvalidRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserRunSteps.testPressContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserRunSteps.testErrorPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 218200,
  "status": "passed"
});
formatter.after({
  "duration": 9000,
  "status": "passed"
});
formatter.before({
  "duration": 28000,
  "status": "passed"
});
formatter.before({
  "duration": 20800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "The user enters an incorrectly formatted registration plate",
  "description": "",
  "id": "user;the-user-enters-an-incorrectly-formatted-registration-plate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am a user of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter a incorrectly formatted registraton plate of AB343467",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "press continue",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I will receive an error messsage on the same page",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRunSteps.testUserWebsite()"
});
formatter.result({
  "duration": 6488200,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat selenium.vehicleEnquiry.FirefoxVehicleEnquiry.\u003cinit\u003e(FirefoxVehicleEnquiry.java:30)\r\n\tat cucumberSelenium.UserRunSteps.testUserWebsite(UserRunSteps.java:41)\r\n\tat ✽.Given I am a user of the website(features/user.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserRunSteps.testIncorrectlyFormatRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserRunSteps.testPressContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserRunSteps.testErrorMessageSamePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9300,
  "status": "passed"
});
formatter.after({
  "duration": 7700,
  "status": "passed"
});
});