export function hslToRgba(h: number, s: number, l: number, a: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a2 = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a2 * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);
  return `rgba(${f(0) * 255}, ${f(8) * 255}, ${f(4) * 255}, ${a})`;
}

let hue = 0;
const speed = 5; // Adjust the speed of the color change
let intervalId: number | null = null;

export function applyRainbowEffect() {
  const elements = document.querySelectorAll('.rgbtq');
  elements.forEach(element => {
    const rgbaColor = hslToRgba(hue, 100, 50, 1);
    (element as HTMLElement).style.color = rgbaColor;
  });
  hue = (hue + speed) % 360;
}

export function startRainbowEffect(interval: number = 50) {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(applyRainbowEffect, interval);
}

export function stopRainbowEffect() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}