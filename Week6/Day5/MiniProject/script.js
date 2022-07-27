let quoteList = [
  {
    id: 0,
    author: "George Lucas",
    quote: "Embrace Others For Their Differences For That Makes You Whole.",
    likes: 0,
  },
  {
    id: 1,
    author: "John Williams",
    quote:
      "Truth Enlightens The Mind, But Won’t Always Bring Happiness To Your Heart.",
    likes: 0,
  },
  {
    id: 2,
    author: "Dave Filoni",
    quote: "Easy is the path to wisdom for those not blinded by ego.",
    likes: 0,
  },
  {
    id: 3,
    author: "Mark Hamill",
    quote:
      "The winding path to peace is always a worthy one, regardless of how many turns it takes.",
    likes: 0,
  },
];

function generateQuote() {
  let previousQuote = section.innerHTML;
  let chosenQuote, id;
  do {
    id = Math.floor(Math.random() * quoteList.length);
    chosenQuote = quoteList[id].quote;
  } while (chosenQuote === previousQuote);
  section.innerHTML = chosenQuote;
  let numOfLikes = quoteList[id].likes;
  likeSpan.innerHTML = numOfLikes;

  charSpan.innerHTML = "";
  charNoSpaceSpan.innerHTML = "";
  wordSpan.innerHTML = "";
  likeButton.style.color = "black";
}

function getQuoteChars(q) {
  return q.length;
}

function getQuoteCharsWithoutSpaces(q) {
  let count = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] !== " ") count++;
  }
  return count;
}

function getWords(q) {
  return q.split(" ").length;
}

function addLike(id) {
  quoteList[id].likes++;
  return quoteList[id].likes;
}

function getQuotesByAuthor(author) {
  let quotes = [];
  quoteList.forEach((q) => {
    if (q.author === author) quotes.push(q.quote);
  });
  return quotes;
}

let section = document.querySelector("section");
let generateButton = document.querySelector("#generate");
let addButton = document.querySelector("#add");
let charsButton = document.querySelector("#chars");
let charSpan = document.querySelector("#charText");
let charsNoSpaceButton = document.querySelector("#charsNoSpace");
let charNoSpaceSpan = document.querySelector("#charsNoSpaceText");
let wordsButton = document.querySelector("#words");
let wordSpan = document.querySelector("#wordsText");
let likeButton = document.querySelector("#like");
let likeSpan = document.querySelector("#likeText");
let authorButton = document.querySelector("#filterButton");
let authorUl = document.querySelector("#quoteList");
let previousButton = document.querySelector("#previousButton");
let nextButton = document.querySelector("#nextButton");

generateButton.addEventListener("click", generateQuote);

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  let quote = document.forms["quoteForm"]["quote"].value;
  let author = document.forms["quoteForm"]["author"].value;
  let id = quoteList.length;
  quoteList.push({
    id: id,
    author: author,
    quote: quote,
    likes: 0,
  });
  document.forms["quoteForm"]["quote"].value = "";
  document.forms["quoteForm"]["author"].value = "";
});

charsButton.addEventListener("click", function () {
  let chars = getQuoteChars(section.innerHTML);
  charSpan.innerHTML = chars;
});

charsNoSpaceButton.addEventListener("click", function () {
  let chars = getQuoteCharsWithoutSpaces(section.innerHTML);
  charNoSpaceSpan.innerHTML = chars;
});

wordsButton.addEventListener("click", function () {
  let words = getWords(section.innerHTML);
  wordSpan.innerHTML = words;
});

likeButton.addEventListener("click", function () {
  let quote = section.innerHTML;
  let likes;
  for (id in quoteList) {
    if (quoteList[id].quote === quote) {
      likes = addLike(id);
      likeSpan.innerHTML = likes;
      likeButton.style.color = "#0388fc";
    }
  }
});

authorButton.addEventListener("click", function (event) {
  event.preventDefault();
  authorUl.innerHTML = "";
  let author = document.forms["authorFilter"]["author"].value;
  let quotes = getQuotesByAuthor(author);
  if (quotes.length === 0) {
    authorUl.innerHTML = "No quotes from this author...";
    previousButton.hidden = true;
    nextButton.hidden = true;
    return;
  }
  for (let q in quotes) {
    if (q == 0) authorUl.innerHTML += `<li>${quotes[q]}</li>`;
    else authorUl.innerHTML += `<li hidden="true">${quotes[q]}</li>`;
  }
  previousButton.hidden = false;
  nextButton.hidden = false;
});

previousButton.addEventListener("click", function (event) {
  event.preventDefault();
  let quotesByAuthor = [...document.querySelectorAll("li")];
  for (let q in quotesByAuthor) {
    if (quotesByAuthor[q].hidden == false) {
      if (q == 0) {
        quotesByAuthor[q].hidden = true;
        quotesByAuthor[quotesByAuthor.length - 1].hidden = false;
      } else {
        quotesByAuthor[q].hidden = true;
        quotesByAuthor[q - 1].hidden = false;
      }
      return;
    }
  }
});

nextButton.addEventListener("click", function (event) {
  event.preventDefault();
  let quotesByAuthor = [...document.querySelectorAll("li")];
  for (let q in quotesByAuthor) {
    if (quotesByAuthor[q].hidden == false) {
      if (q == quotesByAuthor.length - 1) {
        quotesByAuthor[q].hidden = true;
        quotesByAuthor[0].hidden = false;
      } else {
        quotesByAuthor[q].hidden = true;
        quotesByAuthor[Number(q) + 1].hidden = false;
      }
      return;
    }
  }
});
