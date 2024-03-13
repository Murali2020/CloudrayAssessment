
class jobDashboardPage {

    elements = {
        header: () => cy.get('div.genie-table-container h2'),
        firstJobLink: () => cy.get('table.jobs-table tbody tr:nth-child(3) td:nth-child(2)'),
        jobIDText:()=>cy.get('div.well h2')
    }

    verifyDashboardPageOpened() {
        cy.title().should('have.text', 'jobs')
        this.elements.header().contains('Genie Healthcare Jobs')
    }

    storeJobDetails() {
        cy.readFile('cypress/fixtures/JobData.json').then(data => {
            cy.get('table.jobs-table tbody tr:nth-child(3) td:nth-child(2)').then(jobID => {
                let jobId = jobID.text().trim()
                data.JobID = jobId
            })

            cy.get('table.jobs-table tbody tr:nth-child(3) td:nth-child(3)').then(city => {
                let cit = city.text().trim()
                data.City = cit
            })

            cy.get('table.jobs-table tbody tr:nth-child(3) td:nth-child(4)').then(state => {
                let stat = state.text().trim()
                data.State = stat
            })

            cy.get('table.jobs-table tbody tr:nth-child(3) td:nth-child(6)').then(speciality => {
                let special = speciality.text().trim()
                data.Speciality = special
            })

            cy.get('table.jobs-table tbody tr:nth-child(3) td:nth-child(7)').then(shift => {
                let shif = shift.text().trim()
                data.Shift = shif
            })
            cy.writeFile('cypress/fixtures/JobData.json', data)
        })

        cy.screenshot()
    }

    openFirstJob() {
        this.elements.firstJobLink().should('be.visible')
        this.elements.firstJobLink().click()
    }

    verifyJobDetailsScreen(){
        cy.readFile('cypress/fixtures/JobData.json').then(data => {
            let jobID=data.JobID
            this.elements.jobIDText().should('have.text',jobID)
        })  
    }

    verifyJobDataInJobDetailsScreen(){
        cy.readFile('cypress/fixtures/JobData.json').then(data => {
            let city=data.City
            let state=data.State
            let speciality=data.Speciality
            let shift=data.Shift
            
            cy.get('div.well dl dd:nth-child(2)').should('have.text',city)
            cy.get('div.well dl dd:nth-child(4)').should('have.text',state)
            cy.get('div.well dl dd:nth-child(8)').should('have.text',speciality)
            cy.get('div.well dl dd:nth-child(10)').should('have.text',shift)
        }) 
        cy.screenshot()
    }
}
export default jobDashboardPage