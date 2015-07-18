/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1 = version1.split('.').map(Number);
    var v2 = version2.split('.').map(Number);
    var length1 = v1.length;
    var length2 = v2.length;
    for(var j=0; j< Math.abs(length1 - length2); j++) {
        if (length1 < length2) {
            v1.push(0);
        }
        if (length2 < length1) {
            v2.push(0);
        }
    }

    for(var i=0; i < Math.max(v1.length, v2.length); i++) {
        if (v1[i])
        if (v1[i] === v2[i]) {
            continue;
        }
        if (v1[i] > v2[i]) {
            return 1;
        }
        if (v1[i] < v2[i]) {
            return -1;
        }
    }
    if (v1.length === v2.length) return 0;
    if (v1.length > v2.length) return 1;
    return -1
};