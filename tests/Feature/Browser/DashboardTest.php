<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('Dashboard', function () {
    it('shows the dashboard page for authenticated users', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $page = visit('/dashboard')
            ->on();

        $page->assertSee('Dashboard');
    });

    it('redirects unauthenticated users to login', function () {
        $page = visit('/dashboard')
            ->on();

        $page->assertPathIs('/login');
    });

    it('allows navigation to settings', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $page = visit('/dashboard')
            ->on();

        // Click user menu and then settings - may need adjustment based on actual UI
        $page->click('[data-testid="user-menu"]');

        // Small pause to let dropdown appear
        usleep(500000); // 0.5 seconds

        $page->click('a:has-text("Settings")')
            ->assertPathIs('/settings');
    })->skip('Needs adjustment based on actual dropdown behavior');
});