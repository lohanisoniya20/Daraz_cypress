context('Daraz_assignment',()=>{
    beforeEach(() => {
        cy.visit('https://www.daraz.com.np/')
})
    it('login scenario',()=> {  
    cy.get('#anonLogin > .grey') .click()
    cy.get('.mod-login-input-loginName > input') .click().type('soni.daraz@mailinator.com')
    cy.get('.mod-login-input-password > input') .click().type('Soniya@123')
    cy.get('.next-btn') .click()
})
    it.skip('Search scenario',()=> {
    cy.get('#q',{timeout:10000}) .should('be.visible').click().type("mobile").type('{enter}')
    cy.url().should('include', 'q=mobile')
    cy.get(':nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(4) > .ant-checkbox > .ant-checkbox-input').scrollIntoView()
    .click()
    cy.wait(2000)
    cy.get('[placeholder="Min"]') .should('be.visible').click().type("10000")
    cy.get('[placeholder="Max"]') .should('be.visible').click().type("50000")
    cy.get('.ant-btn') .click()
    cy.get(':nth-child(3) > .ant-rate > :nth-child(3) > .ant-rate-star-second > .lzd-search-common-icon').scrollIntoView()
    .click()
})
it('sort scenario',()=> { 
    cy.get(".ant-select-selection").should('be.visible').click({force: true})
    cy.get("li[title='Price low to high']").should('be.visible').click()

})
})