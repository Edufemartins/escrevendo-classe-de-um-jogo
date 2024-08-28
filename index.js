class heroi{
    constructor(nomeTipo, nomeAtaque){
        this.nomeTipo = nomeTipo
        this.nomeAtaque = nomeAtaque
    }
}

let guerreiro = new heroi(["Mago", "Guerreiro", "Monge", "Ninja"], ["Magia", "Espada", "Artes Marciais", "Shuriken"])

for (let i = 0; i <= guerreiro.length; i++){

    if(i === 0){
        console.log(guerreiro.nomeTipo[0] + " " + guerreiro.nomeAtaque[0]);
    }else if(i === 1){
        console.log(guerreiro.nomeTipo[1] + " " + guerreiro.nomeAtaque[1]);
    }else if(i === 2){
        console.log(guerreiro.nomeTipo[2] + " " + guerreiro.nomeAtaque[2]);
    }else(i === 3){
        console.log(guerreiro.nomeTipo[3] + " " + guerreiro.nomeAtaque[3]);
    }
}






// console.log(`O "this.nomeHeroi" ) atacou usando "thisAtaque"`)