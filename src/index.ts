import pkg from '../package.json';

export function greet(name: string): string {
  return `Hello, my new feature, ${name}!`;
}

export function getVersion(): string {
  console.log(121212)
  return pkg.version;
}
