"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
//lesa txt
var input = fs.readFileSync("input.txt", "utf-8");
var grid = input.trim().split('\n');
//dimensions
var rows = grid.length;
var cols = grid[0].length;
var accessibleCount = 0;
//fara yfir hvert position
for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
        //tekka er rulla her?
        if (grid[row][col] == '@') {
            //tellja alla adjacent
            var adjacentRolls = 0;
            //eru 8 plass sem þarf að kanna
            for (var dr = -1; dr <= 1; dr++) {
                for (var dc = -1; dc <= 1; dc++) {
                    //skippa rulluna
                    if (dr === 0 && dc === 0) {
                        continue;
                    }
                    //nagranna stapsetning
                    var rowNew = row + dr;
                    var colNew = col + dc;
                    //er granni inn i grid?
                    if (rowNew >= 0 && rowNew < rows && colNew >= 0 && colNew < cols) {
                        //nuna tekka hvort að granni se með rullu
                        if (grid[rowNew][colNew] === '@') {
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
console.log("accesible rolls: ".concat(accessibleCount));
