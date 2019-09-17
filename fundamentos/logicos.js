/** AND
 * v e v = v
 * v e f = f
 * f e v = f
 * f e f = f
 * 
 * OR
 * v ou v = v
 * v ou f = v
 * f ou v = v
 * f ou f = f
 * 
 * XOR
 * v xor v = f
 * v xor f = v
 * f xor v = v
 * f xor f = f
 * 
 * NOT
 * !v = f
 * !f = v
 */

 function compras(trabalho1, trabalho2) {
     const comprarSoverte = trabalho1 || trabalho2
     const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSoverte // operador unário

    return { comprarSoverte, comprarTv50, comprarTv32, manterSaudavel }
 }

 console.log(compras(true, true))
 console.log(compras(true, false))
 console.log(compras(false, true))
 console.log(compras(false, false))