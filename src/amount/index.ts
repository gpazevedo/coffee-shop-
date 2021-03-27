export function amount(value: number, decimals = 2): number  {
  const factor = Math.round(10 ** decimals)
  return Math.round(value * factor) / factor
}
