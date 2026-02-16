import pkg from '../package.json';

export function greet(name: string): string {
  return `Hello, this cool one here, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
