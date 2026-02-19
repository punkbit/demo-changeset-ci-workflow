import pkg from '../package.json';

export function greet(name: string): string {
  // THIS IS THE PATCH 19feb18h47
  return `Hello, feat ABC, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
