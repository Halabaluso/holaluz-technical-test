describe('Search form functionality', () => {
    it('visits the app root url', () => {
      cy.visit('/')
      cy.get("#startbu").click()

      cy.log("We type bad cup")
      cy.get("#searchcup").type("123457")
      cy.get("#searchcupform").submit()
      cy.get(".alert-error")
      cy.log("Alert error ok")

      cy.get("#searchcup").clear()
      cy.log("We clear the input")

      cy.log("We type good cup")
      cy.get("#searchcup").type("123456")
      cy.get("#searchcupform").submit()
      cy.get(".alert-success")
      cy.log("Alert success ok")
    })
  })