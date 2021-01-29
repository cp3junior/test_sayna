let A = prompt('Donner un entier A');
let B = prompt('Donner un entier B');
A = parseInt(A, 10);
B = parseInt(B, 10);
let P = 0;
if(A == 0 || B == 0) {
	P = 0;
} else if (A > B) {
	P = A;
	for(let i = 2; i <= B; i++) {
		P = P + A;
	}
} else {
	P = B;
	for(let i = 2; i < B; i++) {
		P = P + B;
	}
}

console.log(`Le produit A*B est : ${P}`);