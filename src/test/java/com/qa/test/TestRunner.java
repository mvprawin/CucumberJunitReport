package com.qa.test;



import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.*;
import cucumber.api.junit.Cucumber;





@RunWith(Cucumber.class)
@CucumberOptions(
	    features="src/test/resources/Features",
	    glue="stepDefinitions",
	   // plugin= {"pretty","html:target/site/cucumber-report-html","json:target/cucumber-report.json"},
	   plugin= {"pretty","html:target/cucumber-html-reports","json:target/cucumber.json",
				"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/extent-reports/report.html"},
	    monochrome=true
	    )


public class TestRunner {

}
