const playGame = () =>{
    let p1Score = 0;
    let p2Socre = 0;

     const startGame = () => {
        const startButton = document.querySelector(".start button");
        const introScreen = document.querySelector(".intro-page");
        const matchScreen = document.querySelector(".match-winner");
        startButton.addEventListener("click", ()=>{
            console.log(startButton)

        // introScreen.classList.add("fadeOut");
        // matchScreen.classList.add("fadeIn");

        })




    };
    

    startGame()
}
playGame()