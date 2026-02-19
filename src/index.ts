import pkg from '../package.json';

export function greet(name: string): string {
  return `Hello, feat ABC101112, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
