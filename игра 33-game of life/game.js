const RAZMERPOLE = {
    "x" : window.innerWidth/50+10,
    "y" : window.innerHeight/50+10,
    "gol" : 50
};

let pole = [], goshovci = [];
let i, j;
let timer = 0, pochnahLi = false;
for(i = 0; i<RAZMERPOLE.x; i++) {
    pole[i] = []
    goshovci[i] = []
    for(j = 0; j<RAZMERPOLE.y; j++) {
        pole[i][j] = 0
        goshovci[i][j] = 0
    }
}

function update() {
    if(pochnahLi) {
        timer++
        if(timer%5==1) {
            for(i = 0; i<RAZMERPOLE.x; i++) {
                for(j = 0; j<RAZMERPOLE.y; j++) {
                    goshovci[i][j] = 0
                    if(i+1<RAZMERPOLE.x && pole[i+1][j]) {
                        goshovci[i][j]++
                    }
                    if(j+1<RAZMERPOLE.y && pole[i][j+1]) {
                        goshovci[i][j]++
                    }
                    if(j+1<RAZMERPOLE.y && i+1<RAZMERPOLE.x && pole[i+1][j+1]) {
                        goshovci[i][j]++
                    }
                    if(i+1<RAZMERPOLE.x && j-1>=0 && pole[i+1][j-1]) {
                        goshovci[i][j]++
                    }
                    if(j+1<RAZMERPOLE.y && i-1>=0 && pole[i-1][j+1]) {
                        goshovci[i][j]++
                    }
                    if(i-1>=0 && pole[i-1][j]) {
                        goshovci[i][j]++
                    }
                    if(j-1>=0 && pole[i][j-1]) {
                        goshovci[i][j]++
                    }
                    if(j-1>=0 && i-1>=0 && pole[i-1][j-1]) {
                        goshovci[i][j]++
                    }
                }
            }
            for(i = 0; i<RAZMERPOLE.x; i++) {
                for(j = 0; j<RAZMERPOLE.y; j++) {
                    if(pole[i][j] && (goshovci[i][j]<2 || goshovci[i][j]>3)) {
                        pole[i][j] = false
                    }
                    if(!pole[i][j] && goshovci[i][j]==3) {
                        pole[i][j] = true
                    }
                }
            }
        }
    }
}

function draw() {
    for(i = 0; i<RAZMERPOLE.x; i++) {
        for(j = 0; j<RAZMERPOLE.y; j++) {
            context.lineWidth = 5
            context.strokeRect(i*RAZMERPOLE.gol, j*RAZMERPOLE.gol, RAZMERPOLE.gol, RAZMERPOLE.gol)
            if(pole[i][j]) {
                context.fillStyle = '#444'
                context.fillRect(i*RAZMERPOLE.gol, j*RAZMERPOLE.gol, RAZMERPOLE.gol, RAZMERPOLE.gol)
            }
            if(!pole[i][j]) {
                context.fillStyle = '#888'
                context.fillRect(i*RAZMERPOLE.gol, j*RAZMERPOLE.gol, RAZMERPOLE.gol, RAZMERPOLE.gol)
            }
        }
    }
}

function keyup(key) {
    pochnahLi = !pochnahLi
}

function mouseup() {
    pole[Math.floor(mouseX/RAZMERPOLE.gol)][Math.floor(mouseY/RAZMERPOLE.gol)] = !pole[Math.floor(mouseX/RAZMERPOLE.gol)][Math.floor(mouseY/RAZMERPOLE.gol)]
}
