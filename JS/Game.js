let c = document.getElementById("myCanvas"); // canvas
let ctx = c.getContext("2d"); // document

// Loading images

let bird = new Image();         bird.src = "Images/bird.png";
let ground = new Image();       ground.src = "Images/ground.png";
let nPipe = new Image();        nPipe.src = "Images/northPipe.png";
let sPipe = new Image();        sPipe.src = "Images/southPipe.png";
let back = new Image();         back.src = "Images/back.png";


// Declaring variables

let gap = 85; // gap between pipes
let birdX = 80;
let birdY = 130;
let gravity = 0.2; // force that pushes it down
let velocity = 0; // velocity makes it smoother to increase the force gradually up OR down
let up = -6; // the Y amount of going up when key is pressed
let Pipes = []; 
let id= null; // for animation canceling
let score = 0;


//window.onload = alert("please press on the canvas to start the game");



    // Main function 

    function draw() {
        ctx.drawImage(back, 0, 0);
        ctx.drawImage(ground, 0, c.height - ground.height);
        ctx.drawImage(bird, birdX, birdY);

        birdGravity();
        wallCollision();
        pipesCollision();
        pipesArr();
        gameScore();
        writeStart();
        writeOver();

        id = requestAnimationFrame(draw);
        if(gameState.current === 3) cancelAnimationFrame(id); // passing reference as a parameter, canceling animation when gameOver
    }


////////////////// Game states and its functions

const gameState = {
    current: 0,
    start: 1,
    running: 2,
    over: 3,
}



//window.onload = 

c.addEventListener("click", function(event) { // when mouse clicked on the canvas gameState changes
    
    switch (gameState.current) {

        case gameState.start:
            ctx.drawImage(back, 0, 0);
            ctx.drawImage(ground, 0, c.height - ground.height);
            ctx.drawImage(bird, birdX, birdY);
            writeStart();
            gameState.current = gameState.running;
        break;

    case gameState.running:
            draw();
            gravity = 0.2; // Making it default so pressing spacebar before doesnt make any changes
            velocity = 0; // Making it default so pressing spacebar before doesnt make any changes
            event.preventDefault(); // mouse click doesnt make any changes
        break;

    case gameState.over:
            birdY = 130; // bird's back to its start Y position
            score = 0;
            location.reload();
            gameState.current = gameState.start;
        break;
    }
});

window.onload = gameState.current = 1; // gameState when page's loaded


// gameStart and gameOver TEXT


    function writeStart() {
        if(gameState.current === 1) { // if gameState is gameStart then display text 
            ctx.fillStyle = "#67ff01";
            ctx.fillRect(250,140,250,50);
            ctx.fillStyle = "#000000";
            ctx.font = "30px AcmeFont";
            ctx.fillText("Click anywhere to start the game", 250,170, 250);
        }
    }

    function writeOver() {
        if(gameState.current === 3){ // if gameState is gameOver then display text
            ctx.fillStyle = "#ff0000";
            ctx.font = "40px AcmeFont";
            ctx.fillText("You lost", 250, 180);
            ctx.fillText("Score: " + score, 250, 220);
            ctx.font = "30px AcmeFont";
            ctx.fillText("Mouse click to start again", 250, 260, 250);
        }
    }


// Making bird go down

    function birdGravity() {
        velocity += gravity; // Velocity makes it go smoother
        birdY += velocity;
    }

    
// Keyboard events
    document.addEventListener("keydown", event => {
        if(event.keyCode == 32) { // if spacebar is pressed
            velocity += up; // bird goes up by -6 Y positions
            velocity *= 0.7; // slowing down bird
        }
    });

///////////// Pipes Functions /////////////

// Pipes array
    Pipes[0] = { // x & y positions where pipes being created
        x: c.width,
        y: 0,
    };

    function pipesArr() {
        for (let i = 0; i < Pipes.length; i++) {

            ctx.drawImage(nPipe, Pipes[i].x, Pipes[i].y); // drawing pipes with x: c.clientWidth and y:0
            ctx.drawImage(sPipe, Pipes[i].x, Pipes[i].y + (nPipe.height + gap));
            Pipes[i].x -= 2; // making pipe [i] go x position minus by 2         <----

            if(Pipes[i].x == 450) { 
                Pipes.push({ // pushing array ( creating new pipe)
                    x: c.width,
                    y: Math.floor(Math.random() * nPipe.height) - nPipe.height // getting random number for pipe Y position
                });
            }

            if(Pipes[i].x + nPipe.width == 0){ 
            Pipes.shift(); // deleting first item in array (deleting pipe which goes under the canvas)
            }
        }
    }


 //  Game score

    function gameScore () {
        for(let i = 0; i < Pipes.length; i++){
            if( birdX == Pipes[i].x + nPipe.width) // if bird goes beyong pipe without collision, score ++
                score++;
                localStorage.setItem("score", score); // setting the score for rankings table
            }
    }



//////////// Collision ///////////////


    function wallCollision () {
        // If it bird touches the up or bottom wall gameState = gameOver
        if(birdY + bird.height > c.height - ground.height || birdY < 0) {
            gameState.current = gameState.over;
        }

        for (let i = 0; i < Pipes.length; i++){
            // Only Shift pipe when birdx is closer than 370px to first pipe
            if((birdY + bird.height > c.height - ground.height || birdY < 0) && Pipes[i].x - birdX <= 370) { 
                Pipes.shift();
                gameState.current = gameState.over;
            }
        }
    }

    function pipesCollision() {
        for (let i = 0; i < Pipes.length; i++) {

            // All the possibilities of how bird can touch pipe in which case that would be gameOver
            if( birdX + bird.width >= Pipes[i].x && birdX <= Pipes[i].x + nPipe.width && (birdY <= Pipes[i].y + nPipe.height || birdY + bird.height >=
                Pipes[i].y + nPipe.height + gap)){

                    Pipes.splice(0,2); // remove first two pipes from array if pipe have been touched
                    gameState.current = gameState.over;
                }  
        }
    }