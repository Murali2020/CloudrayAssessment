import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import homePage from '../pageObjects/homePage'
import jobDashboardPage from '../pageObjects/jobsDashboardPage'

const homepage= new homePage
const dashboardPage=new jobDashboardPage

Given('Naviage to Home screen',()=>{
    homepage.openApplication()
})

When('Click on Caregivers tab in the menu',()=>{
    homepage.openJobsDashboard()
})

Then('Genie Healthcare Jobs dashboard is opened',()=>{
    dashboardPage.verifyDashboardPageOpened()
})

When('Note the first job details like JobId, State, City, Shift and Specialty',()=>{
    dashboardPage.storeJobDetails()
})

And('Click on first job Id',()=>{
    dashboardPage.openFirstJob()
})

Then('Job Details screen for first job id is displayed',()=>{
    dashboardPage.verifyJobDetailsScreen()
})

And('Verify JobId, State, City, Shift and Specialty from Job details screen matches Jobs dashboard for given job id',()=>{
    dashboardPage.verifyJobDataInJobDetailsScreen()
})