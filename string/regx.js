/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var match = [];
    var m = s.length;
    var n = p.length;
    match[0] = [];
    match[0][0] = true;
    for (var i = 0; i < m; i++) {
        if (!match[i + 1]) match[i + 1] = [];
        match[i + 1][0] = false;
    }
    for (var j = 0; j < n; j++) {
        if (p[j] === '*' && j > 0) {
            match[0][j+1] = match[0][j-1];
        } else {
            match[0][j+1] = false;
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (s[i] === p[j] || p[j] === '.') match[i + 1][j + 1] = match[i][j];
            if (p[j] === '*') {
                if (s[i] === p[j -1] || p[j-1] ==='.') {
                    match[i+1][j+1] = match[i][j-1] || match[i][j+1];
                } 
                match[i+1][j+1] = match[i+1][j+1] || match[i+1][j-1];
            }
        }
    }
    return match[m][n] || false;
};

module.exports = isMatch;