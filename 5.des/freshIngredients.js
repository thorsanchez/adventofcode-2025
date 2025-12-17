"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
//taka inn string sklia number
function solveInventory(input) {
    // split input, array
    var lines = input.trim().split('\n');
    // Staðsetja blank line
    var blankLine = lines.findIndex(function (line) { return line.trim() === ''; });
    console.log(blankLine);
    // Sækja allar línur að blankLine
    var rangeLines = lines.slice(0, blankLine);
    //fylki sem breyir range i min og max
    var ranges = rangeLines.map(function (line) {
        //breyta i strings og svo number og gef min og max
        var _a = line.split('-').map(Number), min = _a[0], max = _a[1];
        return { min: min, max: max };
    });
    //svo takka öll ingredients id (eftir blankline) og breyta svo i number
    var idLines = lines.slice(blankLine + 1);
    var ids = idLines.map(Number);
    // Check each ID to see if it's fresh
    var freshCount = 0;
    var _loop_1 = function (id) {
        // id er fresh ef það sé i eitthvað range (some() skilar true ef 1 er i range)
        var isFresh = ranges.some(function (range) {
            return id >= range.min && id <= range.max;
        });
        if (isFresh) {
            freshCount++;
        }
    };
    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
        var id = ids_1[_i];
        _loop_1(id);
    }
    return freshCount;
}
//lesa txt
var input = fs.readFileSync("input.txt", "utf-8");
console.log(solveInventory(input));
