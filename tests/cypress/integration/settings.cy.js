describe('Settings', () => {
    beforeEach(() => {
        cy.refreshDatabase();
        cy.login();
    });

    it('allows users to update their profile', () => {
        cy.visit('/settings/profile');
        
        cy.get('[name="name"]').clear().type('Updated Name');
        cy.get('[name="email"]').clear().type('updated@example.com');
        
        cy.get('button[type="submit"]').click();
        
        cy.contains('Profile updated successfully').should('be.visible');
    });

    it('allows users to change their password', () => {
        cy.visit('/settings/password');
        
        cy.get('[name="current_password"]').type('password');
        cy.get('[name="new_password"]').type('newpassword123');
        cy.get('[name="new_password_confirmation"]').type('newpassword123');
        
        cy.get('button[type="submit"]').click();
        
        cy.contains('Password updated successfully').should('be.visible');
    });

    it('allows users to change appearance settings', () => {
        cy.visit('/settings/appearance');
        
        cy.get('[data-testid="theme-toggle"]').should('be.visible');
        cy.get('[data-testid="theme-toggle"]').click();
        
        // Check if theme changed
        cy.get('html').should('have.class', 'dark');
    });
});