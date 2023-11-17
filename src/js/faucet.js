document.getElementById('faucetForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        const response = await fetch(this.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(new FormData(this))), // Send the data as JSON
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
});
