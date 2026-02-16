import pkg from '../package.json';

export function greet(name: string): string {
  // THIS IS THE PATCH 123
  return `Hello, chore changes A, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
