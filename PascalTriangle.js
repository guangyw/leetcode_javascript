/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    var rows = [[1]];
    var row;
    for (var i=1; i < numRows; i++) {
        var j = 1;
        row = [1];
        while (j < i) {
            row.push(rows[i-1][j-1] + rows[i-1][j]);
            ++j;
        }
        row.push(1);
        rows.push(row);
    }
    return rows;
};

var getRowRecur = function(rowIndex) {

    var row = [];
    if (rowIndex === 0) {
        return row;
    }
    row.push(1);
    if (rowIndex === 1) {
        return row;
    }

    for(var i = 1; i < rowIndex -1; i++) {
        row.push(getRow(rowIndex-1)[i-1] + getRow(rowIndex-1)[i]);
    }
    row.push(1);
    return row;

};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    var row = [1];
    for (var i = 1; i <= rowIndex; i++) {
        row.push(0);
        for (var j = i; j > 0; j--) {
            row[j] += row[j-1];
        }
    }
    return row;
};

module.exports.getRow = getRow;