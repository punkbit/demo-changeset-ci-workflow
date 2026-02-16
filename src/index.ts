import pkg from '../package.json';

export function greet(name: string): string {
  return `Hellooo, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
