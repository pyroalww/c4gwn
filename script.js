const webhookURL = process.env.DISCORD_WEBHOOK_URL;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.option').forEach(function(option) {
        option.addEventListener('click', function() {
            var choice = option.id === 'leftOption' ? 'Buy a RAT' : 'Visit pyroalw page';

            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    var ipAddress = data.ip;
                    console.log('IP adress is clear:', ipAddress);

                    
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
                    }, 55500); // 2 saniye sonra yönlendirme yap
                })
                .catch(error => {
                    console.error('USER CHECK UNSUCCESSFULL!:', error);
                });
        });
    });
});
