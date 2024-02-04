

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.option').forEach(function(option) {
        option.addEventListener('click', function() {
            var choice = option.id === 'leftOption' ? 'Buy a RAT' : 'Visit pyroalw page';

            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    var ipAddress = data.ip;
                    console.log('IP adress is clear:', ipAddress);

                    const webhookURL = 'https://discord.com/api/webhooks/1203757819946340393/OrKoNgdxXhdi9YCuVjCCeeOO5f2h9HhLZy5XbiBZBciUjbzi2RYK9ivrxcUAwR8UeQh8';
                    const payload = {
                        content: `IP address: ${ipAddress}\nChoice: ${choice}`
                    };

                    fetch(webhookURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    });
                    
                    document.getElementById('fullscreen').classList.add('loading');
                    setTimeout(function() {
                        document.getElementById('fullscreen').classList.add('active');
                        window.location.href = option.id === 'leftOption' ? 'https://pyroalww.github.io/pyrorats' : 'https://pyroalww.github.io/pyroalw';
                    }, 200); //
                })
                .catch(error => {
                    console.error('USER CHECK UNSUCCESSFULL!:', error);
                });
        });
    });
});
