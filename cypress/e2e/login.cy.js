describe('Login Page Test Case', () => { 
    //check login page
    it('Visit Login Page', () => {
        cy.visit('http://localhost:3000');
        cy.title().should("eq","React Gallery");
        cy.contains("Hello Again");
    });
    
    it('Contains Email and Password Input, and Login Button', () => {
        //check email
        const email = cy.get("input[name='email']");
        email.should("be.visible");
        email.should("have.attr","type","email");
        email.should("have.attr","placeholder","Email Address")

        //check password
        const password = cy.get("input[name='password']");
        password.should("be.visible");
        password.should("have.attr","type","password"); 
        password.should("have.attr","placeholder","Password")

        //check button
        const button = cy.get("button");
        button.should("be.visible");
        button.contains("Login");
        button.should("have.css", "background-color","rgb(79, 70, 229)");
        button.should("have.css", "color","rgb(255, 255, 255)");
    });
 })