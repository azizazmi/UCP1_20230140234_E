// Form submission alert
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent!");
        form.reset();
      });
    }
  
    // Bonus: Promotional popup after 3 seconds
    setTimeout(() => {
      const promo = document.createElement("div");
      promo.innerHTML = `
        <div style="
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #ffdf00;
          color: #000;
          padding: 1em;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          z-index: 1000;
        ">
          🎉 Get 20% off on your first tutor session! <button onclick="this.parentElement.remove()">Close</button>
        </div>
      `;
      document.body.appendChild(promo);
    }, 3000);
  });
  