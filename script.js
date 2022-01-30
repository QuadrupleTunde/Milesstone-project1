const playGame = () =>{
    let p1Score = 0;
    let p2Score = 0;
    let initp1Score = 0;
    let initp2Score = 0;

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
        // clearBoard= document.querySelector(".reset-button")
        // // const winner = document.querySelector(".option-main")
        //  clearBoard.addEventListener("click", ()=>{
        // //     winner.textContent= "Choose an option";
        //  player1hand.textContent = initp1Score;
        //  player2hand.textContent = initp2Score;
        // localStorage.setItem('p1Score', initp1Score)
        //   localStorage.setItem('p2Score', initp2Score)
        // //     p1Score = initp1Score;
        // //     p2Score = initp2Score;
        // })
        
        let player2option = ["Rock", "Paper", "Scissors"]
        options.forEach(option => {
            option.addEventListener("click", function(){
            let player2Number = Math.floor(Math.random() * 3);
            const player2Choice = player2option[player2Number]
                // console.log(player2Choice)
                compareHands (this.textContent, player2Choice );

                // update image
                player1hand.src= `./${this.textContent}.jpg` ;
                player2hand.src=`./${player2Choice}.jpg`;
            });
            
           
        });

     }

    //  update score
    const updateScore = ()=>{
        player1Score = document.querySelector(".player1score")
        player2Score = document.querySelector(".player2score")

        player1Score.textContent = p1Score
        player2Score.textContent = p2Score
        localStorage.setItem('p1Score', p1Score)
        localStorage.setItem('p2Score', p2Score)
        p1Score = parseInt(localStorage.getItem('p1Score'));
        p2Score = parseInt(localStorage.getItem('p2Score'));

    }

    //  compare player1Choice & player2Choice
     const compareHands =(player1Choice, player2Choice)=>{
         const winner = document.querySelector(".option-main")
         console.log(player1Choice, player2Choice)
        
        //  for a tie
        if(player1Choice === player2Choice){
            console.log(winner)
            winner.textContext = "It is a tie";
            updateScore()
            return;
        }
        // for rock
        if(player1Choice === "Rock"){
            if(player2Choice === "Scissors"){
                winner.textContent = "player1 wins"
                p1Score++
                updateScore()
                return;
            }
        }else{
            winner.textContent = "player2 wins"
            p2Score++;
            updateScore()
            return;
        }
         // for scissors
         if(player1Choice === "Scissors"){
            if(player2Choice === "Rock"){
                winner.textContent = "player2 wins"
                p2Score++;
                updateScore()
                return;
            }
        }else{
            winner.textContent = "player1 wins"
            p1Score++
            updateScore()
            return;
        }
        // for paper
        if(player1Choice === "Paper"){
            if(player2Choice === "Scissors"){
                winner.textContent = "player1 wins"
                p1Score++
                updateScore()
                return;
            }
        }else{
            winner.textContent = "player2 wins"
            p2Score++
            updateScore()
            
            return;
            
        }
        winner.textContext = "It is a tie";

     }

     playMatch()

    startGame()
}
playGame()