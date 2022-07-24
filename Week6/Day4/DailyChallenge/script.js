let client = "John";

let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

let displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

let cloneGroceries = () => {
  let user = client;
  client = "Betty";
  /* The user variable won't change since it is a primitive data type
  and in JS these types are passed by value and not by reference */
  let shopping = groceries;
  groceries.totalPrice = "35$";
  /* totalPrice will change since arrays 
  and objects are passed by reference */
  groceries.other.payed = false;
  /* payed will change since shopping and groceries point to the same place
   in memory so a change in one of them is enough to transform the other */
};

cloneGroceries();
