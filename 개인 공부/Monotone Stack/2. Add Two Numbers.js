/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 연결리스트가 참조하는 값이 주소값이 아닌 값의 복사라면?

// 연결리스트 만들기
function linkedList() {
  this.head = null;
  this.length = 0;
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

linkedList.prototype.append = function (value) {
  const node = new ListNode(value);
  let current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
}

const addTwoNumbers = function (l1, l2) {

  let carry = 0;
  let value = 0;
  const answer = new linkedList(); // 네이밍 컨벤션 오류

  // 둘다 null이 될때까지 반복
  while (l1 !== null || l2 !== null) {
    // 둘다 null이 아닐때
    if (l1 !== null && l2 !== null) {
      value = l1.val + l2.val;
      l1 = l1.next; // ESLint 매개변수 재사용 금지
      l2 = l2.next;
    } else if (l1 === null && l2 !== null) { // l1이 null일때
      value = l2.val;
      l2 = l2.next;
    } else if (l1 !== null && l2 === null) { // l2가 null일때
      value = l1.val;
      l1 = l1.next;
    }

    // 이전 value가 10이 넘으면 이번 노드에 1을 준다
    if (carry === 1) {
      value += carry;
      carry = 0;
    }
    // carry는 value를 10으로 나눈 값 (정수)
    carry = Math.floor(value / 10);
    answer.append(value % 10);
  }

  // 마지막 최고자리 carry 1의 처리
  if (carry === 1) answer.append(carry);
  return answer.head;
};




const n1 = new ListNode(9);
const n2 = new ListNode(9);
const n3 = new ListNode(9);
const n4 = new ListNode(9);
const n5 = new ListNode(9);
const n6 = new ListNode(9);
const n7 = new ListNode(9);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;


const nn1 = new ListNode(9);
const nn2 = new ListNode(9);
const nn3 = new ListNode(9);
const nn4 = new ListNode(9);
nn1.next = nn2;
nn2.next = nn3;
nn3.next = nn4;

console.log(addTwoNumbers(n1, nn1));