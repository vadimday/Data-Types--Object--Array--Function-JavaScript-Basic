function reverseNumber(x) {
  if (x < 10) return x.toString();
  return (x % 10).toString() + reverseNumber(Math.floor(x / 10));
}

console.log(reverseNumber(12345));
