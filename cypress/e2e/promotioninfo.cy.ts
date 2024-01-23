describe('We show promotion info correctly', () => {
    it('Client with promotion', () => {
      cy.visit('/')
      cy.get("#startbu").click()

      cy.log("We type good cup with promotion ok.")
      cy.get("#searchcup").type("123456")
      cy.get("#searchcupform").submit()
        
      cy.get("#generalpromotion")
      cy.log("General promotion div is here.")
    })

    it('Client with no avaible promotion', () => {
        cy.visit('/')
        cy.get("#startbu").click()
  
        cy.log("We type good cup with not promotion.")
        cy.get("#searchcup").type("345678")
        cy.get("#searchcupform").submit()
          
        cy.get("#generalpromotion")
        cy.log("general promotion div is here.")
      })
})