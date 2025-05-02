import { LoggerPort } from "./logger.port";

export class MoganLogger implements LoggerPort {
  log(message: string, ...meta: unknown[]): void {
    // sử dụng thư viện để logger
  }
  debug(message: string, ...meta: unknown[]): void {
    console.debug(message, meta);
  }
  error(message: string, trace?: unknown, ...meta: unknown[]): void {
    console.error(message, meta);
  }
  warn(message: string, ...meta: unknown[]): void {}
}
