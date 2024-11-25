import React from 'react';
import Link from 'next/link';
import "./Home.css"; 

const Home = () => {
  return (
    <div>
     
      

      <main>
      <section className="hero">
        <div className="container">
          <h2>Bienvenidos a BoxFul</h2>
          <p>
            La solución perfecta para tus envios . Únete y descubre lo
            que podemos ofrecerte.
          </p>
          <Link href={"/"} className="cta-btn">Empezar Ahora</Link>
        </div>
      </section>


      <section id="features" className="features">
        <div className="container">
          <h3>Nuestras Características</h3>
          <div className="features-list">
            <div className="feature">
              <h4>Fácil de Usar</h4>
              <p>Interfaz intuitiva para una experiencia sin complicaciones.</p>
            </div>
            <div className="feature">
              <h4>Soporte 24/7</h4>
              <p>Siempre estamos aquí para ayudarte.</p>
            </div>
            <div className="feature">
              <h4>Alta Seguridad</h4>
              <p>Tu información está protegida con nosotros.</p>
            </div>
          </div>
        </div>
      </section>

  </main>
      

  
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 BoxFul. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
