describe('Pruebas de login', () => {
    beforeEach(()=>{
        cy.visit('https://automationintesting.online/admin/')
    })

    it('Login exitoso',()=>{
    
        cy.get('#username').type('admin')
        cy.get('#password').type('password')
        cy.get('#doLogin').click()
        cy.url().should('include','/admin/')

    })

    it('Login con contrasenia incorrecta',()=>{
        // cy.log('test 2')
        cy.get('#username').type('admin')
        cy.get('#password').type('123')
        cy.get('#doLogin').click()

        cy.get('class="alert alert-danger"').should('be.visible').and('contain','Invalid credentials')

    })

    it('Login con campos vacíos',()=>{
        
        cy.get('#doLogin').click()

        cy.get('class="alert alert-danger"').should('be.visible').and('contain','Invalid credentials')

        
    })
})