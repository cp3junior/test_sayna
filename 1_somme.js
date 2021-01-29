let S = 0;
let N = prompt('Donner un entier N');
N = parseInt(N, 10);
for (let i = 1; i < N; i++) {
    S = S + i;
}

console.log(`La somme des ${N}, premiers nombres est: ${S}`);