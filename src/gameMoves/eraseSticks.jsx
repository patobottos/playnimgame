import { useState } from "react";

const eraseSticks = (stickPosition, allValues) => {
  console.log("stickPosition at erase", stickPosition);
  //console.log("allValues at erase", allValues);
  // console.log("Selected line: ", selectedLine);

  let selectedLine = allValues[stickPosition].lineId;
  console.log("Selected line: ", selectedLine);

  if (allValues[stickPosition].stickValue === 0) {
    alert("You are picking a stick already erased. Pick a valid one, please.");
    return allValues;
  } else {
    console.log(
      "allValues[stickPosition].lineId",
      allValues[stickPosition].lineId
    );
    if (allValues[stickPosition].lineId !== selectedLine) {
      console.log("Se ha clicado en palos de diferente línea");
      alert(
        "In each move, you can remove any number of matches but only from one row."
      );
      selectedLine = "";
      return allValues;
    } else {
      allValues.map((item) => {
        if (item.lineId !== selectedLine) {
          item.lineEnabled = false;
        }
      });
      const modifiedStick = {
        ...allValues[stickPosition],
        stickValue: 0,
        stickEnabled: false,
      };
      const newValues = [...allValues];
      newValues[stickPosition] = modifiedStick;
      console.log("newValues at erase", newValues);
      selectedLine = "";
      return newValues;
    }
  }
};

export default eraseSticks;
