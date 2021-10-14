// top-down
function fibo_td(n, d = []){
  if(n < 2) return n;
  if(d[n]) return d[n];

  d[n] = fibo_td(n-1) + fibo_td(n-2);
  return d[n];
}

console.log(fibo_td(5));
console.log(fibo_td(6));
console.log(fibo_td(7));

// bottom-up
function fibo_bu(n, d = []) {
  d[0] = 0;
  d[1] = 1;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i-1] + d[i-2];
  }
  return d[n];
}

console.log(fibo_bu(5));
console.log(fibo_bu(6));
console.log(fibo_bu(7));