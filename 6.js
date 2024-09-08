function copyUser(user) {
  return { ...user };
}
const user = { firstName: "John", lastName: "Doe" };
const userCopy = copyUser(user);
console.log(userCopy);
