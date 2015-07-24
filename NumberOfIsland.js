// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length ===0 || grid[0].length === 0) return 0;
    var height = grid.length;
    var width = grid[0].length;

    var res = 0;
    
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if (grid[i][j] === "1") {
                res++;
                takeLand(i,j);
            }
        }
    }
    return res;
    
    
    function takeLand(row, col) {
        grid[row][col] = 0;
        if (row -1 >= 0 && grid[row -1][col] === '1') takeLand(row -1, col);
        if (row + 1 < height && grid[row +1][col] === '1') takeLand(row + 1, col);
        if (col - 1 >= 0 && grid[row][col-1] === '1') takeLand(row, col -1);
        if (col + 1 < width && grid[row][col +1] === '1') takeLand(row, col + 1);
    }
};

module.exports = numIslands;