const express = require("express");
const cors = require("cors");

const shoppingList = []

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public"));

app.get("/getList", (req, res) => {
    const item = req.query.item;
    const amount  = req.query.amount;
    const itemIndex = shoppingList.findIndex((element) => element.item == item);
    if (itemIndex === -1) {
        shoppingList.push({item, amount});
    }
    else {
        const currentAmount = Number(shoppingList[itemIndex].amount);
        shoppingList[itemIndex].amount = Number(amount) + currentAmount;
    }
    let response = "<html><body><ul>";
    shoppingList.forEach((i) => {
        response += `<li>${i.item}: ${i.amount}</li>`;
    });
    return res.status(200).send(response);
});

app.listen(5000, () => {
    console.log("Server running on 5000");
})