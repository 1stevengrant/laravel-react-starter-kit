describe('Dashboard', () => {
    beforeEach(() => {
        cy.refreshDatabase();
        cy.login();
    });

    it('shows the dashboard page for authenticated users', () => {
        cy.visit('/dashboard');
        
        cy.contains('Dashboard').should('be.visible');
        cy.get('[data-testid="user-menu"]').should('be.visible');
    });

    it('redirects unauthenticated users to login', () => {
        cy.logout();
        cy.visit('/dashboard');
        
        cy.url().should('include', '/login');
    });

    it('allows navigation to settings', () => {
        cy.visit('/dashboard');
        
        cy.get('[data-testid="user-menu"]').click();
        cy.contains('Settings').click();
        
        cy.url().should('include', '/settings');
    });
});