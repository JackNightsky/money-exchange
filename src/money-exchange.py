H = Q = D = N = P = 0
answer = {}
currency = 10000
print('start')

def curUnit(name, nominale, currency):
    while currency >= nominale:
        #print('cur до = ',currency)
        currency = currency - nominale
        #print('cur после = ',currency)
        #print('name =',name)
        name += 1
    
    return name, currency

if currency > 10000:
    answer['error'] = "You are rich, my friend! We don't have so much coins for exchange"
elif currency > 0:
    H, currency = curUnit(H, 50, currency)
    if H > 0:
        answer['H'] = H
    
    Q, currency  = curUnit(Q, 25, currency)
    if Q > 0:
        answer['Q'] = Q
    
    D, currency  = curUnit(D, 10, currency)
    if D > 0:
        answer['D'] = D
    
    N, currency  = curUnit(N, 5, currency)
    if N > 0:
        answer['N'] = N
    
    P, currency  = curUnit(P, 1, currency)
    if P > 0:
        answer['P'] = P
    
print(answer)



