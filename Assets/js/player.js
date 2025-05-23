let player = document.getElementById("player");
let posleft = 800;
let postop = 300;
const speed = 0.7;
let movement = false;
let w = false;
let a = false;
let d = false;
let s = false;
let walkingSound = false;
const walk = new Audio('audio/walk2.mp3');
let animationTimeOut = null

player.style.left = posleft + "px";
player.style.top = postop + "px";

document.addEventListener("keydown", (e) => {
    if (e.key == "W" || e.key == "S" || e.key == "A" || e.key == "D" ||
        e.key == "w" || e.key == "s" || e.key == "a" || e.key == "d") movement = true;
    switch (e.key) {
        case "W":
        case "w":
            w = true
            break;
        case "A":
        case "a":
            a = true
            break;
        case "S":
        case "s":
            s = true
            break;
        case "D":
        case "d":
            d = true
            break;
    }
})

document.addEventListener("keyup", (e) => {
    if (e.key == "W" || e.key == "S" || e.key == "A" || e.key == "D" ||
        e.key == "w" || e.key == "s" || e.key == "a" || e.key == "d") movement = false;
    switch (e.key) {
        case "W":
        case "w":
            w = false
            break;
        case "A":
        case "a":
            a = false
            break;
        case "S":
        case "s":
            s = false
            break;
        case "D":
        case "d":
            d = false
            break;
    }
})

function collisionUp() {
    let bed = document.getElementById("evade");
    let player = document.getElementById("player");
    let posBed = bed.getBoundingClientRect();
    let posPlayer = player.getBoundingClientRect();
    if ((posBed.top - posPlayer.bottom) > -462 && (posBed.right - posPlayer.left) > 20 && (posBed.left - posPlayer.right) < -20) {
        return false
    }
    return true
}

function collisionRight() {
    let bed = document.getElementById("evade");
    let player = document.getElementById("player");
    let posBed = bed.getBoundingClientRect();
    let posPlayer = player.getBoundingClientRect();
    if ((posBed.top - posPlayer.bottom) > -460 && (posBed.left - posPlayer.left) < 100 && (posBed.right - posPlayer.left) > 320) {
        return false
    }
    return true
}

function collisionLeft() {
    let bed = document.getElementById("evade");
    let player = document.getElementById("player");
    let posBed = bed.getBoundingClientRect();
    let posPlayer = player.getBoundingClientRect();
    console.log(posBed.right - posPlayer.left)
    if ((posBed.top - posPlayer.bottom) > -460 && (posBed.left - posPlayer.left) > -245 && (posBed.right - posPlayer.left) < 300) {
        return false
    }
    return true
}


function update() {
    if (w) {
        if (postop > 280 && collisionUp()) {
            postop -= speed;
        }
    }
    if (a) {
        if (posleft > 220 && collisionLeft()) {
            posleft -= speed;
            player.style.transform = "scaleX(-1)"
        }
    }
    if (s) {
        if (postop < 390)
            postop += speed;
    }
    if (d) {
        if (posleft < 1000 && collisionRight()) {
            posleft += speed;
            player.style.transform = "scaleX(1)"
        }
    }


    if (w || a || s || d) {
        if (!walkingSound) {
            playAudio();
            animation(false);
        }
    } else {
        walk.pause();
        walk.currentTime = 0;
        walkingSound = false;
        animation(true); 
        document.getElementById("player").style.backgroundImage = "url('img/player.png')";
    }


    if ((document.getElementById("fakeSkull").getBoundingClientRect().bottom -
        document.getElementById("player").getBoundingClientRect().bottom) > -26) {
        document.getElementById("fakeSkull").style.zIndex = 3;
    } else {
        document.getElementById("fakeSkull").style.zIndex = 1;
    }

    player.style.top = postop + "px";
    player.style.left = posleft + "px";

    requestAnimationFrame(update);
}

function playAudio() {
    walkingSound = true
    walk.play()
    walk.onended = () => {
        setTimeout(() => {
            playAudio();
        }, 100)
    }
}

let animFrame = 0;

function animation(stop) {
    const frames = ['url(img/player.png)', 'url(img/player2.png)', 'url(img/player3.png)'];

    if (stop) {
        clearTimeout(animationTimeOut);
        animationTimeOut = null;
        return;
    }

    document.getElementById("player").style.backgroundImage = frames[animFrame];
    animFrame = (animFrame + 1) % frames.length;

    animationTimeOut = setTimeout(() => {
        animation(false);
    }, 300);
}

update();
