import pkg from '../package.json';

export function greet(name: string): string {
  return `Hello, feat ABC456, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
