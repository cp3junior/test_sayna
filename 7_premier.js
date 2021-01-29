let X = prompt('Donner un entier X');
 X = parseInt(X, 10);
 let Pr = true;

 if(X == 1) Pr = false;
 else {
 	let M = Math.ceil(X/2);
	let I =2 ;
	while(I<M && Pr) {
		if(X%I == 0) {
			Pr = false;
			break;
		}
		I = I + 1;
	}
	if(Pr) console.log(`${X} est premier`);
	else console.log(`${X} n'est pas premier`);
 }