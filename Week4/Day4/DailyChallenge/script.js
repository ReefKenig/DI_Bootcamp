function bottlesOfBeer(bottles) {
  let bottlesLeft = bottles;
  let takeOff = 1;
  while (bottlesLeft > 0) {
    if (bottlesLeft - takeOff <= 0) {
      takeOff = bottlesLeft;
    }
    let itThem = takeOff == 1 ? "it" : "them";
    console.log(`
    ${bottlesLeft} bottles of beer on the wall\n
    ${bottlesLeft} bottles of beer\n
    Take ${takeOff} down, pass ${itThem} around\n
    ${bottlesLeft - takeOff} bottles of beer on the wall`);
    bottlesLeft -= takeOff;
    takeOff++;
  }
}

const bottles = prompt("How many bottles of beer?");
bottlesOfBeer(bottles);
