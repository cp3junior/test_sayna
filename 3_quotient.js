let A = prompt('Donner un entier A');
let B = prompt('Donner un entier B');

let Q = 0;
let R = A;

while(R >= B) {
	Q = Q + 1;
    R = R - B;
}

console.log(`Le Quotient de A/B est : ${Q}, Le reste de A/Best : ${R}`);