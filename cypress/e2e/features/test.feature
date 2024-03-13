Feature: Verify job details in geniehealthcare

Scenario: Verify Apply job layover is displayed on clicking Apply now button on searched job id
Given Naviage to Home screen
When Click on Caregivers tab in the menu
Then Genie Healthcare Jobs dashboard is opened
When Note the first job details like JobId, State, City, Shift and Specialty
And Click on first job Id
Then Job Details screen for first job id is displayed
And Verify JobId, State, City, Shift and Specialty from Job details screen matches Jobs dashboard for given job id
