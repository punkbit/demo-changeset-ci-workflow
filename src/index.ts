import pkg from '../package.json';

export function greet(name: string): string {
  // SOME CHANGE 202603051323
  return `Hello, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
