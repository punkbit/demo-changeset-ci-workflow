import pkg from '../package.json';

export function greet(name: string): string {
  return `Hello again, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
