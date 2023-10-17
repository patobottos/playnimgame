import calculateSticksPerLine from "./calculateSticksPerLine";

const easyWin = (receivedValues) => {
  const sticksPerLine = calculateSticksPerLine(receivedValues);
  console.log("l6 sticksperLine", sticksPerLine);
  const numberOfEmptyLines = sticksPerLine.filter((line) => line === 0).length;
  console.log("numberOfEmptyLines", numberOfEmptyLines);
  const numberOfOnes = sticksPerLine.filter((line) => line === 1).length;
  console.log("numberOfOnes", numberOfOnes);

  /*
  // WE DETECT INDEXES WITH LINES WITH ZEROS
  const indexesLinesZero = [];
  sticksPerLine.forEach((element, index) => {
    if (element === 0) {
      indexesLinesZero.push(index);
    }
    
  });
  console.log("indexesLinesZero", indexesLinesZero);
  */

  // WE DETECT INDEX OF LINE DIFFERENT THAN 0 AND DIFFERENT THAN 1
  if (numberOfEmptyLines === 2 && numberOfOnes === 1) {
    const indexLineToErase = [];
    sticksPerLine.forEach((element, index) => {
      if (element !== 0 && element !== 1) {
        indexLineToErase.push(index);
      }
    });
    console.log("indexLineToErase", indexLineToErase[0]);
  }
};

export default easyWin;
