/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var moves = [];
    moves[0] = [];
    if (obstacleGrid[0][0] === 1) return 0;
    moves[0][0] = 1;
    
    for (var i = 1; i < m; i++) {
        if (!moves[i]) moves[i] = [];
        if (obstacleGrid[i][0] ===1) moves[i][0] = 0;
        else moves[i][0] = moves[i-1][0];
    }
    
    for (i = 1; i < n; i++) {
        if (obstacleGrid[0][i] ===1) moves[0][i] = 0;
        else moves[0][i] = moves[0][i-1];
    }
    
    for (i = 1; i< m; i++) {
        for (var j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) moves[i][j] = 0;
            else moves[i][j] = moves[i-1][j] + moves[i][j-1];
        }
    }
    return moves[m-1][n-1];
};

module.exports = uniquePathsWithObstacles;