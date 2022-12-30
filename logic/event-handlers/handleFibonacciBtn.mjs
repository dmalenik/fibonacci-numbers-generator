import { fibonacciNumbersOutput } from "../../components/components-index.mjs";
import * as fibonacciNumbersOutputConfigs from "../../configs/fibonacciNumbersOutputConfigs.mjs";
import calcFibonacciNums from "../../logic/calcFibonacciNums.mjs";

// this logic has to be on a server

const { sectionConfig, headingConfig } = fibonacciNumbersOutputConfigs;
const handleFibonacciBtn = (event) => {
  let limit = document
    .querySelector("#fibonacci-numbers")
    .getAttribute("value");
  let fibonacciNumsList = calcFibonacciNums(limit);
  let fibonacciNumbers = fibonacciNumbersOutput(
    sectionConfig,
    headingConfig,
    fibonacciNumsList
  );

  return document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", fibonacciNumbers);
};

export { handleFibonacciBtn };
