// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid 
// (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var moves = [];
    moves[0] = [];
    moves[0][0] = 1;
    
    for (var i = 1; i < m; i++) {
        if (!moves[i]) moves[i] = [];
        moves[i][0] = moves[i-1][0];
    }
    
    for (i = 1; i < n; i++) {
        moves[0][i] = moves[0][i-1];
    }
    
    for (i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            moves[i][j] = moves[i-1][j] + moves[i][j-1];
        }
    }
    
    return moves[m-1][n-1];
    
};