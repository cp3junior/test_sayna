let A = -1;
 let B = -1;

 while(A < 0 && B < 0) {
 		A = prompt('Donner un entier positif A');
		B = prompt('Donner un entier positif B');
		A = parseInt(A, 10);
		B = parseInt(B, 10);
 }

 let R = A;

 while(R > 0) {
	 	R = R - B;
 }

 if(R == 0) console.log(`${A} est divisible par ${B}`);
 else console.log(`${A} n'est pas divisible par ${B}`);