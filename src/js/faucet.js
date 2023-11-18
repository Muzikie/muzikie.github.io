async function sendTokens (e) {
    e.preventDefault();
    const formBody = JSON.stringify(Object.fromEntries(new FormData(this)));
    try {
        const response = await fetch(this.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formBody, // Send the data as JSON
        });
        const data = await response.json();
        document.getElementById('faucet-feedback').textContent = data.success ? 'Sent. Check your wallet!' : 'Something went wrong. Try again later.';
    } catch (error) {
        document.getElementById('faucet-feedback').textContent = error.message;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('faucet-form');
    form.addEventListener('submit', sendTokens);
});
