"use strict";

function flattenAndSort(array) {
 let arr = []
 array.forEach(x => {
   arr.push(...x)
 })
  return arr.sort((a,b) => a - b)
}
