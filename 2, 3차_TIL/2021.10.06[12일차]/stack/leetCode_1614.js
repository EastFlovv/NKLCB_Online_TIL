// 1614. Maximum Nesting Depth of the Parentheses
// Easy

// 555

// 129

// Add to List

// Share
// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

 

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.
// Example 2:

// Input: s = "(1)+((2))+(((3)))"
// Output: 3
// Example 3:

// Input: s = "1+(2*3)/(2-1)"
// Output: 1
// Example 4:

// Input: s = "1"
// Output: 0


let maxDepth = function(s) {
  // 괄호의 깊이를 구하는 문제
  let stack = [];
  let number = 0;
  for(let i = 0; i < s.length; i++){
    let mark = s[i];
    if(mark ==='('){ // 열린 괄호열은 push
      stack.push(mark);
      if(stack.length > number) number = stack.length; // 스택의 길이가 최대길이가 되면 number값 갱신
    }else if(mark === ')'){
      if(stack[stack.length-1] === '('){
        stack.pop();
      }
    }
  }
  return number;
};