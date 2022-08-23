describe('Login Page Test Case', () => { 
    //check login page
    it('Visit Login Page', () => {
        cy.visit('http://localhost:3000');
        cy.title().should("eq","React Gallery");
        cy.contains("Hello Again");
    });

 })