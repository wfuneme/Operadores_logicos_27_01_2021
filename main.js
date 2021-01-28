// Resultado Booleano

console.log("Operador AND");
console.log(`'true "&&" true'`, true && true);
console.log(`'false "&&" true'`,false && true);
console.log(`'true "&&" false'`,true && false);
console.log(`'false "&&" false'`,false && false);



console.log("Operador OR");
console.log(`'true "||" true'`, true || true);
console.log(`'false "||" true'`,false || true);
console.log(`'true "||" false'`,true || false);
console.log(`'false "||" false'`,false || false);



console.log("Operador NOT");
console.log(`"!"'true'`, !true);
console.log(`"!"'false'`,!false);


let afirmacion = 1;
let negacion = 0;

console.log(`%cOperador AND '&&'`, "color:red;");
console.log(`${negacion} && ${negacion} = ${negacion}`);
console.log(`${negacion} && ${afirmacion} = ${negacion}`);
console.log(`${afirmacion} && ${negacion} = ${negacion}`);
console.log(`${afirmacion} && ${afirmacion} = ${afirmacion}`);

console.log(`%cOperador OR '||'`, "color:blue;");
console.log(`${negacion} && ${negacion} = ${negacion}`);
console.log(`${negacion} && ${afirmacion} = ${afirmacion}`);
console.log(`${afirmacion} && ${negacion} = ${afirmacion}`);
console.log(`${afirmacion} && ${afirmacion} = ${afirmacion}`);

console.log(`%cOperador NOT '!'`, "color:orange;");
console.log(`${negacion} != ${negacion}`);
console.log(`${afirmacion} != ${afirmacion}`);

// console.log((5<3) && (!false) || (54!=9));
//             // false && true || true
//             //         false || true
//             //             true

let num1 = 38, num2 = 5, num3 = 80, num4 = 99, num5 = 80;

console.log((num3!==num5) && (num1<= num4) || !(num2==num5));
                // false   &&  true    ||  true
                //         true    ||  true                
                //                 true