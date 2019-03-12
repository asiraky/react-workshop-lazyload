export default function computeHSLRainbowColor(n, period = 100) {
  return `hsl(${Math.round((n / period) * 360)},100%,50%)`;
}
