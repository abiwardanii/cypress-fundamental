describe('Dashboard Page Test Case', () => { 
    it('Do login with correct values',() => {
        cy.visit("http://localhost:3000");
        const email = cy.get("input[name='email']");
        email.type("user@react.test")

        const password = cy.get("input[name='password']");
        password.type("password");

        const button = cy.get("button");
        button.click();

        cy.on("window:alert",(text) => {
            expect(text).to.contains("welcome");
        });

        cy.url().should('eq','http://localhost:3000/dashboard');
    })

    it('Found no post for the first time', () => {
        cy.contains("Found 0 photos")
    });
 })