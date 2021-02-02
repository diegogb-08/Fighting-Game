// Change first screen (Start Game)



const changeScreen = (pastPhase,newPhase) => {
    
    let screen1 = document.getElementById(pastPhase);
    let screen2 = document.getElementById(newPhase);

    
    
    screen1.style.display = "none";
    screen2.style.display = "flex";

   
};

// resolveIn(3000).then(delay => {

//     changeScreen(pastPhase,newPhase);
    
// });

// VARIABLES

let player1 = "";

let player2 = "";


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
    };
};