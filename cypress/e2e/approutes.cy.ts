describe('App go to / route if UserStore is {}', () => {
  it('visits /client url', () => {
    cy.visit('/client')
    cy.get("#startbu")
    cy.log("App go / route if User data is empty")
  })

  it("Visit /search url", () => {
    cy.visit('/search')
    cy.get("#startbu")
    cy.log("App go / route if User data is empty")
  })
})
