/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 let isAnagram = function(s, t) {
  let arr1 = s.split('').sort();
  let arr2 = t.split('').sort();
  let isAna = true
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      isAna = false;
      break;
    }
  }
  return isAna;
};