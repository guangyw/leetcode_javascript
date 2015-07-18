/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.lengh;
    var mx = 0;
    for (var i = 0, j = len -1; i < j;) {
        var h1 = height[i];
        var h2 = height[j];
        mx = Math.max(mx, (j-i) * Math.min(h1, h2));
        if (h1 < h2) {
            i++;
        } else {
            j--;
        }
    } 
    return mx;
};

module.exports = maxArea;