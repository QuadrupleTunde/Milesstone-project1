const playGame = () =>{
    let p1Score = 0;
    let p2Socre = 0;

     const startGame = () => {
        const startButton = document.querySelector("button");
        const introScreen = document.querySelector(".intro-page");
        const matchScreen = document.querySelector(".match-winner");
        startButton.addEventListener("click", ()=>{
           introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });

  


    };
              //playMatch
    const playMatch=()=>{
        const options = document.querySelectorAll(".option button")
        const player1hand = document.querySelector(".player1-image")
        const player2hand = document.querySelector(".player2-image")
        
        let player2option = ["Rock", "Paper", "Scissors"]
        options.forEach(option => {
            option.addEventListener("click", function(){
            let player2Number = Math.floor(Math.random() * 3);
            const player2Choice = player2option[player2Number]
                // console.log(player2Choice)
                compareHands (this.textContent, player2Choice );

                // update image
                player1hand.src= `./asset/${this.textContent}.png` ;
                player2hand.src=`./asset/${player2Choice}.png`;
            });
            
           
        });

     }

    //  compare player1Choice & player2Choice
     const compareHands =()=>{
         const winner = document.querySelector(".option-main")
         let player1Choice;
         let player2Choice;
        //  for tie
        if(player1Choice === player2Choice){
            winner.textContext = "It is a tie";
            return;
        }
        // for rock
        if(player1Choice === "Rock"){
            if(player2Choice === "Scissors"){
                winner.textContent = "player1 wins"
                return;
            }
        }else{
            winner.textContent = "player2 wins"
            return;
        }
         // for scissors
         if(player1Choice === "Scissors"){
            if(player2Choice === "Rock"){
                winner.textContent = "player2 wins"
                return;
            }
        }else{
            winner.textContent = "player1 wins"
            return;
        }
        // for paper
        if(player1Choice === "Paper"){
            if(player2Choice === "Scissors"){
                winner.textContent = "player1 wins"
                return;
            }
        }else{
            winner.textContent = "player2 wins"
            return;
        }


     }

     playMatch()

    startGame()
}
playGame()