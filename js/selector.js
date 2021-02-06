

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

