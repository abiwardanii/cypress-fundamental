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
    it('Upload some photos', () => {
        const photos = [
            {
                imageValue:'https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9rZW1vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                descriptionValue: 'pokeball 1',
                
            },
            {
                imageValue:'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
                descriptionValue: 'pokeball 2',
                
            },
        ];
        photos.forEach(({imageValue, descriptionValue}) => {
            const image = cy.get("input[name='image']");
            image.type(imageValue)

            const description = cy.get("input[name='desc']");
            description.type(descriptionValue)

            const button = cy.get('button');
            button.click();

            //check uploaded images is exist
            cy.get("img").should('have.attr','src',imageValue);
            cy.contains(descriptionValue)
             
        })

        cy.contains(`Found ${photos.length} photos`)
    });
 })