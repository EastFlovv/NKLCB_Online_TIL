/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 let wordPattern = function(pattern, s) {
  // 두 해시
  let hash1 = {};
  let hash2 = {};
  // 반환값
  let answer = true;
  // 문자세트를 배열로 전환
  let pat = pattern.split('');
  let str = s.split(' ');
  // 길이가 다르면 false
  if(pat.length !== str.length) return false;
  // 해시를 이용한 비교
  for(let i = 0; i < pat.length; i++){
    if(hash1[pat[i]] === undefined && hash2[str[i]] === undefined) {
      hash1[pat[i]] = str[i];
      hash2[str[i]] = pat[i];
    }
    else if(hash1[pat[i]] !== str[i] || hash2[str[i]] !== pat[i]) answer = false;
  }
  
  return answer;
};