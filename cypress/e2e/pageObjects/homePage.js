import cypress from "cypress"

class homePage{

    elements={

    }

    openApplication(){
        let url=Cypress.config().baseUrl
        cy.visit(url)
    }

    openJobsDashboard(){
        cy.contains('Caregivers').trigger('mouseover')
        cy.get('li a').contains('Find a Contract').as('findJobLink')
        cy.get('@findJobLink').invoke('removeAttr','target').click()
    }
}
export default homePage