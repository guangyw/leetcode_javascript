// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    for (var i = 0, j = n -1; ;) {
        if (target === matrix[i][j]) return true;
        if (target < matrix[i][j]) {
            j--;
            if (j < 0) return false;
        }
        if (target > matrix[i][j]) {
            i++;
            if (i > m - 1) return false;
        }
    }
};
 
var searchMatrixBinary = function(matrix, target) {
    
    for (var i = 0; i < matrix.length; i++) {
        if (binarySeach(matrix[i], target)) return true;
    }
    return false;
};

function binarySeach(row, target) {
    var len = row.length;
    var start = 0, end = len -1;
    var mid = (start + end) / 2 | 0;
    while (start <= end) {
        if (target > row[mid]) {
            start = mid + 1;
        } else if (target < row[mid]) {
            end = mid - 1;
        } else {
            return true;
        }
        mid = (start + end) / 2 | 0
    }
    return false;
}