function showJoke(question, answer) {
    const jokes = {
        1: { 
            yes: 'Perfect hydration! Your cells are having a pool party! 💦', 
            no: 'Your body is practically a desert right now! Time to refill! 🏜️' 
        },
        2: { 
            yes: 'Your body is doing a little happy dance right now! 🥦🥕', 
            no: 'Your vegetables are feeling neglected. They miss you! 🥺' 
        },
        3: { 
            yes: 'Your brain thanks you for the beauty rest! 😴✨', 
            no: 'Coffee companies love customers like you! ☕️' 
        },
        4: { 
            yes: 'Your future self just sent a thank you note! 💪', 
            no: 'Your couch has officially claimed you as its own! 🛋️' 
        },
        5: { 
            yes: 'Neural pathways: activated! Brain: leveled up! 🧠⬆️', 
            no: 'Your brain cells are waiting for some action! 🧠💤' 
        }
    };
    
    const jokeElement = document.getElementById('joke' + question);
    jokeElement.innerText = jokes[question][answer];
    jokeElement.style.display = 'block';
    jokeElement.classList.add('animate__animated', 'animate__fadeIn');
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.padding = '10px 0';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.padding = '15px 0';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Optional: Add click event for "Share Your Story" button
document.querySelector('.add-testimonial-btn')?.addEventListener('click', function() {
    alert('Testimonial submission feature coming soon!');
});

// Lottie Animation Hover Functionality
document.addEventListener('DOMContentLoaded', () => {
    const lottieContainer = document.getElementById('lottie-container');
    const hoverMessage = document.getElementById('hover-message');
    const lottiePlayer = document.querySelector('dotlottie-player');
    const tipsSection = document.getElementById('tips');
    
    // Intersection Observer to detect when tips section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Delay the animation by 2 seconds
                setTimeout(() => {
                    lottieContainer.classList.add('animate');
                }, 2000);
            } else {
                lottieContainer.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the section is visible
    });
    
    // Start observing the tips section
    observer.observe(tipsSection);
    
    // Handle hover on the lottie player
    lottieContainer.addEventListener('mouseenter', () => {
        // Show the bubble
        hoverMessage.classList.add('show');
        
        // Start tracking the mascot
        trackMascot();
    });
    
    lottieContainer.addEventListener('mouseleave', () => {
        // Hide the bubble when leaving
        hoverMessage.classList.remove('show');
    });
    
    function trackMascot() {
        // If we're not hovering, don't track
        if (!hoverMessage.classList.contains('show')) return;
        
        const playerRect = lottiePlayer.getBoundingClientRect();
        const containerRect = lottieContainer.getBoundingClientRect();
        
        // Calculate position based on the current position of the animated element
        // This is an approximation since the exact position depends on the animation state
        const offsetX = (playerRect.left + playerRect.width/2) - containerRect.left;
        
        // Position the bubble above the mascot
        hoverMessage.style.left = `${offsetX}px`;
        hoverMessage.style.top = '-30px'; // Position above the mascot
        
        // Continue tracking
        requestAnimationFrame(trackMascot);
    }
});