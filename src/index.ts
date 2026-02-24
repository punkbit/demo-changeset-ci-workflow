import pkg from '../package.json';

export function greet(name: string): string {
  // SOME CHANGE 202602241403
  return `Hello, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
