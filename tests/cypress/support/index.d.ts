/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Log in the user with the given attributes, or create a new user and then log them in.
         *
         * @example
         * cy.login()
         * cy.login({ id: 1 })
         */
        login(attributes?: object): Chainable<unknown>;

        /**
         * Log out the current user.
         *
         * @example
         * cy.logout()
         */
        logout(): Chainable<unknown>;

        /**
         * Fetch the currently authenticated user.
         *
         * @example
         * cy.currentUser()
         */
        currentUser(): Chainable<unknown>;

        /**
         * Fetch a CSRF token from the server.
         *
         * @example
         * cy.logout()
         */
        csrfToken(): Chainable<unknown>;

        /**
         * Fetch a fresh list of URI routes from the server.
         *
         * @example
         * cy.logout()
         */
        refreshRoutes(): Chainable<unknown>;

        /**
         * Create and persist a new Eloquent record using Laravel model factories.
         *
         * @example
         * cy.create('App\\User');
         * cy.create('App\\User', 2);
         * cy.create('App\\User', 2, { active: false });
         * cy.create({ model: 'App\\User', state: ['guest'], relations: ['profile'], count: 2 }
         */
        create(): Chainable<unknown>;

        /**
         * Refresh the database state using Laravel's migrate:fresh command.
         *
         * @example
         * cy.refreshDatabase()
         * cy.refreshDatabase({ '--drop-views': true }
         */
        refreshDatabase(options?: object): Chainable<unknown>;

        /**
         * Run Artisan's db:seed command.
         *
         * @example
         * cy.seed()
         * cy.seed('PlansTableSeeder')
         */
        seed(seederClass?: string): Chainable<unknown>;

        /**
         * Run an Artisan command.
         *
         * @example
         * cy.artisan()
         */
        artisan(command: string, parameters?: object, options?: object): Chainable<unknown>;

        /**
         * Execute arbitrary PHP on the server.
         *
         * @example
         * cy.php('2 + 2')
         * cy.php('App\\User::count()')
         */
        php(command: string): Chainable<unknown>;
    }
}
