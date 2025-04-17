const footer = document.createElement('div');
footer.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    .footer {
      background-color: #000;
      color: #ddd;
      padding: 40px 20px;
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }

    .footer-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-section {
      flex: 1;
      min-width: 250px;
    }

    .footer h2, .footer h3 {
      color: #fff;
      margin-bottom: 20px;
    }

    .footer-logo {
      display: block;
      margin: 0 auto;
      max-width: 150px;
      height: auto;
    }

    .footer p {
      line-height: 1.6;
      color: #ccc;
    }

    .social-links {
      list-style: none;
      padding: 0;
    }

    .social-links li {
      margin-bottom: 10px;
      color: #ccc;
    }

    .social-links i {
      margin-right: 10px;
    }

    hr {
      border: none;
      border-top: 1px solid #333;
      margin: 30px auto;
      width: 90%;
    }

    .footer i {
      color: #4da6ff;
    }

    .footer a {
      text-decoration: none;
      color: inherit;
    }

    .footer a:hover {
      color: #fff;
    }

    @media screen and (max-width: 768px) {
      .footer-container {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h2>PC Master te brinda productos de calidad</h2>
        <img src="images/logo_pc.jpg" alt="PC Master Express Logo" class="footer-logo">
      </div>

      <div class="footer-section">
        <h3>Sobre Nosotros</h3>
        <p>Nuestro propósito es brindar productos de calidad reducidos de desechos, cuidando nuestro planeta.</p>
        <p><i class="fas fa-phone-alt"></i> <strong>+593 996691773</strong></p>
      </div>

      <div class="footer-section">
        <h3>Redes Sociales</h3>
        <ul class="social-links">
          <li><i class="fab fa-facebook-f"></i> Facebook</li>
          <li><i class="fab fa-twitter"></i> Twitter</li>
          <li><i class="fab fa-instagram"></i> Instagram</li>
        </ul>
      </div>
    </div>

    <hr>
    <p class="copyright">Copyright 2025 | Ing. Moises Balón Malavé</p>
  </footer>
`;

document.body.appendChild(footer);
