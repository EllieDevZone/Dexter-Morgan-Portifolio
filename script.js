  document.getElementById('mobile-menu').addEventListener('click', function() {
            this.classList.toggle('active');
            document.getElementById('navbar').classList.toggle('active');
        });
  
  
  
  const personalities = [
        "Kyle Butler",
        "The Bay Harbor Butcher",
        "Blood Spatter Analyst",
        "Harry's Code",
        "Dark Passenger",
        "serial killer",
        "The Perfect Husband",
        "Brother Dexter"
    ];
    
    const glitchElement = document.querySelector('.glitch');
    
    setInterval(() => {
        const randomPersona = personalities[Math.floor(Math.random() * personalities.length)];
        glitchElement.textContent = randomPersona;
        glitchElement.setAttribute('data-text', randomPersona);
    }, 2000); 
    