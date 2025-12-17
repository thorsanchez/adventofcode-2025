import * as fs from "fs";
//taka inn string sklia number
function solveInventory(input: string): number {
  // split input, array
  const lines = input.trim().split('\n');
  
  // Staðsetja blank line
  const blankLine = lines.findIndex(line => line.trim() === '');
  console.log(blankLine)
  
  // Sækja allar línur að blankLine
  const rangeLines = lines.slice(0, blankLine);
  //fylki sem breyir range i min og max
  const ranges: Array<{min: number, max: number}> = rangeLines.map(line => {
    //breyta i strings og svo number og gef min og max
    const [min, max] = line.split('-').map(Number);
    return { min, max };
  });
  
  //svo takka öll ingredients id (eftir blankline) og breyta svo i number
  const idLines = lines.slice(blankLine + 1);
  const ids = idLines.map(Number);
  
  // Check each ID to see if it's fresh
  let freshCount = 0;
  
  for (const id of ids) {
    // id er fresh ef það sé i eitthvað range (some() skilar true ef 1 er i range)
    const isFresh = ranges.some(range => 
      id >= range.min && id <= range.max
    );
    
    if (isFresh) {
      freshCount++;
    }
  }
  
  return freshCount;
}

//lesa txt
const input = fs.readFileSync("input.txt", "utf-8")

console.log(solveInventory(input))