export function isEmpty(obj: unknown): boolean {
  if (obj === null || obj === undefined) return true
  if (typeof obj === 'object') return Object.keys(obj).length === 0
  return false
}

export function invariant(condition: unknown, error: Error): asserts condition {
  if (!condition) throw error
}
