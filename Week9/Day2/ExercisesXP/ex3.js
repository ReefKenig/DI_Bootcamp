const p1 = Promise.resolve(3);
const p2 = Promise.reject("Boo");
p1.then((res) => console.log(res));
p2.catch((res) => console.log(res));
