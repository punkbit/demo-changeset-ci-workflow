import pkg from '../package.json';

export function greet(name: string): string {
  // THIS IS THE PATCH 19feb14h31
  return `Hello, feat ABC, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
