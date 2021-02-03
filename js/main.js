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

    strikeBack() {
        enemy.life -= (this.strenght + this.power) - (enemy.defense * this.power) + this.luck;
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

//traductor
let allplayers = {
    "C-18": fighter1,
    "Buu": fighter2,
    "Cell": fighter3,
    "Freeza": fighter4,
    "Burter": fighter5,
    "Krillin": fighter6,
    "Goku": fighter7,
    "Picolo": fighter8,
    "Trunks": fighter9,
    "Vegeta": fighter10
};



//Funciones

let startGame = () => {

    let initialLife = 300;

    player1.life = initialLife;
    player2.life = initialLife;

    player1 = "";

    player2 = "";

};

// Change first screen 

let changeScreen = (pastPhase,newPhase) => {
    
    let currentScreen = document.getElementById(pastPhase);
    let futureScreen = document.getElementById(newPhase);

    
    
    currentScreen.style.display = "none";
    futureScreen.style.display = "flex";

    
};

// SELECT CHARACTER

let selectCharacter = (character) => {
    if(player1 == "") {
        player1 = allplayers[character];
        

        
        document.getElementById(character).className = "fighterSelected1";
        document.getElementById(character).onclick = "";

        let mensaje = document.getElementById("infoPlayer1");

        mensaje.innerHTML = `You have chosen <br> ${player1.name}`;

        let life = document.getElementById("liveP1")

        life.innerHTML = `${player1.life}`;

    }else{
        player2 = allplayers[character];

        document.getElementById(character).className = "fighterSelected2";
        document.getElementById(character).onclick = "";

        let mensaje = document.getElementById("infoPlayer2");

        mensaje.innerHTML = `You have chosen <br> ${player2.name}`;

        let life = document.getElementById("liveP2")

        life.innerHTML = `${player2.life}`;

        // LOAD CHARACTERS INTO THE ARENA

        let showPlayer1 = document.getElementById("opponent1");
        let showPlayer2 = document.getElementById("opponent2");
        let showNameP1 = document.getElementById("fighterName1")
        let showNameP2 = document.getElementById("fighterName2")

        showPlayer1.innerHTML = `<img id="opponentStyle" src="img/figthers/${player1.name}.png">`;
        showPlayer2.innerHTML = `<img id="opponentStyle" src="img/figthers/${player2.name}.png">`;
        showNameP1.innerHTML = `${player1.name}`;
        showNameP2.innerHTML = `${player2.name}`;


        // CHANGE SCREEN TO ARENA

        resolveIn(3000).then(delay => {

            changeScreen("fase2","fase3");
            
        });
    };
    
    
};



// Funcion Arena Game

const hit = () => {

    let turn = Math.floor(Math.random() * 2);
    let specialAttack = Math.floor(Math.random() * 10);

    if(turn == 0) {
        if(specialAttack > 3 && specialAttack < 7) {
            // if(specialAttack == 5){
            //     player2.strikeBack(player1);
            //     console.log("StrikeBack player2");
            // };
            player1.powerAttack(player2);
            console.log("ATAQUE ESPECIAL player 1 " + player1.life);
        };
        player1.attack(player2);
        console.log("Attack player 1 " + player1.life);
    }else{
        if(specialAttack > 3 && specialAttack < 7) {
            // if(specialAttack == 5) {
            //     player1.strikeBack(player2);
            //     console.log("StrikeBack player1");
            // };
            player2.powerAttack(player1);
            console.log("ATAQUE ESPECIAL player 2 " + player2.life);
        };
        player2.attack(player1);
        console.log("Attack player 2 " + player2.life);
    };

    // console.log(player1.name + " " + player1.life);
    // console.log(player2.name + " " + player2.life);

};




//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));





