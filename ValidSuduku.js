/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var hor = [];
    var ver = [];
    var sqr = [];
    for (var i = 0; i < 9; i++) {
        // var tmp = []
        // for (var j = 0; j < 9; j++) {
        //     tmp.push(false);
            
        // }
        hor.push([false, false,false,false,false,false,false,false,false]);
        ver.push([false, false,false,false,false,false,false,false,false]);
        sqr.push([false, false,false,false,false,false,false,false,false]);
    }
    
    for (i = 0; i < 9; i++) {
        for (var j =0; j < 9; j++) {
            if (board[i][j] != ".") {
                var num = parseInt(board[i][j]) -1;
                var k = Math.floor(i/3) * 3 + Math.floor(j/3);
                if (ver[i][num] || hor[j][num] || sqr[k][num]) {
                    return false;
                }
                ver[i][num] = hor[j][num] = sqr[k][num] =true;
            }
        } 
    }
    return true;
};

//isValidSudoku([".87654321","2........","3........","4........","5........","6........","7........","8........","9........"]);
//isValidSudoku([".......8.",".......1.",".4..9....",".2.....3.",".8....5..",".........",".6.......","....6....","....3...."]);
isValidSudoku([".87654321","2........","3........","4........","5........","6........","7........","8........","9........"]);