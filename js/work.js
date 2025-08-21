
document.getElementById('contactform').addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('responesMsg');
    msg.textContent = "Thank You! We've recieved your message.";
    msg.style.color = 'green';
    this.requestFullscreen();
})