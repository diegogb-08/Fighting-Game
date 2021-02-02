// CLASSES

class Fighter {

    constructor(name,life,strenght,defense,luck,power){
        this.name = name;
        this.life = life;
        this.strenght = strenght;
        this.defense = defense;
        this.luck = luck;
        this.handicap = luck - Math.floor(Math.random() * 10);
        this.power = power;
    };

    attack(enemy) {
        enemy.life -= (this.strenght - enemy.defense) * (this.suerte - this.handicap);
    };

    powerAttack(enemy) {
        enemy.life -= (this.strenght + this.power) - (enemy.defense * this.power);
    };

    defensa() {
        myOwn.life -= (this.defense * handicap) - this.strenght;
    };
};


//Instancias y variables globales
//nombre,vida,fuerza,defensa,suerte

let fighter1 = new Fighter("C-18",300,30,50,7,30);
let fighter2 = new Fighter("Buu",300,35,45,3,45);
let fighter3 = new Fighter("Cell",300,40,25,6,40);
let fighter4 = new Fighter("Freeza",300,50,40,5,50);
let fighter5 = new Fighter("Burter",300,30,30,2,35);
let fighter6 = new Fighter("Krillin",300,35,45,2,20);
let fighter7 = new Fighter("Goku",300,55,45,6,60);
let fighter8 = new Fighter("Picolo",300,42,32,7,30);
let fighter9 = new Fighter("Trunks",300,45,50,8,35);
let fighter10 = new Fighter("Vegeta",300,54,44,8,50);

let player1 = "";

let player2 = "";

//Funciones

let startGame = () => {

    let initialLife = 300;

    player1.life = initialLife;
    player2.life = initialLife;

    player1 = "";

    player2 = "";


};

// Change first screen (Start Game)

const changeScreen = (pastPhase,newPhase) => {
    
    let screen1 = document.getElementById(pastPhase);
    let screen2 = document.getElementById(newPhase);

    
    
    screen1.style.display = "none";
    screen2.style.display = "flex";

    /*resolveIn(4000).then(delay => {

        changeScreen("fase1","fase2");
    }); */
};


let cambiaPantalla = (faseAhora,faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);

    let pantallaDestino = document.getElementById(faseFutura);

    //aqui procedemos con el cambio

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "flex";
};



// SELECT CHARACTER

let selectCharacter = (character) => {
    if(player1 == "") {
        player1 = character;

        
        document.getElementById(character).className = "fighterSelected1";
        document.getElementById(character).onclick = "";

        let mensaje = document.getElementById("infoPlayer1");

        mensaje.innerHTML = `You have chosen <br> ${player1}`;

    }else{
        player2 = character;

        document.getElementById(character).className = "fighterSelected2";
        document.getElementById(character).onclick = "";

        let mensaje = document.getElementById("infoPlayer2");

        mensaje.innerHTML = `You have chosen <br> ${player2}`;

        // LOAD CHARACTERS INTO THE ARENA

        let showPlayer1 = document.getElementById("opponent1");
        let showPlayer2 = document.getElementById("opponent2");
        let showNameP1 = document.getElementById("fighterName1")
        let showNameP2 = document.getElementById("fighterName2")

        showPlayer1.innerHTML = `<img id="opponentStyle" src="img/figthers/${player1}.png">`;
        showPlayer2.innerHTML = `<img id="opponentStyle" src="img/figthers/${player2}.png">`;
        showNameP1.innerHTML = `${player1}`;
        showNameP2.innerHTML = `${player2}`;


        // CHANGE SCREEN TO ARENA

        resolveIn(3000).then(delay => {

            cambiaPantalla("fase2","fase3");
            
        });
    };
};

// Funcion Arena Game

let hit = () => {
    console.log("Attack");

    let turn = Math.floor(Math.random() * 2);
    let specialAttack = Math.floor(Math.random() * 10);

    if(turn == 0) {
        if(specialAttack == 3 || specialAttack == 7) {
            player1.powerAttack(player2);
        };
        player1.attack(player2);
    }else{
        if(specialAttack == 3 || specialAttack == 7) {
            player2.powerAttack(player1)
        };
        player2.attack(player1);
    };

    console.log("Life player 1 is " + player1.life);
    console.log("Life player 2 is " + player2.life);

};




//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));



// Declaración de inicio del juego
console.log("Iniciamos el juego y la vida del player 1 es...." + startGame(player1));
console.log("Iniciamos el juego y la vida del player 2 es...." + startGame(player2));




