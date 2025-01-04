let selectedOperation = null;

function selectOperation(operation) {
    // Tüm butonların seçimini sıfırla
    document.querySelectorAll('.buttons-container button').forEach(button => {
        button.classList.remove('selected');
    });

    // Seçili butonu vurgula
    selectedOperation = operation;
    
    document.getElementById(getButtonId(operation)).classList.add('selected');
}

function getButtonId(operation) {
    switch (operation) {
        case '+': return 'add';
        case '-': return 'subtract';
        case '/': return 'divide';
        case '*': return 'multiply';
    }
}

function playSingleplayer() {
    countdown(selectedOperation);
    // window.location.href = `game.html?operation=${encodeURIComponent(selectedOperation)}`;
}

function countdown(operation){
    if (!operation) {
        alert('Please select an operation first.');
        return;
    }

    const countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'block';
    let countdown = 3;

    countdownElement.textContent = countdown;

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            window.location.href = `game.html?operation=${encodeURIComponent(operation)}`;
        }
    }, 1000);
}

// frontend/assets/js/challenge.js
// async function playMultiplayer() {
//     countdown(selectedOperation);
//     console.log(selectOperation);
    
//     try {
//         const username = localStorage.getItem('username');
//         const response = await fetch('http://localhost:5000/api/games/create', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, operation: selectedOperation }),
//         });

//         if (!response.ok) {
//             console.error('Response not OK:', response);
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Multiplayer game created:', data);
//         window.location.href = `multiplayer.html?gameId=${data.gameId}`;
//     } catch (error) {
//         console.error('Error creating multiplayer game:', error);
//         alert('Failed to start multiplayer game. Please try again.');
//     }
// }


function playMultiplayer() {
    if (!selectedOperation) {
        alert('Please select an operation first.');
        return;
    }

    const countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'block';
    let countdown = 3;

    countdownElement.textContent = countdown;

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            window.location.href = `multiplayer.html?operation=${encodeURIComponent(selectedOperation)}`;
        }
    }, 1000);
}