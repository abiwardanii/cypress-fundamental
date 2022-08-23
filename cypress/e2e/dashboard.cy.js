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

    //Publish form
    it('Contains Image url and description input and Publish button', () => {
        //check image
        const image = cy.get("input[name='image']");
        image.should('be.visible');
        image.should('have.attr','type','url');
        image.should('have.attr','required','required');
        image.should('have.attr','placeholder','Image URL');

        //check description
        const description = cy.get("input[name='desc']");
        description.should('be.visible');
        description.should('have.attr','type','text');
        description.should('have.attr','required','required');
        description.should('have.attr','placeholder',"What's on your mind?");

        //check publish button
        const button = cy.get('button');
        button.should("be.visible");
        button.contains("Publish!");
        button.should("have.css","background-color","rgb(79, 70, 229)");
        button.should("have.css","color","rgb(255, 255, 255)");
    });
 })