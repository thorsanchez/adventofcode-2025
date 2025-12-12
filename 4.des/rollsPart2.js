"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8");
var grid = input.trim().split('\n').map(function (line) { return line.split(''); }); // Make it mutable!
var rows = grid.length;
var cols = grid[0].length;
var totalRemoved = 0;
// Looping þangað til engar fleiri rullur geta verið fjarlægðar
while (true) {
    var removedThisRound = [];
    //finna alla rúllur sem hægt er að taka (i þetta skipti)
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (grid[row][col] === '@') {
                var adjacentRolls = 0;
                for (var dr = -1; dr <= 1; dr++) {
                    for (var dc = -1; dc <= 1; dc++) {
                        if (dr === 0 && dc === 0)
                            continue;
                        var rowNew = row + dr;
                        var colNew = col + dc;
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
    if (removedThisRound.length === 0)
        break;
    // breyta @ með .
    for (var _i = 0, removedThisRound_1 = removedThisRound; _i < removedThisRound_1.length; _i++) {
        var _a = removedThisRound_1[_i], row = _a[0], col = _a[1];
        grid[row][col] = '.';
    }
    totalRemoved += removedThisRound.length;
}
console.log("Total rullur teknar: ".concat(totalRemoved));
