import { Locator, Page } from '@playwright/test';

export class LoginLocator {
    // Login Page
    public readonly usernameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly loginButton: Locator;

    // Dashboard
    public readonly messageIcon: Locator;
    public readonly notificationIcon: Locator;

    constructor(private readonly page: Page) {
        // Login Page
        this.usernameInput = page.getByPlaceholder('you@example.com');

        this.passwordInput = page.getByPlaceholder('Please enter your password');

        this.loginButton = page.getByRole('button', {
            name: 'Log in',
        });

        // Dashboard
        this.messageIcon = page.getByRole('button', {
            name: 'Open messages',
        });

        this.notificationIcon = page.getByRole('button', {
            name: 'Open notifications',
        });
    }
}