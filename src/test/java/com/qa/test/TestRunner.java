package com.qa.test;



import org.junit.runner.RunWith;

import cucumber.api.*;
import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)
@CucumberOptions(
	    features="src/test/resources/Features",
	    glue="stepDefinitions",
	   // plugin= {"pretty","html:target/site/cucumber-report-html","json:target/cucumber-report.json"},
	   plugin= {"pretty","html:target/cucumber-html-reports","json:target/cucumber.json"},
	    monochrome=true
	    )


public class TestRunner {

}
