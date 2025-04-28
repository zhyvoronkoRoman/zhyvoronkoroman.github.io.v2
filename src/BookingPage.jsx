import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAutoSetCarSelect, useDateRestrictions, useBookingSave,useStickyNavbar, useMenuToggle } from './scripts.js';

function BookingPage() {
  const navigate = useNavigate();
  useAutoSetCarSelect();
  useDateRestrictions();
  useStickyNavbar();
    useMenuToggle();
  const saveBooking = useBookingSave();
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      {/* Навігація */}
            <nav>
              <Link to="/" className="brand">
                <h1>Черемшина<b className="accent"></b></h1>
              </Link>
            
              <div className="menu">
                {/* Закриття меню */}
                <div className="btn close-menu-btn">
                  <i className="fas fa-times close-btn"></i>
                </div>
            
                {/* Навігаційні посилання */}
                <Link to="/collection" className="nav-link">Машини</Link>
                <Link to="/#about" href=""className="nav-link">Про Нас</Link> {/* якір на секцію */}
                <Link to="/yourbooks" className="nav-link">Ваші бронювання</Link>
            
                {/* Кнопка Розпочати */}
                <button className="btn-2" onClick={() => navigate('/booking')}>
                  Розпочати
                </button>
              </div>
            
              {/* Відкриття меню (бургер) */}
              <div className="btn open-menu-btn">
                <i className="fas fa-bars menu-btn"></i>
              </div>
            </nav>
            {/* Навігація кінець */}

      <section className="contact">
        <h1>"Черемшина" - керуй мрією!</h1>
        <p>
          Є запитання або потрібна допомога? Наша команда допоможе
          знайти найкращу машину під ваші потреби!
        </p>
        <form id="booking-form">
          <div className="car-select">
            <div className="car-select-item">
              <label htmlFor="car-type">Назва машини:</label>
              <select name="car-type" id="car-select-input" className="car-type">
                <option value="Toyota Corolla">Toyota Corolla</option>
                <option value="BMW X5">BMW X5</option>
                <option value="Kia Soul">Kia Soul</option>
                <option value="Ford Focus">Ford Focus</option>
                <option value="BMW 3 f30">BMW 3 f30</option>
                <option value="BMW 5 g30">BMW 5 g30</option>
                <option value="Renaut Megan 2">Renaut Megan 2</option>
                <option value="Citroen Berlingo">Citroen Berlingo</option>
                <option value="Mercedes C class">Mercedes C class</option>
                <option value="Honda Civic">Honda Civic</option>
                <option value="Volvo XC60">Volvo XC60</option>
                <option value="Peugeot 5008">Peugeot 5008</option>
              </select>
            </div>

            <div className="car-select-item">
              <label htmlFor="date-start">Дата початку:</label>
              <input type="date" id="date-start" name="date-start" className="car-select-input" />
            </div>

            <div className="car-select-item">
              <label htmlFor="date-end">Дата кінця:</label>
              <input type="date" id="date-end" name="date-end" className="car-select-input" />
            </div>
          </div>

          <div className="contact-form">
            <input type="text" name="name" className="input1" placeholder="Ім'я" required />
            <input type="email" name="email" className="input2" placeholder="Email" required />
            <input type="phone" name="phone" className="input3" placeholder="Телефон" required />
            <button
              type="button"
              className="btn-2"
              onClick={() => saveBooking?.()}
            >
              OK
            </button>
          </div>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Оренда автомобілів. Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default BookingPage;
