// CLASSES

class Fighter {

    _initialState = this.life;

    _state = null;

    constructor(name,life,strenght,defense,luck,power){
        this.name = name;
        this.life = life;
        this.strenght = strenght;
        this.defense = defense;
        this.luck = luck;
        this.handicap = luck - Math.floor(Math.random() * 5);
        this.power = power;
    };

    attack(enemy) {
        enemy.life -= (this.strenght - enemy.defense/1.5) + (this.luck - this.handicap);
    };

    powerAttack(enemy) {
        enemy.life -= (this.strenght + this.power) - enemy.defense;
    };

    strikeBack(enemy) {
        enemy.life -= (this.strenght + this.power) - (enemy.defense - this.power) + this.luck;
    };

};


//Instancias y variables globales
// name,  life,   strenght,   defense,  luck,  power

let fighter1 = new Fighter("C-18",300,33,48,7,20);
let fighter2 = new Fighter("Buu",300,34,50,6,35);
let fighter3 = new Fighter("Cell",300,40,25,6,38);
let fighter4 = new Fighter("Freeza",300,51,38,7,44);
let fighter5 = new Fighter("Burter",300,30,30,5,15);
let fighter6 = new Fighter("Krillin",300,36,45,6,23);
let fighter7 = new Fighter("Goku",300,55,45,6,58);
let fighter8 = new Fighter("Picolo",350,42,32,5,31);
let fighter9 = new Fighter("Trunks",300,45,50,8,35);
let fighter10 = new Fighter("Vegeta",300,54,44,8,50);

let player1 = "";

let player2 = "";

let resetBtn;

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



// Change first screen 

let changeScreen = (pastPhase,newPhase) => {
    
    currentScreen = document.getElementById(pastPhase);
    futureScreen = document.getElementById(newPhase);

    
    
    currentScreen.style.display = "none";
    futureScreen.style.display = "flex";

    
};



// HOVER CHARACTER

let hoverCharacter = (character) => {
    let fighter = allplayers[character];
    showStats1 = document.getElementById("infoFighter1");
    showStats2 = document.getElementById("infoFighter2");
    showName1 = document.getElementById("picPlayer1");
    showName2 = document.getElementById("picPlayer2");

    if(player1 == "") {
        // SHOW STATS PLAYER 1
        showName1.innerHTML = `${fighter.name}`
        showStats1.innerHTML = `Strenght:  ${fighter.strenght} <br>
                                Defense:  ${fighter.defense} <br> 
                                Luck:  ${fighter.luck} <br>
                                Power:  ${fighter.power}`;
    }else {
        // SHOW STATS PLAYER 2
        showName2.innerHTML = `${fighter.name}`
        showStats2.innerHTML = `${fighter.strenght}  :Strenght<br>
                                ${fighter.defense}  :Defense<br> 
                                ${fighter.luck}  :Luck<br>
                                ${fighter.power}  :Power`;
    };

};

// // RESTART GAME

// const playAgain = () => {
    
//     initialLife = 300;
    
//     player1.life = initialLife;
//     player2.life = initialLife;
    
//     player1 = "";
//     player2 = "";

//     resolveIn(1000).then(delay => {

//             changeScreen("fase4","fase3");
            
//     });
// };



// let gameRestart = () => {

//     resetBtn = document.getElementById("resetBtn")
//     resetBtn.addEventListener('click', gameRestart);

//     Fighter(_state = _initialState);


//     player1 = "";
//     player2 = "";

//     resolveIn(1000).then(delay => {

//         changeScreen('fase4','fase2');
        
//     });
// };


// SELECT CHARACTER

let selectCharacter = (character) => {

    if(player1 == "") {
        player1 = allplayers[character];
        
        document.getElementById(character).className = "fighterSelected1";
        document.getElementById(character).onclick = "";

        mensaje1 = document.getElementById("picPlayer1");
        infoFighter1 = document.getElementById("infoFighter1");
        
        //`You have chosen <br> ${player1.name}`;
        mensaje1.innerHTML = `<img class="imgSelected" id="red" src="img/figthers/${player1.name}.png">`; 
        infoFighter1.innerHTML = `Strenght:  ${player1.strenght} <br>
                                Defense:  ${player1.defense} <br> 
                                Luck:  ${player1.luck} <br>
                                Power:  ${player1.power}`;
        
    }else{
        player2 = allplayers[character];

        document.getElementById(character).className = "fighterSelected2";
        document.getElementById(character).onclick = "";

        mensaje2 = document.getElementById("picPlayer2");
        infoFighter2 = document.getElementById("infoFighter2");

        //`You have chosen <br> ${player2.name}`;
        mensaje2.innerHTML = `<img class="imgSelected" id="blue" src="img/figthers/${player2.name}.png">`; 
        infoFighter2.innerHTML = `${player1.strenght}  :Strenght<br>
                                   ${player2.defense}  :Defense<br> 
                                    ${player2.luck}  :Luck<br>
                                    ${player2.power}  :Power`;

        // LOAD CHARACTERS INTO THE ARENA

        showPlayer1 = document.getElementById("opponent1");
        showPlayer2 = document.getElementById("opponent2");
        showNameP1 = document.getElementById("fighterName1")
        showNameP2 = document.getElementById("fighterName2")
        showLife1 = document.getElementById("liveP1")
        showLife2 = document.getElementById("liveP2")

        showPlayer1.innerHTML = `<img id="opponentStyle" src="img/figthers/${player1.name}.png">`;
        showPlayer2.innerHTML = `<img id="opponentStyle" src="img/figthers/${player2.name}.png">`;
        showNameP1.innerHTML = `${player1.name}`;
        showNameP2.innerHTML = `${player2.name}`;
        showLife1.innerHTML = `${player1.life}`;
        showLife2.innerHTML = `${player2.life}`;

        // CHANGE SCREEN TO ARENA

        resolveIn(1500).then(delay => {

            changeScreen("fase2","fase3");
            
        });

    
    };
    

    

};


// Funcion Arena Game

const hit = () => {

    turn = Math.floor(Math.random() * 2);
    specialAttack = Math.floor(Math.random() * 10);
    infoPowerAttack = document.getElementById("infoBattle");

    if(turn == 0) {
        if(specialAttack > 3 && specialAttack < 7) {
            if(specialAttack == 5 || specialAttack == player2.luck){
                player2.strikeBack(player1);
                infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
            }else{
                infoPowerAttack.innerHTML = `${player1.name} SUPER attack`;
                player1.powerAttack(player2);
            };
        }else {
            player1.attack(player2);
            infoPowerAttack.innerHTML = `${player1.name} attacks`;
        };  
    }else{
        if(specialAttack > 3 && specialAttack < 7) {
            if(specialAttack == 5 || specialAttack == player1.luck) {
                player1.strikeBack(player2);
                infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
            }else{
                infoPowerAttack.innerHTML = `${player2.name} SUPER attack`;
                player2.powerAttack(player1);
            };
        }else{
            player2.attack(player1);
            infoPowerAttack.innerHTML = `${player2.name} attacks`;
        }
    };


    // FIGHTERS LIFE COUNTING

    life1 = document.getElementById("liveP1");
    life2 = document.getElementById("liveP2");
    showWinner = document.getElementById("winner");
    showWinnerName = document.getElementById("winnerName");

    if(player1.life < 1){
        showWinner.innerHTML = `<img id="winnertStyle" src="img/figthers/${player2.name}.png">`;
        showWinnerName.innerHTML = `${player2.name} wins!`;

        resolveIn(1000).then(delay => {

            changeScreen("fase3","fase4");
            
        });


    }else if(player2.life < 1){
        showWinner.innerHTML = `<img id="winnertStyle" src="img/figthers/${player1.name}.png">`;
        showWinnerName.innerHTML = `${player1.name} wins!`;

        resolveIn(1000).then(delay => {

            changeScreen("fase3","fase4");
            
        });

        
    }else{
        life1.innerHTML = Math.floor(`${player1.life}`);
        life2.innerHTML = Math.floor(`${player2.life}`);

    };

};




//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));



