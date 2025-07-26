// panorama.js
let panierCount = 0;

// Charger depuis localStorage si disponible
if (localStorage.getItem('panoramaPanierCount')) {
  panierCount = parseInt(localStorage.getItem('panoramaPanierCount'));
  updatePanierDisplay();
}

function updatePanierDisplay() {
  const panierLink = document.querySelector('.panier-link');
  if (panierLink) {
    panierLink.textContent = `Panier (${panierCount})`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const boutons = document.querySelectorAll(".produit button");

  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      panierCount++;
      localStorage.setItem('panoramaPanierCount', panierCount);
      updatePanierDisplay();
    });
  });

  updatePanierDisplay();

  // Animation formulaire contact
  const form = document.querySelector('.contact form');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      form.insertAdjacentHTML('beforeend', '<p class="success-msg">Merci pour votre message !</p>');
      setTimeout(() => {
        const msg = form.querySelector('.success-msg');
        if(msg) msg.remove();
      }, 3000);
    });
  }

  // Gestion modale inscription
  const openSignup = document.getElementById('open-signup');
  const signupModal = document.getElementById('signup-modal');
  const closeSignup = document.getElementById('close-signup');
  if (openSignup && signupModal && closeSignup) {
    openSignup.addEventListener('click', (e) => {
      e.preventDefault();
      signupModal.style.display = 'flex';
    });
    closeSignup.addEventListener('click', () => {
      signupModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === signupModal) signupModal.style.display = 'none';
    });
    document.getElementById('signup-form').addEventListener('submit', (e) => {
      e.preventDefault();
      signupModal.querySelector('form').reset();
      signupModal.querySelector('form').insertAdjacentHTML('beforeend', '<p class="success-msg">Inscription réussie !</p>');
      setTimeout(() => {
        const msg = signupModal.querySelector('.success-msg');
        if(msg) msg.remove();
        signupModal.style.display = 'none';
      }, 2000);
    });
  }
  // Gestion modale paiement
  const paymentModal = document.getElementById('payment-modal');
  const closePayment = document.getElementById('close-payment');
  const panierLink = document.querySelector('.panier-link');
  if (paymentModal && closePayment && panierLink) {
    panierLink.addEventListener('click', (e) => {
      e.preventDefault();
      paymentModal.style.display = 'flex';
    });
    closePayment.addEventListener('click', () => {
      paymentModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === paymentModal) paymentModal.style.display = 'none';
    });
    document.getElementById('payment-form').addEventListener('submit', (e) => {
      e.preventDefault();
      paymentModal.querySelector('form').reset();
      paymentModal.querySelector('form').insertAdjacentHTML('beforeend', '<p class="success-msg">Paiement effectué !</p>');
      setTimeout(() => {
        const msg = paymentModal.querySelector('.success-msg');
        if(msg) msg.remove();
        paymentModal.style.display = 'none';
      }, 2000);
    });
  }
});
