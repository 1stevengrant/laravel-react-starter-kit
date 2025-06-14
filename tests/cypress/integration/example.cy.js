describe('Home Page', () => {
    it('shows the welcome page', () => {
        cy.visit('/');
        
        cy.get('header nav').should('be.visible');
        cy.contains('Log in').should('be.visible');
        cy.contains('Register').should('be.visible');
    });
    
    it('navigates to login page', () => {
        cy.visit('/');
        
        cy.contains('Log in').click();
        cy.url().should('include', '/login');
    });
    
    it('navigates to register page', () => {
        cy.visit('/');
        
        cy.contains('Register').click();
        cy.url().should('include', '/register');
    });
});
