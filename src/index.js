// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let H, Q, D, N, P;
    H,Q,D,N,P = 0
    let answer = {}
    
    function curUnit(name, nominale, currency) { //функция для рассчета количества монет для выдачи
      while (currency >= nominale) {
        currency -= nominale
        name++
      return name, currency   //возвращает сколько монет номинала влазит в общую сумму
      }
    }
    
    if (currency > 10000) {
      answer['error'] = "You are rich, my friend! We don't have so much coins for exchange"
    }
    else if (currency > 0) {
      while(currency > 0) {
        H, currency = curUnit(H,50,currency)
        if (H > 0) {
          answer['H'] = H
        }

        Q, currency = curUnit(Q,25,currency)
        if (Q > 0) {
          answer['Q'] = Q
        }

        D, currency = curUnit(D,10,currency)
        if (D > 0) {
          answer['D'] = D;
        }

        N, currency = curUnit(N,5,currency)
        if (N > 0) {
          answer['N'] = N;
        }

        P, currency = curUnit(P,1,currency)
        if (P > 0) {
          answer['P'] = P;
        }
      }
    }
    
    //answer = {"H":H, "Q":Q, "D":D, "N":N, "P":P}
    //{error: "You are rich, my friend! We don't have so much coins for exchange"}
    function print(answer) {
      for (let key in answer) {
        key + answer[key] + '\n';
      }
    }
    
    return print(answer);
}
