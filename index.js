'use strict'

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

var inseartionSort = require('./InsertionSortLinkedList');

var head = new inseartionSort.ListNode(1);
head.next = new inseartionSort.ListNode(1);
inseartionSort.insertionSortList(head);