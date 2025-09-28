{\rtf1\ansi\ansicpg1250\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let zdenaHP = 100;\
let rootHP = 100;\
let gameOver = false;\
\
const zdenaBar = document.getElementById("zdenaHealth");\
const rootBar = document.getElementById("rootHealth");\
\
// Zdenovi ub\'fdv\'e1 zdrav\'ed postupn\uc0\u283 \
setInterval(() => \{\
  if (!gameOver) \{\
    zdenaHP -= 1;\
    zdenaBar.value = zdenaHP;\
    if (zdenaHP <= 0) endGame("Prohra: Ko\uc0\u345 en t\u283  pohltil!");\
  \}\
\}, 1000);\
\
// Ovl\'e1d\'e1n\'ed kl\'e1ves\
document.addEventListener("keydown", (e) => \{\
  if (gameOver) return;\
\
  if (e.code === "Space") \{\
    rootHP -= 5;\
    rootBar.value = rootHP;\
    if (rootHP <= 0) endGame("Vyhr\'e1l jsi: Rozbil jsi ko\uc0\u345 en!");\
  \}\
\
  if (e.code === "ShiftLeft") \{\
    if (Math.random() < 0.1) \{ // 10% \'9aance, \'9ee p\uc0\u345 ijdou kamar\'e1di\
      endGame("Vyhr\'e1l jsi: Kamar\'e1di t\uc0\u283  zachr\'e1nili!");\
    \}\
  \}\
\});\
\
function endGame(message) \{\
  gameOver = true;\
  alert(message);\
\}\
}