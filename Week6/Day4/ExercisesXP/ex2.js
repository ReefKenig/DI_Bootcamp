function KgToGDeclaration(kg) {
  return kg * 1000;
}

const KgToGExpression = function (kg) {
  return kg * 1000;
};

// Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

const KgToGArrow = (kg) => {
  return kg * 1000;
};
