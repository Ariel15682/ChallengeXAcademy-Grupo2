describe('login exitoso', () => {

    beforeEach(() => {
        cy.fixture('dataUsers').as('users')
      })
    
    it('Logout desde el menú hamburguesa', function () {
        cy.login(this.users.standard_user,this.users.password)
        cy.validateInventoryPage()
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').should('be.visible').click()
        cy.url().should('contains', 'https://www.saucedemo.com/')
     })

     it('Login con usuario bloqueado (locked_out_user)', function () {
        cy.login(this.users.locked_out_user,this.users.password)
        cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
     })
})