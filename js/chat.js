let lastMessageTime = 0;
const messageInterval = 2000;

document.querySelector('.chat-input-container').addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('.chat-input');
    const message = input.value.trim();
    const currentTime = Date.now();

    if (currentTime - lastMessageTime < messageInterval) {
        alert('Por favor, espera antes de enviar otro mensaje.');
        return;
    }

    if (message) {
        const chatHistory = document.querySelector('.chat-history');
        const clientMessage = document.createElement('div');
        clientMessage.classList.add('message', 'client');
        clientMessage.innerHTML = `<p><strong>Cliente:</strong> ${message}</p>`;
        chatHistory.appendChild(clientMessage);

        lastMessageTime = currentTime;

        input.value = '';

        chatHistory.scrollTop = chatHistory.scrollHeight;

        if (!document.querySelector('#automatic-response')) {
            setTimeout(() => {
                const agentMessage = document.createElement('div');
                agentMessage.classList.add('message', 'agent');
                agentMessage.innerHTML =
                    '<p id="automatic-response"><strong>Soporte:</strong> Gracias por tu mensaje. Revisaremos tu caso.</p>';
                chatHistory.appendChild(agentMessage);

                chatHistory.scrollTop = chatHistory.scrollHeight;
            }, 1000);
        }
    }
});

window.addEventListener('load', () => {
    document.querySelector('.chat-input').focus();
});