import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");
//split fyrir rows, svo split hverja row i char
let grid = input.trim().split('\n').map(line => line.split(''));

const rows = grid.length;
const cols = grid[0].length;
let totalRemoved = 0;

// Looping þangað til engar fleiri rullur geta verið fjarlægðar
while (true) {
    let removedThisRound = [];
    
    //finna alla rúllur sem hægt er að taka (i þetta skipti)
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '@') {
                let adjacentRolls = 0;
                
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        if (dr === 0 && dc === 0) continue;
                        
                        const rowNew = row + dr;
                        const colNew = col + dc;
                        
                        if (rowNew >= 0 && rowNew < rows && colNew >= 0 && colNew < cols) {
                            if (grid[rowNew][colNew] === '@') {
                                adjacentRolls++;
                            }
                        }
                    }
                }
                
                if (adjacentRolls < 4) {
                    removedThisRound.push([row, col]);
                }
            }
        }
    }
    
    // við erum buin ef engar rullur voru fjharlægðar þetta loop
    if (removedThisRound.length === 0) break;
    
    // breyta @ með .
    for (let [row, col] of removedThisRound) {
        grid[row][col] = '.';
    }
    
    totalRemoved += removedThisRound.length;
}

console.log(`Total rullur teknar: ${totalRemoved}`);