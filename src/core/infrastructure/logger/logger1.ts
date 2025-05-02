import { LoggerPort } from "./logger.port";

export class Logger1 implements LoggerPort {
  log(message: string, ...meta: unknown[]): void {
    console.log(message, meta);
  }
  debug(message: string, ...meta: unknown[]): void {
    console.debug(message, meta);
  }
  error(message: string, trace?: unknown, ...meta: unknown[]): void {
    console.error(message, meta);
  }
  warn(message: string, ...meta: unknown[]): void {}
}
