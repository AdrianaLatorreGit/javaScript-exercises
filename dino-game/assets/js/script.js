const background = document.querySelector(".background");
const dino = document.querySelector(".dino");

let isJumping = false;
let dinoPosition = 0;

function handleKey(event) {
    if (event.keyCode === 32 && !isJumping) {
        jump();
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (dinoPosition >= 300) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (dinoPosition <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    dinoPosition = dinoPosition - 10;
                    dino.style.bottom = dinoPosition + "px";
                }
            }, 20);
        } else {
            dinoPosition = dinoPosition + 10;
            dino.style.bottom = dinoPosition + "px";
        }
    }, 10);
}

function createCactus() {
    const cactus = document.createElement("div");

    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add("cactus");
    cactus.style.left = cactusPosition + "px";

    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (
            cactusPosition > 0 &&
            cactusPosition < 60 &&
            dinoPosition < 60
        ) {
            clearInterval(leftInterval);
            console.log("bateu");
        } else {
            cactusPosition = cactusPosition - 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener("keyup", handleKey);
