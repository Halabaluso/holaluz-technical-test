describe('Form functionality', () => {
    it('Form functionality if we type a bad or empty cup', () => {
      cy.visit('/')
      cy.get("#startbu").click()

      cy.log("We type bad cup")
      cy.get("#searchcup").type("123457")
      cy.get("#searchcupform").submit()
      cy.get(".alert-error")
      cy.log("Alert error ok")
    })

    it('Form functionality if we type a correct cup', () => {
      cy.visit('/')
      cy.get("#startbu").click()

      cy.log("We type a good cup")
      cy.get("#searchcup").type("123456")
      cy.get("#searchcupform").submit()
      cy.get(".alert-success")
      cy.log("Alert ok")
    })
  })