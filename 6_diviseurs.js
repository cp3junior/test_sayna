let X = prompt('Donner un entier X');
 X = parseInt(X, 10);

 console.log(`Les diviseurs de ${X} sont: `);

 let M = Math.floor(X/2);

 for(let i=1; i < M; i++) {
 	if(X%i == 0) console.log(i);
 }

 console.log(X);