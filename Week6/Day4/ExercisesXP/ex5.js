function makeJuice(size) {
  let ingerdients = [];
  function addIngredients(ing1, ing2, ing3) {
    ingerdients.push(ing1, ing2, ing3);
  }
  function displayJuice() {
    let juiceText = `The client wants a ${size} juice, containing `;
    ingerdients.forEach((ing) => {
      juiceText += `${ing}`;
      if (ingerdients.indexOf(ing) < ingerdients.length - 1) {
        juiceText += ", ";
      }
    });
    document.body.innerHTML = juiceText;
  }
  addIngredients("Banana", "Melon", "Kiwi");
  addIngredients("Mango", "Honey", "Orange");
  displayJuice();
}
makeJuice("Medium");
