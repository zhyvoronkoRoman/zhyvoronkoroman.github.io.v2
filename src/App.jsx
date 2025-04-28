import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage.jsx';
import CollectionPage from './Collection.jsx';
import YourBookingsPage from './YourBooks.jsx';
import './styles.css';
import './scripts.js';
import { useStickyNavbar, useMenuToggle } from './scripts.js'; // тільки хук-ефекти

function HomePage({ bookCar }) {
  const navigate = useNavigate();
  useStickyNavbar();
  useMenuToggle();
  useEffect(() => {
    window.ScrollReveal?.().reveal('.main-page, .collection, .about', {
      duration: 1000,
      reset: true,
      distance: '50px',
    });
  }, []);
  const cars = [
    {
      name: "Toyota Corolla",
      price: 5000 + " грн",
      transmission: "Механіка",
      quantity: 4,
      img: "img/corolla.jpg",
    },
    {
      name: "BMW X5",
      price: 8000 + " грн",
      transmission: "Автомат",
      quantity: 6,
      img: "img/bmw.jpg",
    },
    {
      name: "Ford Focus",
      price: 4000 + " грн",
      transmission: "Механіка",
      quantity: 2,
      img: "img/focus.jpg",
    }
  ];

  return (
    <>
      {/* Навігація */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <nav>
        <Link to="/" className="brand">
          <h1>Черемшина<b className="accent"></b></h1>
        </Link>
        <div className="menu">
          <div className="btn close-menu-btn">
            <i className="fas fa-times close-btn"></i>
          </div>
          <Link to="/collection" className="nav-link">Машини</Link>
          <a href="/#about" className="nav-link">Про Нас</a>
          <Link to="/yourbooks" className="nav-link">Ваші бронювання</Link>
          <button className="btn-2" onClick={() => navigate('/booking')}>
            Розпочати
          </button>
        </div>
        <div className="btn open-menu-btn">
          <i className="fas fa-bars menu-btn"></i>
        </div>
      </nav>

      {/* Головна сторінка */}
      <div className="main-page">
        <div className="main-headlines">
          <h1>Легко і швидко взяти машину на прокат у Зимній Воді!</h1>
          <p>Ми пропонуємо великий вибір машин під ваші потреби, незалежно від того, відпочинок з сім'єю це чи бізнес-подорож.</p>
          <button className="btn-2 btn-main" onClick={() => navigate('/booking')}>
            Розпочати
          </button>
        </div>
        <img src="img/main.png" className="main-page-image" alt="main-page-image"/>
      </div>

      {/* Колекція машин */}
      <section className="collection">
        <h1>Наші найновіші машини</h1>
        <div className="collection-container">
          {cars.map((car, index) => (
            <div key={index} className="collection-car-item">
              <img src={car.img} alt={car.name} />
              <div className="car-info-container">
                <div className="car-info">
                  <div className="car-price">
                    <h5>Ціна:</h5>
                    <h6>{car.price}/день</h6>
                  </div>
                  <div className="car-transmission">
                    <h5>Трансмісія:</h5>
                    <h6>{car.transmission}</h6>
                  </div>
                  <div className="number-of-car">
                    <h5>Кількість машин:</h5>
                    <h6>{car.quantity}</h6>
                  </div>
                </div>
              </div>
              <h2>{car.name}</h2>
              <button
                className="btn-2 btn-car"
                onClick={() => bookCar(car)} // тепер bookCar буде оновлювати стан
              >
                <p>Забронювати</p>
              </button>
            </div>
          ))}
        </div>
      </section>
 {/* Про Нас */}
 <section className="about" id="about">
        <div className="heading">
          <span>Хто ми та де ми?</span>
        </div>
        <div className="about-container">
          <div className="about-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.4729897160023!2d23.91562501589634!3d49.80640097939332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7e8a2a6e4b5%3A0x4935e4b8eb2e22a1!2sZymna%20Voda%2C%20Lviv%20Oblast!5e0!3m2!1sen!2sua!4v1645788676543!5m2!1sen!2sua"  
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
          <div className="about-text">
            <span>Про нас</span>
            <p>Ласкаво просимо до "Черемшина" – надійного сервісу з оренди автомобілів у с Зимна Вода! Ми пропонуємо зручний та швидкий прокат авто для мешканців і гостей регіону, забезпечуючи комфорт та безпеку на дорозі.</p>

                <p>Чому обирають нас?</p>
                <p>✔ Широкий вибір авто – від економ-класу до бізнес-седанів і позашляховиків.</p>
                <p>✔ Гнучкі умови оренди – погодинна, добова, довгострокова оренда.</p>
                <p>✔ Прозорі ціни – без прихованих платежів та комісій.</p>
                <p>✔ Зручна локація – швидке оформлення та видача авто у Зимній Воді.</p>
                <p>✔ Підтримка 24/7 – технічна допомога та консультації в будь-який час.</p>
                
                <p>Незалежно від того, чи ви приїхали у відрядження, на відпочинок або вам просто потрібне авто на певний час – "Черемшина" допоможе вам знайти ідеальний варіант!</p>        
                <p>З "Черемшина" оренда авто – це легко, швидко та доступно! 🚘✨</p>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer>
        <div className="contacts">
          <p>📍 Адреса: с. Зимна Вода, вул. Центральна, 15</p>
          <p>📞 Телефон: +380 67 123 45 67</p>
          <p>📧 Email: info@zimnavoda.com</p>
        </div>
        <p>&copy; 2025 Оренда автомобілів. Всі права захищені.</p>
      </footer>
    </>
  );
}

function App() {
  const [bookings, setBookings] = useState([]); 

  const bookCar = (car) => {
    setBookings(prev => [...prev, car]); 
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage bookCar={bookCar} />} /> 
        <Route path="#about" element={<HomePage bookCar={bookCar} />} />
        <Route path="/booking" element={<BookingPage bookCar={bookCar} />} /> 
        <Route path="/collection" element={<CollectionPage bookCar={bookCar} />} />
        <Route path="/yourbooks" element={<YourBookingsPage bookings={bookings} />} />
      </Routes>
    </Router>
  );
}

export default App;
