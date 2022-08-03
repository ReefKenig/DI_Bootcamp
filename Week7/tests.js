let users = {
  user1: {
    age: 44,
    name: "Picard",
  },
  user2: {
    age: 12,
    name: "Sisko",
  },
  user3: {
    age: 109,
    Name: "Janeway",
  },
};

let userKeys = Object.keys(users);
const adults = userKeys
  .filter((key) => users[key].age > 30)
  .map((id) => ({ id, ...users[id] }));

console.log(adults);
