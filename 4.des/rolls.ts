import * as fs from "fs";

//lesa txt
const input = fs.readFileSync("input.txt", "utf-8")
const grid = input.trim().split('\n');

//dimensions
const rows = grid.length
const cols = grid[0].length

let accessibleCount = 0;

//fara yfir hvert position
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        //tekka er rulla her?
        if(grid[row][col] == '@'){
            //tellja alla adjacent
            let adjacentRolls = 0;
            //eru 8 plass sem þarf að kanna
            for (let dr=-1; dr <= 1; dr++) {
                for (let dc=-1; dc <= 1; dc++) {
                    //skippa rulluna
                    if (dr === 0 && dc === 0) {
                        continue;
                    }
                    //nagranna stapsetning
                    const rowNew = row +dr;
                    const colNew = col +dc;

                    //er granni inn i grid?
                    if (rowNew >= 0 && rowNew < rows && colNew >= 0 && colNew < cols) {
                        //nuna tekka hvort að granni se með rullu
                        if (grid[rowNew][colNew] === '@'){
                            adjacentRolls++;
                        }
                    }
                }

            }
            if (adjacentRolls < 4) {
            accessibleCount++;
        }
        }
    }
}
console.log(`accesible rolls: ${accessibleCount}`);

