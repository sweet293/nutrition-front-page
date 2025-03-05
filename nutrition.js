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