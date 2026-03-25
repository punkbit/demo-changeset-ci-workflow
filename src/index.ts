import pkg from '../package.json';

export function greet(name: string): string {
  // SOME CHANGE 202603251032
  return `Hello, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
