/**
 * Solving Experience E27
 * Created by Chad on 9/19/16.
 */

/* eslint func-names: ["error", "never"] */


const testList1 = [1, 2, 3];
const testList2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i += 1) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheSimpleWay(list1, list2) {
  const result = list1.reduce(function (arr, v, i) { return arr.concat(v, list2[i]); }, []);
  return result;
}

console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));
