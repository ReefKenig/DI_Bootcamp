let allBooks = [
  {
    title: "Star Wars The Old Republic: Revan",
    author: "Drew Karpyshyn",
    image: "https://images-na.ssl-images-amazon.com/images/I/81pVtrJRfhL.jpg",
    alreadyRead: true,
  },
  {
    title: "Falling Kingdoms",
    author: "Morgan Rhodes",
    image: "https://images-na.ssl-images-amazon.com/images/I/91sCEex6PfL.jpg",
    alreadyRead: false,
  },
];
let listBooks = document.querySelector(".listBooks");
let headers = ["Title", "Author", "Image"];
let table = document.createElement("table");
let headerRow = document.createElement("tr");
headers.forEach((headerText) => {
  let header = document.createElement("th");
  let textNode = document.createTextNode(headerText);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});
table.appendChild(headerRow);
allBooks.forEach((book) => {
  let row = document.createElement("tr");
  for (i = 0; i < Object.values(book).length - 1; i++) {
    let cell = document.createElement("td");
    if (Object.values(book)[i].endsWith(".jpg")) {
      let img = document.createElement("img");
      img.style.height = "100px";
      img.style.width = "100px";
      img.src = Object.values(book)[i];
      cell.appendChild(img);
    } else {
      let textNode = document.createTextNode(Object.values(book)[i]);
      cell.style.color = book.alreadyRead == true ? "red" : "black";
      cell.appendChild(textNode);
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
});
listBooks.appendChild(table);
