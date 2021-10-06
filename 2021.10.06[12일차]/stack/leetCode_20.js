// 20. Valid Parentheses
// Easy

// 9271

// 365

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// 괄호 검사
 let isValid = function(s) {
  let stack = [];
  for(let i =0; i <s.length; i++){
    let mark = s[i];
    if(mark == '(' || mark == '[' || mark == '{')
      stack.push(mark);
    else{
      if(mark == ')'){
        if(stack[stack.length-1] == '(')
          stack.pop();
        else
          stack.push(mark);
      }else if(mark == ']'){
         if(stack[stack.length-1] == '[')
          stack.pop();
        else
          stack.push(mark);
      }else{
         if(stack[stack.length-1] == '{')
          stack.pop();
        else
          stack.push(mark);
      }
    }
  }
  if(stack.length != 0)
    return false;
  else return true;
};