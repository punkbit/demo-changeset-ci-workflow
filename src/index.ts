import pkg from '../package.json';

export function greet(name: string): string {
  // SOME CHANGE 202602241146
  return `Hello, it's a patch over v1.1.0, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
