import pkg from '../package.json';

export function greet(name: string): string {
  // THIS IS THE PATCH 19feb19h32
  return `Hello, feat ABC, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
