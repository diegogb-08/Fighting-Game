// CLASSES

class Fighter {

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

let fighter1 = new Fighter("C-18",300,39,48,7,32);
let fighter2 = new Fighter("Buu",300,34,50,6,35);
let fighter3 = new Fighter("Cell",300,40,25,6,38);
let fighter4 = new Fighter("Freeza",300,51,38,7,44);
let fighter5 = new Fighter("Burter",300,35,30,5,25);
let fighter6 = new Fighter("Krillin",300,36,45,6,23);
let fighter7 = new Fighter("Goku",300,55,45,6,48);
let fighter8 = new Fighter("Picolo",300,32,62,5,29);
let fighter9 = new Fighter("Trunks",300,45,50,8,35);
let fighter10 = new Fighter("Vegeta",300,54,44,8,46);

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
    }else if(player2 == "") {
        // SHOW STATS PLAYER 2
        showName2.innerHTML = `${fighter.name}`
        showStats2.innerHTML = `${fighter.strenght}  :Strenght<br>
                                ${fighter.defense}  :Defense<br> 
                                ${fighter.luck}  :Luck<br>
                                ${fighter.power}  :Power`;
    };

};



// SELECT CHARACTER

let selectCharacter = (character) => {

    if(player1 == "") {
        player1 = allplayers[character];
        
        document.getElementById(character).className = "fighterSelected1";
        document.getElementById(character).onclick = "";

        mensaje1 = document.getElementById("picPlayer1");
        infoFighter1 = document.getElementById("infoFighter1");
        
        mensaje1.innerHTML = `<img class="imgSelected" id="red" src="img/figthers/${player1.name}.png">`; 
        infoFighter1.innerHTML = `Strenght:  ${player1.strenght} <br>
                                Defense:  ${player1.defense} <br> 
                                Luck:  ${player1.luck} <br>
                                Power:  ${player1.power}`;
        
    }else if(player2 == "") {
        player2 = allplayers[character];

        document.getElementById(character).className = "fighterSelected2";
        document.getElementById(character).onclick = "";

        mensaje2 = document.getElementById("picPlayer2");
        infoFighter2 = document.getElementById("infoFighter2");

        //`You have chosen <br> ${player2.name}`;
        mensaje2.innerHTML = `<img class="imgSelected" id="blue" src="img/figthers/${player2.name}.png">`; 
        infoFighter2.innerHTML = `${player2.strenght}  :Strenght<br>
                                   ${player2.defense}  :Defense<br> 
                                    ${player2.luck}  :Luck<br>
                                    ${player2.power}  :Power`;

        // LOAD CHARACTERS INTO THE ARENA

        showPlayer1 = document.getElementById("opponent1");
        showPlayer2 = document.getElementById("opponent2");
        showNameP1 = document.getElementById("fighterName1")
        showNameP2 = document.getElementById("fighterName2")
        showPlayer1.innerHTML = `<img id="opponentStyle" src="img/figthers/${player1.name}.png">`;
        showPlayer2.innerHTML = `<img id="opponentStyle" src="img/figthers/${player2.name}.png">`;
        showNameP1.innerHTML = `${player1.name}`;
        showNameP2.innerHTML = `${player2.name}`;

        // CHANGE SCREEN TO ARENA

        resolveIn(1500).then(delay => {

            changeScreen("fase2","fase3");
            
        });

    
    };
  
};


// Show Winner

const showWinnerGame = () => {

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
    };
};


//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));


// RESET GAME


const reset = document.getElementById('resetBtn');

reset.addEventListener('click', () => {
    window.location.reload();
})

// Start Music

const music = document.getElementById('audioBtn');

music.addEventListener('click', () => {
    window.location.reload();
})


