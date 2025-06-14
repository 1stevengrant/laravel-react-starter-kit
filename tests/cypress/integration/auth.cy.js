describe('Authentication', () => {
    beforeEach(() => {
        cy.refreshDatabase();
    });

    it('allows user registration', () => {
        cy.visit('/register');
        
        cy.get('[name="name"]').type('Test User');
        cy.get('[name="email"]').type('test@example.com');
        cy.get('[name="password"]').type('password123');
        cy.get('[name="password_confirmation"]').type('password123');
        
        cy.get('button[type="submit"]').click();
        
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible');
    });

    it('allows user login', () => {
        cy.create('App\\Models\\User', {
            email: 'test@example.com',
            password: 'password123'
        });

        cy.visit('/login');
        
        cy.get('[name="email"]').type('test@example.com');
        cy.get('[name="password"]').type('password123');
        
        cy.get('button[type="submit"]').click();
        
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible');
    });

    it('shows validation errors for invalid login', () => {
        cy.visit('/login');
        
        cy.get('[name="email"]').type('invalid@example.com');
        cy.get('[name="password"]').type('wrongpassword');
        
        cy.get('button[type="submit"]').click();
        
        cy.contains('These credentials do not match our records').should('be.visible');
    });

    it('allows user logout', () => {
        cy.login();
        
        cy.visit('/dashboard');
        cy.get('[data-testid="user-menu"]').click();
        cy.contains('Log Out').click();
        
        cy.url().should('include', '/');
        cy.contains('Log in').should('be.visible');
    });
});