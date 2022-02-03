
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
        
        const options = document.querySelectorAll(".option button");
        const player1hand = document.querySelector(".player1-image");
        const player2hand = document.querySelector(".player2-image");
        clearBoard= document.querySelector(".reset-button");
        const winner = document.querySelector(".option-main");
        // const hands= document.querySelectorAll(".hands");
        // //console.log(hands)
        // hands.forEach(hand=>{
        //     hand.addEventListener("animationend", function(){
        //         hand.style.animation= "";
        //     });
        // });


        //clear screen
         clearBoard.addEventListener("click", ()=>{
        winner.textContent= "Choose an option";
         player1Score.textContent = initp1Score;
         player2Score.textContent = initp2Score;
         localStorage.setItem('p1Score', initp1Score)
        localStorage.setItem('p2Score', initp2Score)
         p1Score = initp1Score;
        p2Score = initp2Score; 
        })
        
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
                  player1hand.addEventListener('animationend', () => {                         
                    player1hand.classList.remove('animate1')
                    })
                 player2hand.addEventListener('animationend', () => {
                    player2hand.classList.remove('animate2')
                    })
                    player1hand.classList.add('animate1');
                    player2hand.classList.add('animate2');
                    
                        player1hand.classList.remove('animate1')
                setTimeout(() => player1hand.classList.add('animate1'), 25);

                    player2hand.classList.remove('animate2');
            setTimeout(() => player2hand.classList.add('animate2'), 25);
                
            });
        });

     }


    //  update score
    const player1Score = document.querySelector(".player1score")
    const player2Score = document.querySelector(".player2score")
    const updateScore = ()=>{
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
        
        
        //  for a tie
        if(player1Choice === player2Choice){
            winner.textContent = "It is a tie";
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

        // for paper
        if(player1Choice === "Paper"){
            if(player2Choice === "Scissors"){
                winner.textContent = "player2 wins"
                p1Score++
                updateScore()
                return;
            }
        }else{
            winner.textContent = "player1 wins"
            p2Score++
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
        
    
     }


     playMatch()

    startGame()
    
}

playGame()