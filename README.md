# WebDriverIO-JavaScriptCode
WebDriverIO-JavaScriptCode

It was a forked repo from naveenanimation20.
I have cloned this repo as boilerplate project in May 2020, but could not execute it due to version mismatched npm packages.
So I have modified to run it successfully.
Below modificaitons done.

1. Updated latest chromedriver matching with my chrome version
2. Added Allure command line tool and generated Allure html report for sample
3. Added env variables into the scripts for environment variable to 'qa' and added script to generate report.
    Pre-requiste: 
      Java version > 8 should be installed.
      Install Allure (in MAC) => brew uninstall allure
      Install allure command line => npm install allure-commandline

Run test
npm test

After test finished - in the root, allure-results folder would be created.

Generate Allure HTML report
allure generate ./allure-results --clean
After above command executes successfully, 'allure-report' folder would be created.

Navigate to allure-report folder. Open html report
=> allure open ./allure-report

    
