function hasProperty(obj, propertyName) {
  return obj.hasOwnProperty(propertyName);
}

console.log(hasProperty({ name: "s" }, "name"));
console.log(hasProperty({ name: "Av" }, "age"));
