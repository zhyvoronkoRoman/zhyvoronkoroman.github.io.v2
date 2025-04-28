import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { bookCar, useStickyNavbar, useMenuToggle } from './scripts.js';

const initialCars = [
  { name: "Toyota Corolla", price: "5000 грн", transmission: "Механіка", quantity: 4, img: "img/corolla.jpg" },
  { name: "BMW X5", price: "8000 грн", transmission: "Автомат", quantity: 6, img: "img/bmw.jpg" },
  { name: "Ford Focus", price: "4000 грн", transmission: "Механіка", quantity: 2, img: "img/focus.jpg" },
  { name: "Kia Soul", price: "3500 грн", transmission: "Автомат", quantity: 1, img: "img/kiasoul.jpg" },
  { name: "BMW 3 f30", price: "7000 грн", transmission: "Автомат", quantity: 3, img: "img/images.jpg" },
  { name: "BMW 5 G30", price: "9000 грн", transmission: "Автомат", quantity: 8, img: "img/bmw g30.jpg" },
  { name: "Renaut Megan 2", price: "3500 грн", transmission: "Механіка", quantity: 2, img: "img/megan.jpg" },
  { name: "Citroen Berlingo", price: "5000 грн", transmission: "Механіка", quantity: 3, img: "img/berlingo.jpg" },
  { name: "Mercedes C class", price: "7500 грн", transmission: "Автомат", quantity: 3, img: "img/merin.jpg" },
  { name: "Honda Civic", price: "5300 грн", transmission: "Автомат", quantity: 4, img: "img/civic.jpg" },
  { name: "Volvo XC60", price: "6000 грн", transmission: "Автомат", quantity: 1, img: "img/volvo.jpg" },
  { name: "Peugeot 5008", price: "3000 грн", transmission: "Механіка", quantity: 1, img: "img/peugeot.jpg" },
];
const Collection = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState(initialCars); 
    useStickyNavbar();
    useMenuToggle();

  const handleBookCar = (carName) => {
    // Викликати твою функцію бронювання
    bookCar?.(carName);

    // Зменшити кількість доступних машин після бронювання
    setCars(prevCars =>
      prevCars.map(car =>
        car.name === carName && car.quantity > 0
          ? { ...car, quantity: car.quantity - 1 }
          : car
      )
    );
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      
      {/* Навігація */}
      <nav>
        <Link to="/" className="brand">
          <h1>Черемшина<b className="accent"></b></h1>
        </Link>

        <div className="menu">
          <div className="btn close-menu-btn">
            <i className="fas fa-times close-btn"></i>
          </div>

          <Link to="/collection" className="nav-link">Машини</Link>
          <Link to="/#about" className="nav-link">Про Нас</Link>
          <Link to="/yourbooks" className="nav-link">Ваші бронювання</Link>

          <button className="btn-2" onClick={() => navigate('/booking')}>
            Розпочати
          </button>
        </div>

        <div className="btn open-menu-btn">
          <i className="fas fa-bars menu-btn"></i>
        </div>
      </nav>

      <section className="collection">
        <h1>Всі автомобілі</h1>
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
                onClick={() => handleBookCar(car.name)}
                disabled={car.quantity === 0}
              >
                <p>{car.quantity > 0 ? "Забронювати" : "Недоступно"}</p>
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Оренда автомобілів. Всі права захищені.</p>
      </footer>
    </div>
  );
};

export default Collection;
