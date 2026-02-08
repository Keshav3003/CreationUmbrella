// Envelope and Love Letter Interactive Elements
$(document).ready(function () {
  var envelope = $("#envelope");
  var envelopeWrapper = $("#envelopeWrapper");
  var letterContainer = $("#letterContainer");
  var openBtn = $("#openBtn");
  var closeBtn = $("#closeBtn");

  // Open envelope animation
  envelope.click(function () {
    openEnvelope();
  });
  
  openBtn.click(function () {
    openEnvelope();
  });

  // Close letter and return to envelope
  closeBtn.click(function () {
    closeLetter();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
    
    // After envelope animation, show full letter
    setTimeout(function() {
      envelopeWrapper.fadeOut(500, function() {
        letterContainer.fadeIn(500);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }, 2000);
  }

  function closeLetter() {
    letterContainer.fadeOut(500, function() {
      envelope.addClass("close").removeClass("open");
      envelopeWrapper.fadeIn(500);
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Additional Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
  // Add sparkle effect on letter hover
  const letterPaper = document.querySelector('.letter-paper');
  
  if (letterPaper) {
    letterPaper.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.01)';
    });
    
    letterPaper.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }

  // Play Clip button click effect
  const playBtn = document.getElementById('playClipBtn');
  
  if (playBtn) {
    playBtn.addEventListener('click', function(e) {
      // Check if URL is not set
      if (this.getAttribute('href') === 'YOUR_VIDEO_URL_HERE') {
        e.preventDefault();
        alert('Please update the video URL in part2.html!\n\nReplace YOUR_VIDEO_URL_HERE with your actual video link.');
      } else {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1.1)';
        }, 100);
      }
    });
  }

  // Create random floating hearts occasionally
  setInterval(createRandomHeart, 3000);

  function createRandomHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '♥';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    const container = document.querySelector('.hearts-background');
    if (container) {
      container.appendChild(heart);
      
      // Remove after animation
      setTimeout(() => {
        heart.remove();
      }, 15000);
    }
  }
});
