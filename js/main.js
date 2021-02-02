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





// VARIABLES

let player1 = "";

let player2 = "";

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

        showPlayer1.innerHTML = `<img id="opponentStyle" src="img/figthers/${player1}.png">`;
        showPlayer2.innerHTML = `<img id="opponentStyle" src="img/figthers/${player2}.png">`;


        // CHANGE SCREEN TO ARENA

        resolveIn(3000).then(delay => {

            cambiaPantalla("fase2","fase3");
            
        });
    };
};

//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

