import * as dotenv from 'dotenv';
import * as path from 'path';

export class ConfigUtils {
    /**
     * Loads environment variables from the project root .env file.
     */
    public static loadEnvironment(): void {
        dotenv.config({
            path: path.resolve(process.cwd(), '.env'),
        });
    }

    /**
     * Returns the environment variable value.
     * Throws an error if the variable is missing or empty.
     *
     * @param key Environment variable name.
     * @returns Environment variable value.
     */
    public static get(key: string): string {
        const value = process.env[key];

        if (!value || value.trim() === '') {
            throw new Error(
                `Environment variable "${key}" is missing. Please verify your .env file.`,
            );
        }

        return value.trim();
    }

    /**
     * Returns a boolean environment variable.
     *
     * Accepted values:
     * - true
     * - false
     */
    public static getBoolean(key: string): boolean {
        return this.get(key).toLowerCase() === 'true';
    }

    /**
     * Returns a numeric environment variable.
     */
    public static getNumber(key: string): number {
        const value = Number(this.get(key));

        if (Number.isNaN(value)) {
            throw new Error(`Environment variable "${key}" must be a valid number.`);
        }

        return value;
    }
}