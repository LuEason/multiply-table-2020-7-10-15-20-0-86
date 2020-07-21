function createMultiplyTable(start, end) {
  if (isNumbersValid(start, end)) {
    return printAllLines(start, end);
  }
  return null;
}

function isNumbersValid(start, end) {
  return start <= end && start >=1 && start <= 1000 && end >=1 && end <= 1000;
}

function printAllLines(start, end) {
  let output = [];
  for (let i = start; i <= end; i++) {
    output.push(printOneLine(start, i));
  }
  return output.join('\n');
}

function printOneLine(start, end) {
  let output = [];
  for (let i = start; i <= end; i++) {
    output.push(printAMultiply(i, end));
  }
  return output.join('\t');
}

function printAMultiply(multiplicand, multiplier) {
  return multiplicand + '*' + multiplier + '=' + (multiplicand * multiplier);
}

module.exports = {
  createMultiplyTable,
};
