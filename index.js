'use strict'

var utils = require('./utils');

// var AddBinary = require('./AddBinary');
// var PascalTriangle = require('./PascalTriangle');
// var FindPeak = require('./FindPeakElement');
// var MaxArea = require('./ContainerWithMostWater');
// var Caculator = require('./BasicCalculator');
// console.log(Caculator.basic2("5   "));

// console.log(MaxArea([1,1]));

// console.log(FindPeak.findPeakRecur([1]));

// console.log(AddBinary("0", "1"));
// console.log(PascalTriangle.getRow(2));

// var findMin = require('./MinInRotatedArray');
// console.log(findMin([1,2]));

// var inseartionSort = require('./InsertionSortLinkedList');

// var head = new inseartionSort.ListNode(1);
// head.next = new inseartionSort.ListNode(1);
// inseartionSort.insertionSortList(head);

// var LinkedListNode = require('./LinkedList');

// var node = new LinkedListNode(1);
// node.push(3).push(4);
// console.log(node);

// var PubSub = require('./PubSub');

// PubSub.subscribe('score', console.log, this);
// PubSub.subscribe('score', function(x,y) {
// 	console.log(x+y);
// }, this);

// PubSub.publish('score', 1, 2, 3);

// var lpd = require('./LongestPalindrom');
// console.log(lpd('a'));

// var climbStairs = require('./ClimbStairs');

// console.log(climbStairs(1));

// var threesum = require('./ThreeSum').threeSum;
// console.log(threesum([3,0,-2,-1,1,2]));
// console.log(threesum([0,0,0]));
// console.log(threesum([-1,0,1,0]));
// var threesumClosest = require('./ThreeSum').threeSumClosest;
// console.log(threesumClosest([-1,2,1,-4], 1));
// console.log(threesumClosest([1,1,1,0], 100));

// var pp = require('./backtracking/PalindromPartition');
// console.log(pp('bb'));

// var combinationSum = require('./backtracking/CombinationSum');
// console.log(combinationSum([1,2], 1));
// console.log(combinationSum([1], 1));

// var combinationSum = require('./backtracking/CombinationSum3');
// console.log(combinationSum(8, 32));

// var letterCombination = require('./backtracking/LetterCombination');
// letterCombination('2');

// var matrixSearch = require('./array/Search2DMatrixSorted');
// console.log(matrixSearch.searchMatrixTwoBinarySearch([[1,3]], 3));

// var rotateList = require('./linkedlist/RotateList');
// var head = utils.createLinkedList([1]);
// console.log(rotateList(head, 1));

// var uniquePath = require('./dp/UniquePath2');
// console.log(uniquePath([[1]]));

// var minPathSum = require('./dp/MinPathSum');
// console.log(minPathSum([[1,2],[1,1]]));

// var multiplyString = require('./math/MultiplyString');
// console.log(multiplyString("9", "9"));

// var laddar = require('./WordLaddar');
// laddar("a", "c", ["a","b","c"]);

var validBST = require('./tree/ValidBST');

var root = utils.UnserializeTree([0]);
// validBST.isValidBSTInOrder(root);
validBST.isValidBSTInOrderRecursive(root);
