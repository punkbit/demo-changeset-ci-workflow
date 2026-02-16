import pkg from '../package.json';

export function greet(name: string): string {
  return `Hello, chore changes A, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
