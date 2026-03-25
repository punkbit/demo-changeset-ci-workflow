import pkg from '../package.json';

export function greet(name: string): string {
  // I got some changes 25 March 10:47am
  return `Hello, ${name}!`;
}

export function getVersion(): string {
  return pkg.version;
}
