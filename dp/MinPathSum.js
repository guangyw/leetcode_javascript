/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var minSums = [];
    var m = grid.length;
    var n = grid[0].length;
    minSums[0] = [];
    minSums[0][0] = grid[0][0];
    
    for (var i = 1; i < m; i++) {
        if (!minSums[i]) minSums[i] = [];
        minSums[i][0] = minSums[i-1][0] + grid[i][0];
    }
    
    for (var j = 1; j < n; j++) {
        minSums[0][j] = minSums[0][j-1] + grid[0][j];
    }
    
    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            minSums[i][j] = Math.min(minSums[i-1][j], minSums[i][j-1]) + grid[i][j];
        }
    }
    return minSums[m-1][n-1];
};

module.exports = minPathSum;