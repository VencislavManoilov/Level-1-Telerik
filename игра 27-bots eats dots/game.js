(function () {
const NUM_COINS = 15;
const NUM_SHIT = 15;
const EYE_LENGTH = 100;
const EYE_ANGLE = 0.4;
const PLAYER_SPEED = 3;
const PLAYER_ANGLE_SPEED = 0.01;
const SIZE = 20;
let canvas = document.getElementById('canvas-id');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');
let af = window.requestAnimationFrame;
let coins = [];
let shits = [];

for (let i = 0; i < NUM_COINS; i++) {
    coins[i] = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height)
    }
}

for (let i = 0; i < NUM_SHIT; i++) {
    shits[i] = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height)
    }
}

let p1 = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    a: 0,
    s: 0
};

let p2 = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    a: 0,
    s: 0
};

function update() {
    let p1_le = 0;
    let p1_re = 0;

    let p1_le_coo = {
        x: Math.cos(p1.a + EYE_ANGLE) * EYE_LENGTH + p1.x,
        y: -Math.sin(p1.a + EYE_ANGLE) * EYE_LENGTH + p1.y
    };

    let p1_re_coo = {
        x: Math.cos(p1.a - EYE_ANGLE) * EYE_LENGTH + p1.x,
        y: -Math.sin(p1.a - EYE_ANGLE) * EYE_LENGTH + p1.y
    };


    let dx = (p1_le_coo.x - p1.x) / EYE_LENGTH;
    let dy = (p1_le_coo.y - p1.y) / EYE_LENGTH;

    let x = p1.x;
    let y = p1.y;
    for (let i = 0; i < EYE_LENGTH; i++) {
        if (x < 0 || y < 0 || x > canvas.width || y > canvas.height) {
            p1_le = -1;
        }

        for (const shit of shits) {
            if ((shit.x - x) * (shit.x - x) + (shit.y - y) * (shit.y - y) <= SIZE * SIZE) {
                p1_le = -1;
            }
        }

        for (const coin of coins) {
            if ((coin.x - x) * (coin.x - x) + (coin.y - y) * (coin.y - y) <= SIZE * SIZE) {
                p1_le = 1;
            }
        }

        if (p1_le != 0)
            break;

        x = p1.x + dx * i;
        y = p1.y + dy * i;
    }

    dx = (p1_re_coo.x - p1.x) / EYE_LENGTH;
    dy = (p1_re_coo.y - p1.y) / EYE_LENGTH;

    x = p1.x;
    y = p1.y;
    for (let i = 0; i < EYE_LENGTH; i++) {
        if (x < 0 || y < 0 || x > canvas.width || y > canvas.height) {
            p1_re = -1;
        }

        for (const shit of shits) {
            if ((shit.x - x) * (shit.x - x) + (shit.y - y) * (shit.y - y) <= SIZE * SIZE) {
                p1_re = -1;
            }
        }

        for (const coin of coins) {
            if ((coin.x - x) * (coin.x - x) + (coin.y - y) * (coin.y - y) <= SIZE * SIZE) {
                p1_re = 1;
            }
        }

        if (p1_re != 0)
            break;

        x = p1.x + dx * i;
        y = p1.y + dy * i;
    }

    switch (lajnoQd(p1_le, p1_re)) {
        case -1:
            p1.a -= PLAYER_ANGLE_SPEED;
            break;
        case 1:
            p1.a += PLAYER_ANGLE_SPEED;
            break;
        case 0:
            p1.x += Math.cos(p1.a) * PLAYER_SPEED;
            p1.y -= Math.sin(p1.a) * PLAYER_SPEED;
            break;
        default:
            alert('WRONG COMMAND FROM PLAYER 1');
            break;
    }

    let p2_le = 0;
    let p2_re = 0;

    let p2_le_coo = {
        x: Math.cos(p2.a + EYE_ANGLE) * EYE_LENGTH + p2.x,
        y: -Math.sin(p2.a + EYE_ANGLE) * EYE_LENGTH + p2.y
    };

    let p2_re_coo = {
        x: Math.cos(p2.a - EYE_ANGLE) * EYE_LENGTH + p2.x,
        y: -Math.sin(p2.a - EYE_ANGLE) * EYE_LENGTH + p2.y
    };


    dx = (p2_le_coo.x - p2.x) / EYE_LENGTH;
    dy = (p2_le_coo.y - p2.y) / EYE_LENGTH;

    x = p2.x;
    y = p2.y;
    for (let i = 0; i < EYE_LENGTH; i++) {
        if (x < 0 || y < 0 || x > canvas.width || y > canvas.height) {
            p2_le = -1;
        }

        for (const shit of shits) {
            if ((shit.x - x) * (shit.x - x) + (shit.y - y) * (shit.y - y) <= SIZE * SIZE) {
                p2_le = -1;
            }
        }

        for (const coin of coins) {
            if ((coin.x - x) * (coin.x - x) + (coin.y - y) * (coin.y - y) <= SIZE * SIZE) {
                p2_le = 1;
            }
        }

        if (p2_le != 0)
            break;

        x = p2.x + dx * i;
        y = p2.y + dy * i;
    }

    dx = (p2_re_coo.x - p2.x) / EYE_LENGTH;
    dy = (p2_re_coo.y - p2.y) / EYE_LENGTH;

    x = p2.x;
    y = p2.y;
    for (let i = 0; i < EYE_LENGTH; i++) {
        if (x < 0 || y < 0 || x > canvas.width || y > canvas.height) {
            p2_re = -1;
        }

        for (const shit of shits) {
            if ((shit.x - x) * (shit.x - x) + (shit.y - y) * (shit.y - y) <= SIZE * SIZE) {
                p2_re = -1;
            }
        }

        for (const coin of coins) {
            if ((coin.x - x) * (coin.x - x) + (coin.y - y) * (coin.y - y) <= SIZE * SIZE) {
                p2_re = 1;
            }
        }

        if (p2_re != 0)
            break;

        x = p2.x + dx * i;
        y = p2.y + dy * i;
    }


    // switch (lajnoQd(p2_le, p2_re)) {
    //     case -1:
    //         p2.a -= PLAYER_ANGLE_SPEED;
    //         break;
    //     case 1:
    //         p2.a += PLAYER_ANGLE_SPEED;
    //         break;
    //     case 0:
    //         p2.x += Math.cos(p2.a) * PLAYER_SPEED;
    //         p2.y -= Math.sin(p2.a) * PLAYER_SPEED;
    //         break;
    //     default:
    //         alert('WRONG COMMAND FROM PLAYER 2');
    //         break;
    // }

    for (let coin of coins) {
        if ((coin.x - p1.x) * (coin.x - p1.x) + (coin.y - p1.y) * (coin.y - p1.y) <= 4 * SIZE * SIZE) {
            console.log('p1 am bisk');
            coin.x = -1000;
            coin.y = -1000;
            p1.s++;
        }

        if ((coin.x - p2.x) * (coin.x - p2.x) + (coin.y - p2.y) * (coin.y - p2.y) <= 4 * SIZE * SIZE) {
            console.log('p2 am bisk');
            coin.x = -1000;
            coin.y = -1000;
            p2.s++;
        }
    }

    for (let shit of shits) {
        if ((shit.x - p1.x) * (shit.x - p1.x) + (shit.y - p1.y) * (shit.y - p1.y) <= 4 * SIZE * SIZE) {
            console.log('p1 am lai');
            shit.x = -1000;
            shit.y = -1000;
            p1.s--;
        }

        if ((shit.x - p2.x) * (shit.x - p2.x) + (shit.y - p2.y) * (shit.y - p2.y) <= 4 * SIZE * SIZE) {
            console.log('p2 am lai');
            shit.x = -1000;
            shit.y = -1000;
            p2.s--;
        }
    }
    if (p1.x <= 0 || p1.y <= 0 || p1.x > canvas.width || p1.y > canvas.height) {
        console.log('p1 si trugna');
        p1.s -= 1;
    }

    if (p2.x <= 0 || p2.y <= 0 || p2.x > canvas.width || p2.y > canvas.height) {
        console.log('p2 si trugna');
        p2.s -= 1;
    }
}

function draw() {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 3;
    context.fillStyle = context.strokeStyle = '#00ff00';
    context.beginPath();
    context.arc(p1.x, p1.y, SIZE, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p1.x + Math.cos(p1.a - EYE_ANGLE) * EYE_LENGTH, p1.y - Math.sin(p1.a - EYE_ANGLE) * EYE_LENGTH);
    context.stroke();

    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p1.x + Math.cos(p1.a + EYE_ANGLE) * EYE_LENGTH, p1.y - Math.sin(p1.a + EYE_ANGLE) * EYE_LENGTH);
    context.stroke();

    context.fillStyle = context.strokeStyle = '#ff00ff';
    context.beginPath();
    context.arc(p2.x, p2.y, SIZE, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.moveTo(p2.x, p2.y);
    context.lineTo(p2.x + Math.cos(p2.a - EYE_ANGLE) * EYE_LENGTH, p2.y - Math.sin(p2.a - EYE_ANGLE) * EYE_LENGTH);
    context.stroke();

    context.beginPath();
    context.moveTo(p2.x, p2.y);
    context.lineTo(p2.x + Math.cos(p2.a + EYE_ANGLE) * EYE_LENGTH, p2.y - Math.sin(p2.a + EYE_ANGLE) * EYE_LENGTH);
    context.stroke();

    context.fillStyle = '#ffff00';
    for (const coin of coins) {
        context.beginPath();
        context.arc(coin.x, coin.y, SIZE, 0, 2 * Math.PI);
        context.fill();
    }

    context.fillStyle = 'brown';
    for (const shit of shits) {
        context.beginPath();
        context.arc(shit.x, shit.y, SIZE, 0, 2 * Math.PI);
        context.fill();
    }

    requestAnimationFrame(draw);
}

let upd = setInterval(update, 1);
// setTimeout(update, 1);
draw();
})();