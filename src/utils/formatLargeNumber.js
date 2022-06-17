export function formatLargeNumber(numberString) {
  return numberString !== "unknown" ? numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "?";
}