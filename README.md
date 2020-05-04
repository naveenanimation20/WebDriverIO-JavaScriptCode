
I have formed this repo as boilerplate project in May 2020, but could not execute it successfully due to few version mismatch issues and could not get the desired HTMl report output.
So I refactor it and enahanced with few more lines of code.

Below modificaiton done.

1. Updated latest chromedriver matching with my chrome version
2. Added Allure command line tool and generated Allure html report for sample
3. Added env variables into the scripts for environment variable to 'qa' and added script to generate report.
    Pre-requiste: 
      Java version > 8 should be installed.
      Install Allure (in MAC) => brew uninstall allure
      Install allure command line => npm install allure-commandline

### Run test
=> npm test

After test finished - in the root, allure-results folder would be created.

### Generate Allure HTML report
=> allure generate ./allure-results --clean

After above command executes successfully, 'allure-report' folder would be created.

### Navigate to allure-report folder. Open html report

=> allure open ./allure-report


<img width="1242" alt="Allure html report" src="https://user-images.githubusercontent.com/38261145/80930363-091c6000-8dab-11ea-89d4-59f6d89792de.png">
