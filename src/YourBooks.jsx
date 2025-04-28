import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useShowBookings,useStickyNavbar, useMenuToggle } from './scripts';

function YourBooks() {
    const navigate = useNavigate();
    useShowBookings();
    useStickyNavbar();
    useMenuToggle();
  return (
    <>
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

      <section className="your-bookings">
        <h1>Ваші бронювання</h1>
        <div id="bookings-list">
          <p id="no-bookings">Ще немає бронювань.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Оренда автомобілів. Всі права захищені.</p>
      </footer>
    </>
  );
}

export default YourBooks;