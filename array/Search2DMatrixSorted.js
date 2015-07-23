// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

//Key: start from the top right corner

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


var searchMatrixBinarySearch = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    var start = 0;
    var end = m * n -1;
    while (start <= end) {
        var mid = (start + end) / 2 | 0;
        var row = mid / n | 0, col = mid % n;
        if (target > matrix[row][col]) {
            start = mid + 1;
        } else if (target < matrix[row][col]) {
            end = mid -1;
        } else {
            return true;
        }
    }
    return false;
}

var searchMatrixTwoBinarySearch = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    
    var start = 0,
        end = m -1;
    while (start <= end) {
        var mid = (start + end) / 2 | 0;
        if (matrix[mid][0] > target) {
            end = mid - 1;
        } else if (matrix[mid][0] < target) {
            start = mid + 1;
        } else {
            return true;
        }
    }
    if (end < 0) return false;
    
    var row = end;
    start = 0;
    end = n -1;
    while (start <= end) {
        mid = (start + end) / 2 | 0;
        if (matrix[row][mid] > target) {
            end = mid -1;
        } else if (matrix[row][mid] < target) {
            start = mid + 1;
        } else {
            return true;
        }
    }
    return false;
}

module.exports = {
    searchMatrixTwoBinarySearch: searchMatrixTwoBinarySearch,
    searchMatrixBinarySearch: searchMatrixBinarySearch
}