// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  let H = 0;
  let Q = 0; 
  let D = 0;
  let N = 0;
  let P = 0;
  let answer = {};

  if (currency > 10000) {
    answer['error'] = "You are rich, my friend! We don't have so much coins for exchange";
  }
  else if (currency > 0) {
    while(currency > 0) {
      while (currency >= 50) {
        currency -= 50;
        H++;
      }
      if (H > 0) {
        answer['H'] = H;
      }
      while (currency >= 25) {
        currency -= 25;
        Q++;
        }
      if (Q > 0) {
        answer['Q'] = Q;
      }
        
      while (currency >= 10) {
        currency -= 10;
        D++;
      }
      if (D > 0) {
        answer['D'] = D;
      }

      while (currency >= 5) {
        currency -= 5;
        N++;
      }
      if (N > 0) {
        answer['N'] = N;
      }

      while (currency >= 1) {
        currency -= 1;
        P++;
      }
      if (P > 0) {
        answer['P'] = P;
      }
    }
  }
  return answer;
}
