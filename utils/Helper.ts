import { Locator, Page } from '@playwright/test';

export class Helper {
    /**
     * Waits for the page to finish loading.
     *
     * @param page Playwright Page instance.
     */
    public static async waitForPageLoad(page: Page): Promise<void> {
        await page.waitForLoadState('networkidle');
    }

    /**
     * Clicks on a locator after ensuring it is visible.
     *
     * @param locator Target locator.
     */
    public static async click(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    /**
     * Clears the existing value and enters new text.
     *
     * @param locator Target locator.
     * @param value Text to enter.
     */
    public static async fill(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.clear();
        await locator.fill(value);
    }

    /**
     * Types text character by character.
     *
     * @param locator Target locator.
     * @param value Text to type.
     */
    public static async type(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.type(value);
    }

    /**
     * Presses a keyboard key.
     *
     * @param locator Target locator.
     * @param key Keyboard key.
     */
    public static async press(locator: Locator, key: string): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.press(key);
    }

    /**
     * Selects an option from a dropdown by value.
     *
     * @param locator Dropdown locator.
     * @param value Option value.
     */
    public static async select(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.selectOption(value);
    }

    /**
     * Uploads a file.
     *
     * @param locator File input locator.
     * @param filePath Absolute or relative file path.
     */
    public static async upload(locator: Locator, filePath: string): Promise<void> {
        await locator.setInputFiles(filePath);
    }

    /**
     * Scrolls the element into view.
     *
     * @param locator Target locator.
     */
    public static async scrollIntoView(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
    }

    /**
     * Waits for a specific amount of time.
     *
     * @param milliseconds Delay in milliseconds.
     */
    public static async wait(milliseconds: number): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
}
