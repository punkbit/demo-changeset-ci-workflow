import pkg from '../package.json';

export function greet(name: string): string {
  return `Hello once again??? ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
