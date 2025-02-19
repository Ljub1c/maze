const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const buttonSolve = document.getElementById("btn-solve");
const buttonReset = document.getElementById("btn-reset");

buttonSolve.onclick = function() {
    solve();
    buttonSolve.disabled = true;
    buttonReset.disabled = true;
};

buttonReset.onclick = reset;

const DELAY = 50;
const DELAY1 = 100;

tsParticles.load("particles", {
    "particles": {
      "number": {
        "value": 100
      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "value": 3
      },
      "move": {
        "enable": true,
        "speed": 2
      },
      "opacity": {
        "value": 0.5
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4
      }
    },
    "interactivity": {
      "events": {
        "onHover": {
          "enable": true,
          "mode": "repulse"
        }
      },
      "modes": {
        "repulse": {
          "distance": 100
        }
      }
    }
  });

const scaleFactor = 1.2396694214876034;
ctx.scale(scaleFactor, scaleFactor);

const points = [
    [234,2], [234,10], [282,10], [282,26], [298,26], [298,10], [314,10], [314,26], [394,26], [394,42],
    [410,42], [410,74], [394,74], [394,106], [362,106], [362,138], [346,138], [346,154], [394,154],
    [394,170], [362,170], [362,186], [314,186], [314,170], [298,170], [298,74], [282,74], [282,106],
    [266,106], [266,90], [250,90], [250,122], [234,122], [234,90], [218,90], [218,106], [202,106],
    [202,90], [138,90], [138,74], [122,74], [122,106], [138,106], [138,122], [154,122], [154,106],
    [186,106], [186,138], [170,138], [170,154], [154,154], [154,170], [122,170], [122,154], [106,154],
    [106,138], [90,138], [90,170], [106,170], [106,186], [42,186], [42,170], [26,170], [26,138], [10,138],
    [10,218], [26,218], [26,234], [10,234], [10,266], [26,266], [26,282], [42,282], [42,298], [58,298],
    [58,314], [74,314], [74,298], [90,298], [90,282], [138,282], [138,298], [122,298], [122,314],
    [90,314], [90,330], [74,330], [74,394], [106,394], [106,426], [122,426], [122,362], [106,362],
    [106,346], [138,346], [138,330], [154,330], [154,314], [170,314], [170,330], [202,330], [202,298],
    [234,298], [234,330], [250,330], [250,346], [202,346], [202,378], [218,378], [218,362], [234,362],
    [234,378], [314,378], [314,394], [330,394], [330,378], [362,378], [362,410], [330,410], [330,426],
    [314,426], [314,410], [298,410], [298,394], [282,394], [282,426], [298,426], [298,442], [330,442],
    [330,458], [314,458], [314,474], [266,474], [266,458], [250,458], [250,482]
];

function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
}

function solve() {
    drawObject(points[0][0], points[0][1]);  // Nariši moder kvadratek na začetni točki
    moveObject(1);  // Premakni kvadratek po točkah
}

function moveObject(index) {
    if (index >= points.length) {
        drawLine();  // Ko kvadratek pride do konca, nariši črto
        return;
    }

    const [x, y] = points[index];
    drawObject(x, y);  // Posodobi pozicijo modrega kvadratka

    setTimeout(function() {
        moveObject(index + 1);
    }, DELAY);
}

function drawLine() {
    ctx.beginPath();

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#e35bc5";
    ctx.lineJoin = "round";

    ctx.moveTo(points[0][0], points[0][1]);
    drawStep(1);
}

function drawStep(index) {
    if (index >= points.length) {
        buttonSolve.disabled = false;
        buttonReset.disabled = false;
        return;
    }

    const [x, y] = points[index];
    ctx.lineTo(x, y);
    ctx.stroke();

    setTimeout(function() {
        drawStep(index + 1);
    }, DELAY1);
}

// Posodobljena funkcija za modri kvadratek
function drawObject(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Počisti prejšnji kvadratek
    draw();  // Znova nariši statične elemente
    ctx.fillStyle = "blue";
    ctx.fillRect(x - 5, y - 5, 10, 10);  // Prilagodite velikost kvadratka po potrebi
}


// maze
function draw() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.lineJoin = "miter";

    ctx.beginPath();

    ctx.moveTo(2,2);
    ctx.lineTo(226,2);
    ctx.moveTo(242,2);
    ctx.lineTo(482,2);
    ctx.moveTo(18,18);
    ctx.lineTo(34,18);
    ctx.moveTo(50,18);
    ctx.lineTo(66,18);
    ctx.moveTo(82,18);
    ctx.lineTo(98,18);
    ctx.moveTo(114,18);
    ctx.lineTo(178,18);
    ctx.moveTo(242,18);
    ctx.lineTo(274,18);
    ctx.moveTo(338,18);
    ctx.lineTo(370,18);
    ctx.moveTo(386,18);
    ctx.lineTo(402,18);
    ctx.moveTo(418,18);
    ctx.lineTo(450,18);
    ctx.moveTo(18,34);
    ctx.lineTo(82,34);
    ctx.moveTo(98,34);
    ctx.lineTo(130,34);
    ctx.moveTo(178,34);
    ctx.lineTo(210,34);
    ctx.moveTo(226,34);
    ctx.lineTo(274,34);
    ctx.moveTo(290,34);
    ctx.lineTo(386,34);
    ctx.moveTo(402,34);
    ctx.lineTo(418,34);
    ctx.moveTo(50,50);
    ctx.lineTo(98,50);
    ctx.moveTo(114,50);
    ctx.lineTo(226,50);
    ctx.moveTo(274,50);
    ctx.lineTo(338,50);
    ctx.moveTo(386,50);
    ctx.lineTo(402,50);
    ctx.moveTo(466,50);
    ctx.lineTo(482,50);
    ctx.moveTo(66,66);
    ctx.lineTo(82,66);
    ctx.moveTo(98,66);
    ctx.lineTo(162,66);
    ctx.moveTo(194,66);
    ctx.lineTo(210,66);
    ctx.moveTo(242,66);
    ctx.lineTo(306,66);
    ctx.moveTo(338,66);
    ctx.lineTo(354,66);
    ctx.moveTo(370,66);
    ctx.lineTo(402,66);
    ctx.moveTo(434,66);
    ctx.lineTo(450,66);
    ctx.moveTo(34,82);
    ctx.lineTo(66,82);
    ctx.moveTo(82,82);
    ctx.lineTo(114,82);
    ctx.moveTo(162,82);
    ctx.lineTo(194,82);
    ctx.moveTo(210,82);
    ctx.lineTo(274,82);
    ctx.moveTo(322,82);
    ctx.lineTo(354,82);
    ctx.moveTo(18,98);
    ctx.lineTo(82,98);
    ctx.moveTo(130,98);
    ctx.lineTo(194,98);
    ctx.moveTo(306,98);
    ctx.lineTo(338,98);
    ctx.moveTo(354,98);
    ctx.lineTo(370,98);
    ctx.moveTo(402,98);
    ctx.lineTo(450,98);
    ctx.moveTo(18,114);
    ctx.lineTo(34,114);
    ctx.moveTo(66,114);
    ctx.lineTo(82,114);
    ctx.moveTo(98,114);
    ctx.lineTo(130,114);
    ctx.moveTo(162,114);
    ctx.lineTo(178,114);
    ctx.moveTo(194,114);
    ctx.lineTo(210,114);
    ctx.moveTo(258,114);
    ctx.lineTo(290,114);
    ctx.moveTo(306,114);
    ctx.lineTo(354,114);
    ctx.moveTo(370,114);
    ctx.lineTo(402,114);
    ctx.moveTo(418,114);
    ctx.lineTo(434,114);
    ctx.moveTo(450,114);
    ctx.lineTo(466,114);
    ctx.moveTo(2,130);
    ctx.lineTo(34,130);
    ctx.moveTo(50,130);
    ctx.lineTo(114,130);
    ctx.moveTo(130,130);
    ctx.lineTo(146,130);
    ctx.moveTo(226,130);
    ctx.lineTo(242,130);
    ctx.moveTo(322,130);
    ctx.lineTo(354,130);
    ctx.moveTo(402,130);
    ctx.lineTo(418,130);
    ctx.moveTo(434,130);
    ctx.lineTo(450,130);
    ctx.moveTo(466,130);
    ctx.lineTo(482,130);
    ctx.moveTo(50,146);
    ctx.lineTo(66,146);
    ctx.moveTo(114,146);
    ctx.lineTo(130,146);
    ctx.moveTo(146,146);
    ctx.lineTo(162,146);
    ctx.moveTo(178,146);
    ctx.lineTo(226,146);
    ctx.moveTo(242,146);
    ctx.lineTo(258,146);
    ctx.moveTo(274,146);
    ctx.lineTo(290,146);
    ctx.moveTo(306,146);
    ctx.lineTo(322,146);
    ctx.moveTo(354,146);
    ctx.lineTo(402,146);
    ctx.moveTo(418,146);
    ctx.lineTo(434,146);
    ctx.moveTo(450,146);
    ctx.lineTo(466,146);
    ctx.moveTo(34,162);
    ctx.lineTo(50,162);
    ctx.moveTo(98,162);
    ctx.lineTo(114,162);
    ctx.moveTo(130,162);
    ctx.lineTo(146,162);
    ctx.moveTo(162,162);
    ctx.lineTo(258,162);
    ctx.moveTo(306,162);
    ctx.lineTo(322,162);
    ctx.moveTo(338,162);
    ctx.lineTo(386,162);
    ctx.moveTo(402,162);
    ctx.lineTo(418,162);
    ctx.moveTo(434,162);
    ctx.lineTo(450,162);
    ctx.moveTo(466,162);
    ctx.lineTo(482,162);
    ctx.moveTo(18,178);
    ctx.lineTo(34,178);
    ctx.moveTo(50,178);
    ctx.lineTo(98,178);
    ctx.moveTo(114,178);
    ctx.lineTo(162,178);
    ctx.moveTo(178,178);
    ctx.lineTo(194,178);
    ctx.moveTo(258,178);
    ctx.lineTo(306,178);
    ctx.moveTo(322,178);
    ctx.lineTo(338,178);
    ctx.moveTo(370,178);
    ctx.lineTo(466,178);
    ctx.moveTo(34,194);
    ctx.lineTo(114,194);
    ctx.moveTo(242,194);
    ctx.lineTo(258,194);
    ctx.moveTo(290,194);
    ctx.lineTo(386,194);
    ctx.moveTo(418,194);
    ctx.lineTo(450,194);
    ctx.moveTo(466,194);
    ctx.lineTo(482,194);
    ctx.moveTo(18,210);
    ctx.lineTo(50,210);
    ctx.moveTo(82,210);
    ctx.lineTo(98,210);
    ctx.moveTo(114,210);
    ctx.lineTo(146,210);
    ctx.moveTo(162,210);
    ctx.lineTo(226,210);
    ctx.moveTo(274,210);
    ctx.lineTo(322,210);
    ctx.moveTo(386,210);
    ctx.lineTo(402,210);
    ctx.moveTo(450,210);
    ctx.lineTo(466,210);
    ctx.moveTo(2,226);
    ctx.lineTo(18,226);
    ctx.moveTo(34,226);
    ctx.lineTo(82,226);
    ctx.moveTo(98,226);
    ctx.lineTo(114,226);
    ctx.moveTo(146,226);
    ctx.lineTo(162,226);
    ctx.moveTo(194,226);
    ctx.lineTo(242,226);
    ctx.moveTo(258,226);
    ctx.lineTo(274,226);
    ctx.moveTo(290,226);
    ctx.lineTo(306,226);
    ctx.moveTo(354,226);
    ctx.lineTo(386,226);
    ctx.moveTo(434,226);
    ctx.lineTo(466,226);
    ctx.moveTo(66,242);
    ctx.lineTo(98,242);
    ctx.moveTo(114,242);
    ctx.lineTo(130,242);
    ctx.moveTo(162,242);
    ctx.lineTo(210,242);
    ctx.moveTo(242,242);
    ctx.lineTo(258,242);
    ctx.moveTo(274,242);
    ctx.lineTo(322,242);
    ctx.moveTo(338,242);
    ctx.lineTo(354,242);
    ctx.moveTo(386,242);
    ctx.lineTo(402,242);
    ctx.moveTo(466,242);
    ctx.lineTo(482,242);
    ctx.moveTo(18,258);
    ctx.lineTo(34,258);
    ctx.moveTo(66,258);
    ctx.lineTo(82,258);
    ctx.moveTo(114,258);
    ctx.lineTo(178,258);
    ctx.moveTo(226,258);
    ctx.lineTo(242,258);
    ctx.moveTo(258,258);
    ctx.lineTo(290,258);
    ctx.moveTo(354,258);
    ctx.lineTo(434,258);
    ctx.moveTo(450,258);
    ctx.lineTo(466,258);
    ctx.moveTo(34,274);
    ctx.lineTo(50,274);
    ctx.moveTo(66,274);
    ctx.lineTo(146,274);
    ctx.moveTo(162,274);
    ctx.lineTo(194,274);
    ctx.moveTo(242,274);
    ctx.lineTo(258,274);
    ctx.moveTo(306,274);
    ctx.lineTo(322,274);
    ctx.moveTo(338,274);
    ctx.lineTo(370,274);
    ctx.moveTo(434,274);
    ctx.lineTo(450,274);
    ctx.moveTo(18,290);
    ctx.lineTo(34,290);
    ctx.moveTo(50,290);
    ctx.lineTo(82,290);
    ctx.moveTo(98,290);
    ctx.lineTo(130,290);
    ctx.moveTo(194,290);
    ctx.lineTo(274,290);
    ctx.moveTo(290,290);
    ctx.lineTo(322,290);
    ctx.moveTo(370,290);
    ctx.lineTo(386,290);
    ctx.moveTo(402,290);
    ctx.lineTo(482,290);
    ctx.moveTo(18,306);
    ctx.lineTo(50,306);
    ctx.moveTo(82,306);
    ctx.lineTo(114,306);
    ctx.moveTo(130,306);
    ctx.lineTo(178,306);
    ctx.moveTo(274,306);
    ctx.lineTo(290,306);
    ctx.moveTo(322,306);
    ctx.lineTo(370,306);
    ctx.moveTo(402,306);
    ctx.lineTo(450,306);
    ctx.moveTo(50,322);
    ctx.lineTo(82,322);
    ctx.moveTo(114,322);
    ctx.lineTo(146,322);
    ctx.moveTo(178,322);
    ctx.lineTo(194,322);
    ctx.moveTo(242,322);
    ctx.lineTo(290,322);
    ctx.moveTo(306,322);
    ctx.lineTo(322,322);
    ctx.moveTo(402,322);
    ctx.lineTo(418,322);
    ctx.moveTo(450,322);
    ctx.lineTo(482,322);
    ctx.moveTo(34,338);
    ctx.lineTo(50,338);
    ctx.moveTo(82,338);
    ctx.lineTo(130,338);
    ctx.moveTo(146,338);
    ctx.lineTo(242,338);
    ctx.moveTo(258,338);
    ctx.lineTo(274,338);
    ctx.moveTo(290,338);
    ctx.lineTo(306,338);
    ctx.moveTo(354,338);
    ctx.lineTo(386,338);
    ctx.moveTo(418,338);
    ctx.lineTo(466,338);
    ctx.moveTo(18,354);
    ctx.lineTo(50,354);
    ctx.moveTo(114,354);
    ctx.lineTo(162,354);
    ctx.moveTo(210,354);
    ctx.lineTo(258,354);
    ctx.moveTo(274,354);
    ctx.lineTo(354,354);
    ctx.moveTo(370,354);
    ctx.lineTo(386,354);
    ctx.moveTo(402,354);
    ctx.lineTo(418,354);
    ctx.moveTo(18,370);
    ctx.lineTo(34,370);
    ctx.moveTo(50,370);
    ctx.lineTo(66,370);
    ctx.moveTo(98,370);
    ctx.lineTo(114,370);
    ctx.moveTo(162,370);
    ctx.lineTo(178,370);
    ctx.moveTo(242,370);
    ctx.lineTo(370,370);
    ctx.moveTo(386,370);
    ctx.lineTo(418,370);
    ctx.moveTo(18,386);
    ctx.lineTo(34,386);
    ctx.moveTo(82,386);
    ctx.lineTo(114,386);
    ctx.moveTo(146,386);
    ctx.lineTo(162,386);
    ctx.moveTo(194,386);
    ctx.lineTo(306,386);
    ctx.moveTo(338,386);
    ctx.lineTo(354,386);
    ctx.moveTo(370,386);
    ctx.lineTo(402,386);
    ctx.moveTo(418,386);
    ctx.lineTo(450,386);
    ctx.moveTo(18,402);
    ctx.lineTo(50,402);
    ctx.moveTo(66,402);
    ctx.lineTo(98,402);
    ctx.moveTo(194,402);
    ctx.lineTo(210,402);
    ctx.moveTo(226,402);
    ctx.lineTo(258,402);
    ctx.moveTo(306,402);
    ctx.lineTo(354,402);
    ctx.moveTo(370,402);
    ctx.lineTo(418,402);
    ctx.moveTo(2,418);
    ctx.lineTo(18,418);
    ctx.moveTo(34,418);
    ctx.lineTo(66,418);
    ctx.moveTo(130,418);
    ctx.lineTo(146,418);
    ctx.moveTo(178,418);
    ctx.lineTo(194,418);
    ctx.moveTo(258,418);
    ctx.lineTo(274,418);
    ctx.moveTo(290,418);
    ctx.lineTo(306,418);
    ctx.moveTo(338,418);
    ctx.lineTo(370,418);
    ctx.moveTo(386,418);
    ctx.lineTo(450,418);
    ctx.moveTo(18,434);
    ctx.lineTo(34,434);
    ctx.moveTo(66,434);
    ctx.lineTo(82,434);
    ctx.moveTo(98,434);
    ctx.lineTo(130,434);
    ctx.moveTo(162,434);
    ctx.lineTo(226,434);
    ctx.moveTo(274,434);
    ctx.lineTo(290,434);
    ctx.moveTo(306,434);
    ctx.lineTo(338,434);
    ctx.moveTo(370,434);
    ctx.lineTo(466,434);
    ctx.moveTo(2,450);
    ctx.lineTo(18,450);
    ctx.moveTo(34,450);
    ctx.lineTo(50,450);
    ctx.moveTo(82,450);
    ctx.lineTo(98,450);
    ctx.moveTo(130,450);
    ctx.lineTo(162,450);
    ctx.moveTo(178,450);
    ctx.lineTo(194,450);
    ctx.moveTo(210,450);
    ctx.lineTo(226,450);
    ctx.moveTo(242,450);
    ctx.lineTo(274,450);
    ctx.moveTo(290,450);
    ctx.lineTo(322,450);
    ctx.moveTo(354,450);
    ctx.lineTo(386,450);
    ctx.moveTo(402,450);
    ctx.lineTo(418,450);
    ctx.moveTo(450,450);
    ctx.lineTo(466,450);
    ctx.moveTo(18,466);
    ctx.lineTo(34,466);
    ctx.moveTo(66,466);
    ctx.lineTo(82,466);
    ctx.moveTo(194,466);
    ctx.lineTo(210,466);
    ctx.moveTo(226,466);
    ctx.lineTo(242,466);
    ctx.moveTo(274,466);
    ctx.lineTo(306,466);
    ctx.moveTo(322,466);
    ctx.lineTo(354,466);
    ctx.moveTo(370,466);
    ctx.lineTo(402,466);
    ctx.moveTo(466,466);
    ctx.lineTo(482,466);
    ctx.moveTo(2,482);
    ctx.lineTo(242,482);
    ctx.moveTo(258,482);
    ctx.lineTo(482,482);
    ctx.moveTo(2,2);
    ctx.lineTo(2,482);
    ctx.moveTo(18,34);
    ctx.lineTo(18,114);
    ctx.moveTo(18,146);
    ctx.lineTo(18,210);
    ctx.moveTo(18,242);
    ctx.lineTo(18,258);
    ctx.moveTo(18,274);
    ctx.lineTo(18,290);
    ctx.moveTo(18,306);
    ctx.lineTo(18,354);
    ctx.moveTo(18,386);
    ctx.lineTo(18,402);
    ctx.moveTo(34,2);
    ctx.lineTo(34,18);
    ctx.moveTo(34,34);
    ctx.lineTo(34,66);
    ctx.moveTo(34,130);
    ctx.lineTo(34,162);
    ctx.moveTo(34,210);
    ctx.lineTo(34,258);
    ctx.moveTo(34,290);
    ctx.lineTo(34,306);
    ctx.moveTo(34,322);
    ctx.lineTo(34,338);
    ctx.moveTo(34,354);
    ctx.lineTo(34,370);
    ctx.moveTo(34,418);
    ctx.lineTo(34,466);
    ctx.moveTo(50,18);
    ctx.lineTo(50,34);
    ctx.moveTo(50,50);
    ctx.lineTo(50,82);
    ctx.moveTo(50,98);
    ctx.lineTo(50,146);
    ctx.moveTo(50,162);
    ctx.lineTo(50,178);
    ctx.moveTo(50,242);
    ctx.lineTo(50,290);
    ctx.moveTo(50,306);
    ctx.lineTo(50,322);
    ctx.moveTo(50,338);
    ctx.lineTo(50,354);
    ctx.moveTo(50,370);
    ctx.lineTo(50,402);
    ctx.moveTo(50,434);
    ctx.lineTo(50,450);
    ctx.moveTo(50,466);
    ctx.lineTo(50,482);
    ctx.moveTo(66,66);
    ctx.lineTo(66,82);
    ctx.moveTo(66,146);
    ctx.lineTo(66,162);
    ctx.moveTo(66,210);
    ctx.lineTo(66,226);
    ctx.moveTo(66,242);
    ctx.lineTo(66,258);
    ctx.moveTo(66,290);
    ctx.lineTo(66,306);
    ctx.moveTo(66,322);
    ctx.lineTo(66,466);
    ctx.moveTo(82,82);
    ctx.lineTo(82,114);
    ctx.moveTo(82,130);
    ctx.lineTo(82,178);
    ctx.moveTo(82,210);
    ctx.lineTo(82,226);
    ctx.moveTo(82,274);
    ctx.lineTo(82,290);
    ctx.moveTo(82,306);
    ctx.lineTo(82,322);
    ctx.moveTo(82,338);
    ctx.lineTo(82,370);
    ctx.moveTo(82,418);
    ctx.lineTo(82,434);
    ctx.moveTo(98,2);
    ctx.lineTo(98,50);
    ctx.moveTo(98,98);
    ctx.lineTo(98,114);
    ctx.moveTo(98,146);
    ctx.lineTo(98,162);
    ctx.moveTo(98,194);
    ctx.lineTo(98,210);
    ctx.moveTo(98,226);
    ctx.lineTo(98,274);
    ctx.moveTo(98,322);
    ctx.lineTo(98,386);
    ctx.moveTo(98,402);
    ctx.lineTo(98,434);
    ctx.moveTo(98,450);
    ctx.lineTo(98,482);
    ctx.moveTo(114,66);
    ctx.lineTo(114,98);
    ctx.moveTo(114,130);
    ctx.lineTo(114,146);
    ctx.moveTo(114,162);
    ctx.lineTo(114,194);
    ctx.moveTo(114,210);
    ctx.lineTo(114,226);
    ctx.moveTo(114,242);
    ctx.lineTo(114,258);
    ctx.moveTo(114,290);
    ctx.lineTo(114,306);
    ctx.moveTo(114,386);
    ctx.lineTo(114,418);
    ctx.moveTo(114,434);
    ctx.lineTo(114,466);
    ctx.moveTo(130,82);
    ctx.lineTo(130,98);
    ctx.moveTo(130,114);
    ctx.lineTo(130,162);
    ctx.moveTo(130,194);
    ctx.lineTo(130,210);
    ctx.moveTo(130,226);
    ctx.lineTo(130,242);
    ctx.moveTo(130,322);
    ctx.lineTo(130,338);
    ctx.moveTo(130,370);
    ctx.lineTo(130,434);
    ctx.moveTo(130,450);
    ctx.lineTo(130,466);
    ctx.moveTo(146,18);
    ctx.lineTo(146,50);
    ctx.moveTo(146,66);
    ctx.lineTo(146,82);
    ctx.moveTo(146,98);
    ctx.lineTo(146,114);
    ctx.moveTo(146,146);
    ctx.lineTo(146,162);
    ctx.moveTo(146,194);
    ctx.lineTo(146,242);
    ctx.moveTo(146,258);
    ctx.lineTo(146,274);
    ctx.moveTo(146,290);
    ctx.lineTo(146,322);
    ctx.moveTo(146,338);
    ctx.lineTo(146,402);
    ctx.moveTo(146,418);
    ctx.lineTo(146,450);
    ctx.moveTo(146,466);
    ctx.lineTo(146,482);
    ctx.moveTo(162,18);
    ctx.lineTo(162,34);
    ctx.moveTo(162,114);
    ctx.lineTo(162,146);
    ctx.moveTo(162,162);
    ctx.lineTo(162,194);
    ctx.moveTo(162,210);
    ctx.lineTo(162,226);
    ctx.moveTo(162,274);
    ctx.lineTo(162,306);
    ctx.moveTo(162,322);
    ctx.lineTo(162,338);
    ctx.moveTo(162,402);
    ctx.lineTo(162,434);
    ctx.moveTo(162,450);
    ctx.lineTo(162,482);
    ctx.moveTo(178,50);
    ctx.lineTo(178,82);
    ctx.moveTo(178,114);
    ctx.lineTo(178,130);
    ctx.moveTo(178,146);
    ctx.lineTo(178,162);
    ctx.moveTo(178,194);
    ctx.lineTo(178,210);
    ctx.moveTo(178,226);
    ctx.lineTo(178,242);
    ctx.moveTo(178,274);
    ctx.lineTo(178,290);
    ctx.moveTo(178,306);
    ctx.lineTo(178,322);
    ctx.moveTo(178,338);
    ctx.lineTo(178,418);
    ctx.moveTo(178,434);
    ctx.lineTo(178,466);
    ctx.moveTo(194,2);
    ctx.lineTo(194,34);
    ctx.moveTo(194,66);
    ctx.lineTo(194,82);
    ctx.moveTo(194,98);
    ctx.lineTo(194,146);
    ctx.moveTo(194,178);
    ctx.lineTo(194,226);
    ctx.moveTo(194,242);
    ctx.lineTo(194,274);
    ctx.moveTo(194,290);
    ctx.lineTo(194,322);
    ctx.moveTo(194,338);
    ctx.lineTo(194,386);
    ctx.moveTo(210,18);
    ctx.lineTo(210,34);
    ctx.moveTo(210,82);
    ctx.lineTo(210,98);
    ctx.moveTo(210,114);
    ctx.lineTo(210,130);
    ctx.moveTo(210,162);
    ctx.lineTo(210,194);
    ctx.moveTo(210,242);
    ctx.lineTo(210,274);
    ctx.moveTo(210,306);
    ctx.lineTo(210,338);
    ctx.moveTo(210,354);
    ctx.lineTo(210,370);
    ctx.moveTo(210,386);
    ctx.lineTo(210,418);
    ctx.moveTo(210,450);
    ctx.lineTo(210,482);
    ctx.moveTo(226,2);
    ctx.lineTo(226,82);
    ctx.moveTo(226,98);
    ctx.lineTo(226,146);
    ctx.moveTo(226,178);
    ctx.lineTo(226,210);
    ctx.moveTo(226,226);
    ctx.lineTo(226,290);
    ctx.moveTo(226,306);
    ctx.lineTo(226,338);
    ctx.moveTo(226,370);
    ctx.lineTo(226,386);
    ctx.moveTo(226,402);
    ctx.lineTo(226,450);
    ctx.moveTo(242,50);
    ctx.lineTo(242,66);
    ctx.moveTo(242,82);
    ctx.lineTo(242,114);
    ctx.moveTo(242,146);
    ctx.lineTo(242,162);
    ctx.moveTo(242,178);
    ctx.lineTo(242,226);
    ctx.moveTo(242,258);
    ctx.lineTo(242,274);
    ctx.moveTo(242,290);
    ctx.lineTo(242,322);
    ctx.moveTo(242,354);
    ctx.lineTo(242,370);
    ctx.moveTo(242,402);
    ctx.lineTo(242,418);
    ctx.moveTo(242,434);
    ctx.lineTo(242,482);
    ctx.moveTo(258,50);
    ctx.lineTo(258,66);
    ctx.moveTo(258,98);
    ctx.lineTo(258,146);
    ctx.moveTo(258,162);
    ctx.lineTo(258,178);
    ctx.moveTo(258,194);
    ctx.lineTo(258,210);
    ctx.moveTo(258,226);
    ctx.lineTo(258,258);
    ctx.moveTo(258,306);
    ctx.lineTo(258,354);
    ctx.moveTo(258,434);
    ctx.lineTo(258,450);
    ctx.moveTo(258,466);
    ctx.lineTo(258,482);
    ctx.moveTo(274,18);
    ctx.lineTo(274,50);
    ctx.moveTo(274,66);
    ctx.lineTo(274,98);
    ctx.moveTo(274,130);
    ctx.lineTo(274,162);
    ctx.moveTo(274,178);
    ctx.lineTo(274,226);
    ctx.moveTo(274,274);
    ctx.lineTo(274,306);
    ctx.moveTo(274,354);
    ctx.lineTo(274,370);
    ctx.moveTo(274,386);
    ctx.lineTo(274,434);
    ctx.moveTo(274,450);
    ctx.lineTo(274,466);
    ctx.moveTo(290,2);
    ctx.lineTo(290,18);
    ctx.moveTo(290,82);
    ctx.lineTo(290,146);
    ctx.moveTo(290,162);
    ctx.lineTo(290,178);
    ctx.moveTo(290,226);
    ctx.lineTo(290,242);
    ctx.moveTo(290,258);
    ctx.lineTo(290,306);
    ctx.moveTo(290,322);
    ctx.lineTo(290,338);
    ctx.moveTo(290,402);
    ctx.lineTo(290,418);
    ctx.moveTo(290,434);
    ctx.lineTo(290,450);
    ctx.moveTo(306,18);
    ctx.lineTo(306,34);
    ctx.moveTo(306,66);
    ctx.lineTo(306,98);
    ctx.moveTo(306,114);
    ctx.lineTo(306,162);
    ctx.moveTo(306,258);
    ctx.lineTo(306,274);
    ctx.moveTo(306,306);
    ctx.lineTo(306,338);
    ctx.moveTo(306,386);
    ctx.lineTo(306,402);
    ctx.moveTo(306,418);
    ctx.lineTo(306,434);
    ctx.moveTo(306,450);
    ctx.lineTo(306,466);
    ctx.moveTo(322,2);
    ctx.lineTo(322,18);
    ctx.moveTo(322,50);
    ctx.lineTo(322,82);
    ctx.moveTo(322,162);
    ctx.lineTo(322,178);
    ctx.moveTo(322,210);
    ctx.lineTo(322,258);
    ctx.moveTo(322,274);
    ctx.lineTo(322,306);
    ctx.moveTo(322,338);
    ctx.lineTo(322,354);
    ctx.moveTo(322,370);
    ctx.lineTo(322,386);
    ctx.moveTo(322,402);
    ctx.lineTo(322,418);
    ctx.moveTo(322,466);
    ctx.lineTo(322,482);
    ctx.moveTo(338,130);
    ctx.lineTo(338,162);
    ctx.moveTo(338,194);
    ctx.lineTo(338,290);
    ctx.moveTo(338,306);
    ctx.lineTo(338,338);
    ctx.moveTo(338,386);
    ctx.lineTo(338,402);
    ctx.moveTo(338,418);
    ctx.lineTo(338,466);
    ctx.moveTo(354,34);
    ctx.lineTo(354,82);
    ctx.moveTo(354,98);
    ctx.lineTo(354,130);
    ctx.moveTo(354,162);
    ctx.lineTo(354,178);
    ctx.moveTo(354,210);
    ctx.lineTo(354,226);
    ctx.moveTo(354,274);
    ctx.lineTo(354,306);
    ctx.moveTo(354,322);
    ctx.lineTo(354,354);
    ctx.moveTo(354,434);
    ctx.lineTo(354,450);
    ctx.moveTo(370,2);
    ctx.lineTo(370,18);
    ctx.moveTo(370,50);
    ctx.lineTo(370,98);
    ctx.moveTo(370,114);
    ctx.lineTo(370,146);
    ctx.moveTo(370,194);
    ctx.lineTo(370,210);
    ctx.moveTo(370,226);
    ctx.lineTo(370,258);
    ctx.moveTo(370,306);
    ctx.lineTo(370,322);
    ctx.moveTo(370,354);
    ctx.lineTo(370,434);
    ctx.moveTo(370,450);
    ctx.lineTo(370,466);
    ctx.moveTo(386,34);
    ctx.lineTo(386,50);
    ctx.moveTo(386,66);
    ctx.lineTo(386,98);
    ctx.moveTo(386,130);
    ctx.lineTo(386,146);
    ctx.moveTo(386,210);
    ctx.lineTo(386,226);
    ctx.moveTo(386,274);
    ctx.lineTo(386,338);
    ctx.moveTo(402,18);
    ctx.lineTo(402,34);
    ctx.moveTo(402,50);
    ctx.lineTo(402,66);
    ctx.moveTo(402,82);
    ctx.lineTo(402,130);
    ctx.moveTo(402,146);
    ctx.lineTo(402,242);
    ctx.moveTo(402,274);
    ctx.lineTo(402,306);
    ctx.moveTo(402,322);
    ctx.lineTo(402,354);
    ctx.moveTo(402,434);
    ctx.lineTo(402,466);
    ctx.moveTo(418,2);
    ctx.lineTo(418,18);
    ctx.moveTo(418,34);
    ctx.lineTo(418,98);
    ctx.moveTo(418,194);
    ctx.lineTo(418,274);
    ctx.moveTo(418,354);
    ctx.lineTo(418,386);
    ctx.moveTo(418,402);
    ctx.lineTo(418,418);
    ctx.moveTo(418,466);
    ctx.lineTo(418,482);
    ctx.moveTo(434,34);
    ctx.lineTo(434,82);
    ctx.moveTo(434,114);
    ctx.lineTo(434,178);
    ctx.moveTo(434,210);
    ctx.lineTo(434,242);
    ctx.moveTo(434,258);
    ctx.lineTo(434,274);
    ctx.moveTo(434,306);
    ctx.lineTo(434,370);
    ctx.moveTo(434,386);
    ctx.lineTo(434,402);
    ctx.moveTo(434,434);
    ctx.lineTo(434,466);
    ctx.moveTo(450,18);
    ctx.lineTo(450,66);
    ctx.moveTo(450,82);
    ctx.lineTo(450,98);
    ctx.moveTo(450,114);
    ctx.lineTo(450,130);
    ctx.moveTo(450,194);
    ctx.lineTo(450,210);
    ctx.moveTo(450,226);
    ctx.lineTo(450,242);
    ctx.moveTo(450,354);
    ctx.lineTo(450,418);
    ctx.moveTo(450,450);
    ctx.lineTo(450,466);
    ctx.moveTo(466,2);
    ctx.lineTo(466,34);
    ctx.moveTo(466,50);
    ctx.lineTo(466,66);
    ctx.moveTo(466,82);
    ctx.lineTo(466,114);
    ctx.moveTo(466,146);
    ctx.lineTo(466,162);
    ctx.moveTo(466,178);
    ctx.lineTo(466,194);
    ctx.moveTo(466,210);
    ctx.lineTo(466,226);
    ctx.moveTo(466,242);
    ctx.lineTo(466,274);
    ctx.moveTo(466,306);
    ctx.lineTo(466,322);
    ctx.moveTo(466,338);
    ctx.lineTo(466,386);
    ctx.moveTo(466,402);
    ctx.lineTo(466,450);
    ctx.moveTo(482,2);
    ctx.lineTo(482,482);

    ctx.stroke();
}

draw();
