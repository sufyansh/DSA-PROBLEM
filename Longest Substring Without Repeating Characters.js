/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let a = s.split('');
//     let l = [];

//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 let res = l.includes(a[i]);
//                 res ? '' : l.push(a[i]);
//             }
//         }
//     }

//     return l.length;
// };
var lengthOfLongestSubstring = function(s) {
  let curlen= [];
  let lgstr = 0;
  for(let i=0;i<s.length; i++){
      const curChrStr = curlen.indexOf(s[i]);
      
      if(curChrStr!=-1){
          curlen.splice(0,curChrStr+1);
        

      }
          curlen.push(s[i]);
     lgstr = Math.max(
         lgstr,
         curlen.length
     )
      
        
  }
  return lgstr;

};
console.log(lengthOfLongestSubstring('bbbbb'));
