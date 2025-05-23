
let key = false;
let knife = false;
let picture = false;
let password = false;
let getK = false;
let getP = false;
let fondoAlternado = false;
let end = false
let opened = false;
const musicBack = new Audio("audio/background.mp3")
const open = new Audio("audio/open.mp3")
const correct = new Audio("audio/openLock.mp3")
const notOpen = new Audio("audio/notOpen.mp3")
const fail = new Audio("audio/fail.mp3")
const appear = new Audio("audio/appearGhost.mp3")
const cut = new Audio("audio/cutPicture.mp3")
const door = new Audio("audio/door.mp3")
const endM = new Audio("audio/end.mp3")
musicBack.loop = true;
musicBack.play()

document.getElementById("chair").addEventListener("click", () => {
    if (!end) {
        document.getElementById("talkGhost").innerHTML = "No deberías de haberme molestado";
        appear.play();
        setTimeout(() => {
            document.getElementById("ghost").style.opacity = 1;
        }, 1);
        setTimeout(() => {
            document.getElementById("talkGhost").innerHTML = "";
        }, 5000);
        setTimeout(() => {
            makeParticles();
            document.getElementById("ghostScream").style.display = "block"
            const audio = new Audio('audio/grito.mp3');
            audio.play();
            end = true;
        }, 5001);
        setTimeout(() => {
            musicBack.pause();
            endM.play();
            document.getElementById("loose").style.display = "block"
            document.getElementById("loose").style.opacity = 1;
            makeParticles();
        }, 10000)
    }
})

document.getElementById("key").addEventListener("click", () => {
    if (!end) {
        if (opened == false) {
            notOpen.play();
            document.getElementById("lock").style.display = "block";
            document.getElementById("textarea").innerHTML = "Este cajón tiene candado, maldita sea";
            setTimeout(() => {
                document.getElementById("lock").style.opacity = 1;
            }, 100);
        } else if (opened && !getK) {
            open.play();
            getK = true;
            key = true;
            document.getElementById("textarea").innerHTML = "Una llave, me pregunto que abrirá";
            setTimeout(() => {
                document.getElementById("keyImg").style.display = "block";
            }, 1);
            setTimeout(() => {
                document.getElementById("keyImg").style.opacity = 1;
            }, 100);
            setTimeout(() => {
                document.getElementById("keyImg").style.opacity = 0;
            }, 3000);
            setTimeout(() => {
                document.getElementById("keyImg").style.display = "none";
            }, 4000);
            setTimeout(() => {
                document.getElementById("textarea").innerHTML = "";
            }, 5000);
        } else {
            document.getElementById("textarea").innerHTML = "Este cajón está completamente vacío";
            setTimeout(() => {
                document.getElementById("textarea").innerHTML = "";
            }, 5000);
        }
    }
})

document.getElementById("send").addEventListener("click", () => {
    if (document.getElementById("password").value == "1907") {
        correct.play();
        opened = true;
        document.getElementById("textarea").innerHTML = "Genial, se ha abierto";
        setTimeout(() => {
            document.getElementById("textarea").innerHTML = "";
        }, 5001);
        setTimeout(() => {
            document.getElementById("lock").style.opacity = 0;
        }, 100);
        setTimeout(() => {
            document.getElementById("lock").style.display = "none";
        }, 1003)
    } else {
        fail.play();
        document.getElementById("textarea").innerHTML = "Esta no era la clave";
    }
})

document.getElementById("picture").addEventListener("click", () => {
    if (!end) {
        if (picture == false) {
            document.getElementById("pictureImg").style.display = "block";
            document.getElementById("textarea").innerHTML = "Parece que el cuadro me está mirando, me da escalofrios";
            if (knife) {
                document.getElementById("useKnife").style.display = "block";
            }
            setTimeout(() => {
                document.getElementById("pictureImg").style.opacity = 1;
            }, 100);
        } else {
            document.getElementById("textarea").innerHTML = "Hay algo detrás del cuadro";
            setTimeout(() => {
                document.getElementById("pictureImgSolve").style.opacity = 1;
                document.getElementById("pictureImgSolve").style.zIndex = 3;
            }, 100);
            setTimeout(() => {
                document.getElementById("pictureImgSolve").style.opacity = 0;
            }, 3000);
            setTimeout(() => {
                document.getElementById("pictureImgSolve").style.zIndex = 1;
            }, 4000)
            setTimeout(() => {
                document.getElementById("textarea").innerHTML = "";
            }, 5000);
        }
    }
})

document.getElementById("useKnife").addEventListener("click", () => {
    if (knife) {
        picture = true;
        cut.play();
        document.getElementById("textarea").innerHTML = "Hay algo detrás del cuadro";
        setTimeout(() => {
            document.getElementById("pictureImg").style.opacity = 0;
        }, 3)
        setTimeout(() => {
            document.getElementById("pictureImg").style.display = "none";
        }, 1003)
        setTimeout(() => {
            document.getElementById("pictureImgSolve").style.opacity = 1;
            document.getElementById("pictureImgSolve").style.zIndex = 3;
        }, 100);
        setTimeout(() => {
            document.getElementById("pictureImgSolve").style.opacity = 0;
            document.getElementById("pictureImgSolve").style.zIndex = 1;
        }, 3000);
        setTimeout(() => {
            document.getElementById("pictureImgSolve").style.zIndex = 1;
        }, 4000)
        setTimeout(() => {
            document.getElementById("textarea").innerHTML = "";
        }, 5000);
    }
})

document.getElementById("out").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("pictureImg").style.opacity = 0;
        document.getElementById("textarea").innerHTML = "";
    }, 3)
    setTimeout(() => {
        document.getElementById("pictureImg").style.display = "none";
    }, 1003)
})

document.getElementById("out2").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("lock").style.opacity = 0;
        document.getElementById("textarea").innerHTML = "";
    }, 3)
    setTimeout(() => {
        document.getElementById("lock").style.display = "none";
    }, 1003)
})

document.getElementById("knife").addEventListener("click", () => {
    if (!end) {
        open.play();
        console.log("click")
        if (knife == false) {
            document.getElementById("textarea").innerHTML = "Un cuchillo, que peligroso, pero seguro me sirve";
            knife = true;
            setTimeout(() => {
                document.getElementById("knifeImg").style.display = "block";;
            }, 1);
            setTimeout(() => {
                document.getElementById("knifeImg").style.opacity = 1;
            }, 100);
            setTimeout(() => {
                document.getElementById("knifeImg").style.opacity = 0;
            }, 3000)
            setTimeout(() => {
                document.getElementById("knifeImg").style.opacity = 0;
                document.getElementById("knifeImg").style.display = "none";
            }, 4000)
        } else {
            document.getElementById("textarea").innerHTML = "Ya no queda nada en este cajón";
            setTimeout(() => {
                document.getElementById("textarea").innerHTML = "";
            }, 3000)
        }
    }
})

document.getElementById("skull").addEventListener("click", () => {
    if (!end) {
        const change = new Audio("audio/change.mp3");
        change.play();
        setTimeout(() => {
            document.getElementById("white").style.opacity = 1;
            document.getElementById("white").style.display = "block";
        }, 1)
        setTimeout(() => {
            document.getElementById("white").style.opacity = 0;
        }, 700)
        setTimeout(() => {
            document.getElementById("white").style.display = "none";
        }, 1200)
        document.getElementById("back").style.backgroundImage = fondoAlternado
            ? "url('img/escenario.png')"   // Fondo original
            : "url('img/blood.jpg')";  // Fondo nuevo

        fondoAlternado = !fondoAlternado;
    }
})

document.getElementById("ventana").addEventListener("click", () => {
    document.getElementById("textarea").innerHTML = "Tu puedes salir de aquí Madison, venga";
    setTimeout(() => {
        document.getElementById("textarea").innerHTML = "";
    }, 3000)
})

document.getElementById("door").addEventListener("click", () => {
    if (!end) {
        if (key) {
            musicBack.pause();
            endM.play();
            end = true
            document.getElementById("win").style.display = "block";
            setTimeout(() => {
                document.getElementById("win").style.opacity = 1;
                makeParticlesW();
            }, 100);
        } else {
            door.play();
            document.getElementById("textarea").innerHTML = "Jope, la puerta está cerrada";
            setTimeout(() => {
                document.getElementById("textarea").innerHTML = "";
            }, 3000)
        }
    }
})

if (!end) {
    const duracion = 5 * 60;
    let tiempoRestante = duracion;

    const display = document.getElementById("contador");

    const intervalo = setInterval(() => {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;

        display.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        tiempoRestante--;
    }, 1000);

    setTimeout(() => {
        if (!end) {
            end = true;
            setTimeout(() => {
                makeParticles();
                document.getElementById("ghostScream").style.display = "block"
                const audio = new Audio('audio/grito.mp3');
                audio.play();
                end = true;
            }, 1);
            setTimeout(() => {
                musicBack.pause();
                endM.play();
                document.getElementById("loose").style.display = "block"
                document.getElementById("loose").style.opacity = 1;
                makeParticles();
            }, 4000)
        }
    }, duracion * 1000);
}

function makeParticles() {
    const stage = document.getElementById('stage');
    stage.style.display = "block";
    const animClasses = ['anim-float', 'anim-sway', 'anim-pulse', 'anim-spin'];
    const TOTAL = 60;

    for (let i = 0; i < TOTAL; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');

        // Posición inicial aleatoria
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;

        // Escala aleatoria
        const scale = 0.5 + Math.random() * 0.7;
        p.style.transform = `scale(${scale})`;

        // Duración y delay aleatorios
        const duration = 4 + Math.random() * 6;    // entre 4s y 10s
        const delay = Math.random() * 5;        // entre 0s y 5s

        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;
        p.style.animationTimingFunction = 'ease-in-out';
        p.style.animationIterationCount = 'infinite';

        // Asigna una animación al azar
        const cls = animClasses[Math.floor(Math.random() * animClasses.length)];
        p.classList.add(cls);

        stage.appendChild(p);
    }

}

function makeParticlesW() {
    const stage = document.getElementById('stage2');
    stage.style.display = "block";
    const animClasses = ['anim-float', 'anim-sway', 'anim-pulse', 'anim-spin'];
    const TOTAL = 200;

    for (let i = 0; i < TOTAL; i++) {
        const p = document.createElement('div');
        p.classList.add('particleW');
        p.style.zIndex = 5;
        // Posición inicial aleatoria
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;

        // Escala aleatoria
        const scale = 0.5 + Math.random() * 0.7;
        p.style.transform = `scale(${scale})`;

        // Duración y delay aleatorios
        const duration = 4 + Math.random() * 6;    // entre 4s y 10s
        const delay = Math.random() * 5;        // entre 0s y 5s

        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;
        p.style.animationTimingFunction = 'ease-in-out';
        p.style.animationIterationCount = 'infinite';

        // Asigna una animación al azar
        const cls = animClasses[Math.floor(Math.random() * animClasses.length)];
        p.classList.add(cls);

        stage.appendChild(p);
    }

}