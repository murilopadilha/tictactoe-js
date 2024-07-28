const gameKeys = document.querySelectorAll('.gameKeys');
const startBtn = document.getElementById('startGame');
const restartBtn = document.getElementById('restartGame');
const input1 = document.getElementById('playerName-1');
const input2 = document.getElementById('playerName-2');
const message = document.getElementById('message');
const main = document.querySelector('main');
const root = document.querySelector(':root');
const gameKey1 = document.getElementById('gameKey-1');

let plays = 0;

function checkInputs() {
    if (input1.value !== '' && input2.value !== '') {
        startBtn.removeAttribute('disabled');
    } else {
        startBtn.setAttribute('disabled', 'true');
    }
}

input1.addEventListener('input', checkInputs);
input2.addEventListener('input', checkInputs);
startBtn.addEventListener('click', function(ev) {
    ev.preventDefault()
    input1.setAttribute('disabled', 'true');
    input2.setAttribute('disabled', 'true');
    restartBtn.removeAttribute('disabled')
    startBtn.setAttribute('disabled', 'true')
        
    for (let i = 0; i < gameKeys.length; i++) {
        gameKeys[i].removeAttribute('disabled');
    }

    game()

});

function game() {
    let player1 = input1.value;
    let player2 = input2.value;
    let winnerPlayer

    let roundPlayer = player1;
    message.innerText = 'Vez de ' + player1;

    gameKeys.forEach(function(gameKey) {
        gameKey.addEventListener('click', function() {
            plays++;
            if (roundPlayer === player1) {
                if(gameKey.value === 'X' || gameKey.value === 'O'){
                    message.innerText = 'Essa casa já foi jogada!'
                } else {
                    gameKey.value = 'X';
                    message.innerText = 'Vez de ' + player2;
                    roundPlayer = player2;
                    winnerPlayer = player1;
                }
            } else if (roundPlayer === player2) {
                if(gameKey.value === 'X' || gameKey.value === 'O'){
                    message.innerText = 'Essa casa já foi jogada!'
                } else {
                    gameKey.value = 'O';
                    message.innerText = 'Vez de ' + player1;
                    roundPlayer = player1;
                    winnerPlayer = player2;
                }
            }

            if (checkWin(winnerPlayer, player1, player2)) {
                if(winnerPlayer === player1) {
                    message.style.color = '#ff0043'
                } else if(winnerPlayer === player2) {
                    message.style.color = '#3f35cc' 
                }
                message.innerText = 'Parabéns! ' + winnerPlayer + ' venceu!';
                gameKeys.forEach(function(gameKey) {
                    gameKey.setAttribute('disabled', 'true');
                });
            } else if(plays === 9) {
                message.innerText = 'Deu velha!'
                message.style.color = '#cddb00'
            }
        });
    });
}

function checkWin(winnerPlayer, player1, player2) {
        if (gameKeys[0].value !== '' && gameKeys[0].value === gameKeys[1].value && gameKeys[0].value === gameKeys[2].value) {
            if(winnerPlayer === player1) {
                document.getElementById('gameKey-1').style.color = '#ff0043'
                document.getElementById('gameKey-2').style.color = '#ff0043'
                document.getElementById('gameKey-3').style.color = '#ff0043'
            } else if(winnerPlayer === player2) {
                document.getElementById('gameKey-1').style.color = '#3f35cc'
                document.getElementById('gameKey-2').style.color = '#3f35cc'
                document.getElementById('gameKey-3').style.color = '#3f35cc'
            }
            return true // 1° Horizontal
        }
        if (gameKeys[3].value !== '' && gameKeys[3].value === gameKeys[4].value && gameKeys[3].value === gameKeys[5].value) {
            if(winnerPlayer === player1) {
                document.getElementById('gameKey-4').style.color = '#ff0043'
                document.getElementById('gameKey-5').style.color = '#ff0043'
                document.getElementById('gameKey-6').style.color = '#ff0043'
            } else if(winnerPlayer === player2) {
                document.getElementById('gameKey-4').style.color = '#3f35cc'
                document.getElementById('gameKey-5').style.color = '#3f35cc'
                document.getElementById('gameKey-6').style.color = '#3f35cc'
            }
            return true // 2° Horizontal
        }
        if (gameKeys[6].value !== '' && gameKeys[6].value === gameKeys[7].value && gameKeys[6].value === gameKeys[8].value) {
            if(winnerPlayer === player1) {
                document.getElementById('gameKey-7').style.color = '#ff0043'
                document.getElementById('gameKey-8').style.color = '#ff0043'
                document.getElementById('gameKey-9').style.color = '#ff0043'
            } else if(winnerPlayer === player2) {
                document.getElementById('gameKey-7').style.color = '#3f35cc'
                document.getElementById('gameKey-8').style.color = '#3f35cc'
                document.getElementById('gameKey-9').style.color = '#3f35cc'
            }
            return true // 3° Horizontal
        }
        if (gameKeys[0].value !== '' && gameKeys[0].value === gameKeys[3].value && gameKeys[0].value === gameKeys[6].value) {
            if(winnerPlayer === player1) {
                document.getElementById('gameKey-1').style.color = '#ff0043'
                document.getElementById('gameKey-4').style.color = '#ff0043'
                document.getElementById('gameKey-7').style.color = '#ff0043'
            } else if(winnerPlayer === player2) {
                document.getElementById('gameKey-1').style.color = '#3f35cc'
                document.getElementById('gameKey-4').style.color = '#3f35cc'
                document.getElementById('gameKey-7').style.color = '#3f35cc'
            }
            return true // 1° Vertical
        }
        if (gameKeys[1].value !== '' && gameKeys[1].value === gameKeys[4].value && gameKeys[1].value === gameKeys[7].value) {
            if(winnerPlayer === player1) {
                document.getElementById('gameKey-2').style.color = '#ff0043'
                document.getElementById('gameKey-5').style.color = '#ff0043'
                document.getElementById('gameKey-8').style.color = '#ff0043'
            } else if(winnerPlayer === player2) {
                document.getElementById('gameKey-2').style.color = '#3f35cc'
                document.getElementById('gameKey-5').style.color = '#3f35cc'
                document.getElementById('gameKey-8').style.color = '#3f35cc'
            }
            return true // 2° Vertical
        }
        if (gameKeys[2].value !== '' && gameKeys[2].value === gameKeys[5].value && gameKeys[2].value === gameKeys[8].value) {
            if(winnerPlayer === player1) {
                document.getElementById('gameKey-3').style.color = '#ff0043'
                document.getElementById('gameKey-6').style.color = '#ff0043'
                document.getElementById('gameKey-9').style.color = '#ff0043'
            } else if(winnerPlayer === player2) {
                document.getElementById('gameKey-3').style.color = '#3f35cc'
                document.getElementById('gameKey-6').style.color = '#3f35cc'
                document.getElementById('gameKey-9').style.color = '#3f35cc'
            }
            return true // 3° Vertical
        }
        if (gameKeys[0].value !== '' && gameKeys[0].value === gameKeys[4].value && gameKeys[0].value === gameKeys[8].value) {
            if(winnerPlayer === player1) {
                document.getElementById('gameKey-1').style.color = '#ff0043'
                document.getElementById('gameKey-5').style.color = '#ff0043'
                document.getElementById('gameKey-9').style.color = '#ff0043'
            } else if(winnerPlayer === player2) {
                document.getElementById('gameKey-1').style.color = '#3f35cc'
                document.getElementById('gameKey-5').style.color = '#3f35cc'
                document.getElementById('gameKey-9').style.color = '#3f35cc'
            }
            return true // 1° Diagonal
        }
        if (gameKeys[2].value !== '' && gameKeys[2].value === gameKeys[4].value && gameKeys[2].value === gameKeys[6].value) {
            if(winnerPlayer === player1) {
                document.getElementById('gameKey-3').style.color = '#ff0043'
                document.getElementById('gameKey-5').style.color = '#ff0043'
                document.getElementById('gameKey-7').style.color = '#ff0043'
            } else if(winnerPlayer === player2) {
                document.getElementById('gameKey-3').style.color = '#3f35cc'
                document.getElementById('gameKey-5').style.color = '#3f35cc'
                document.getElementById('gameKey-7').style.color = '#3f35cc'
            }
            return true // 2° Diagonal
        }
        return false;
    }

    document.getElementById('changeTheme').addEventListener('click', function () {
        if (main.dataset.theme === 'dark') {
            main.dataset.theme = 'light';
            updateThemeColors('light');
        } else {
            main.dataset.theme = 'dark';
            updateThemeColors('dark');
        }
    });

    restartBtn.addEventListener('click', function() {  
        for (let i = 0; i < gameKeys.length; i++) {
            gameKeys[i].value = ''
            gameKeys[i].removeAttribute('disabled');
        }
        plays = 0;
        message.style.color = main.dataset.theme === 'dark' ? '#f1f5f9' : '#212529';
        gameKeys.forEach(key => {
            key.style.color = main.dataset.theme === 'dark' ? '#f1f5f9' : '#212529';
        });
    });

function updateThemeColors(theme) {
    if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        gameKeys.forEach(key => {
            key.style.color = '#f1f5f9';
        });
    } else {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#212529')
        gameKeys.forEach(key => {
            key.style.color = '#212529';
        });
    }
}