/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    var size = [];
    var max = 0;
    for (var i = 0; i < matrix.length; i++) {
        size[i] = [];
        size[i][0] = matrix[i][0];
    }
    for (var j = 0; j < matrix[0].length; j++) {
        size[0][j] = matrix[0][j];
        max = Math.max(max, matrix[0][j]);
    }
    
    for (i = 1; i < matrix.length; i++) {
        for (j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === "1") {
                size[i][j] = Math.min(size[i][j-1], size[i-1][j], size[i-1][j-1]) + 1;
                if (size[i][j] > max) max = size[i][j];
            } else {
                size[i][j] = 0;
            }
        }
    }
    return max * max;
};

module.exports = maximalSquare;