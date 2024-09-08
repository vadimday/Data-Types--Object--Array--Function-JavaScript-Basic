function numbers(...args) {
  return args.filter((arg) => typeof arg === "number").length;
}

console.log(numbers(1, 2, "a"));
console.log(numbers(true, 2, false));
console.log(numbers());
