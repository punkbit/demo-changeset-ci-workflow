/**
 * Demo package for showcasing changeset-based CI/CD workflow
 * @module @punkbit/demo-changeset-ci-workflow
 */

/**
 * Returns a greeting message
 * @param name - The name to greet
 * @returns A personalized greeting string
 * @example
 * ```typescript
 * import { greet } from '@punkbit/demo-changeset-ci-workflow';
 * console.log(greet('World')); // "Hello, World!"
 * ```
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Returns the package version
 * @returns The current version of the package
 * @example
 * ```typescript
 * import { getVersion } from '@punkbit/demo-changeset-ci-workflow';
 * console.log(getVersion()); // "0.0.0"
 * ```
 */
export function getVersion(): string {
  return '0.0.0';
}
