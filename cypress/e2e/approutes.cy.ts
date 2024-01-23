describe('App go to / route if UserStore is {}', () => {
  it('visits the app root url', () => {
    cy.visit('/client')
    cy.get("#startbu")
    
    cy.visit('/search')
    cy.get("#startbu")

    cy.log("App go / route if User data is empty")
  })
})
