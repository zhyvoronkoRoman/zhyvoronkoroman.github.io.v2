
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useStickyNavbar() {
  useEffect(() => {
    const navbar = document.querySelector("nav");
    const handleScroll = () => {
      navbar?.classList.toggle("sticky", window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export function useMenuToggle() {
  useEffect(() => {
    const menu = document.querySelector("nav .menu");
    const openBtn = document.querySelector("nav .open-menu-btn");
    const closeBtn = document.querySelector("nav .close-menu-btn");

    const openMenu = () => menu?.classList.add("menu-active");
    const closeMenu = () => menu?.classList.remove("menu-active");

    openBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);

    return () => {
      openBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
    };
  }, []);
}

export function useToggleInfoButtons() {
  useEffect(() => {
    document.querySelectorAll(".toggle-info-btn").forEach(button => {
      button.addEventListener("click", function () {
        const carInfo = this.nextElementSibling;
        carInfo?.classList.toggle("show");
      });
    });
  }, []);
}


export function useAutoSetCarSelect() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const carModel = params.get("car");
    if (carModel) {
      const carSelectInput = document.getElementById("car-select-input");
      if (carSelectInput) {
        carSelectInput.value = carModel;
      }
    }
  }, []);
}

export function useDateRestrictions() {
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date-start')?.setAttribute('min', today);
    document.getElementById('date-end')?.setAttribute('min', today);
  }, []);
}

export function bookCar(carModel) {
  window.location.href = "/booking?car=" + encodeURIComponent(carModel);
}

// Для перегляду бронювань (можна також винести в окрему компоненту)
export function useShowBookings() {
  useEffect(() => {
    const bookingsListContainer = document.getElementById("bookings-list");
    const noBookingsMessage = document.getElementById("no-bookings");

    if (!bookingsListContainer || !noBookingsMessage) return;

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    if (bookings.length === 0) {
      noBookingsMessage.style.display = "block";
    } else {
      noBookingsMessage.style.display = "none";
      bookings.forEach((booking, index) => {
        const bookingItem = document.createElement("div");
        bookingItem.className = "booking-entry";
        bookingItem.innerHTML = `
          <h3>Бронювання #${index + 1}</h3>
          <p><strong>Ім’я:</strong> ${booking.name}</p>
          <p><strong>Email:</strong> ${booking.email}</p>
          <p><strong>Телефон:</strong> ${booking.phone}</p>
          <p><strong>Авто:</strong> ${booking.carType}</p>
          <p><strong>З:</strong> ${booking.dateStart} <strong>по:</strong> ${booking.dateEnd}</p>
          <hr>
        `;
        bookingsListContainer.appendChild(bookingItem);
      });
    }
  }, []);
}

export function useBookingSave() {
  const navigate = useNavigate();

  const saveBooking = () => {
    const carType = document.getElementById('car-select-input')?.value;
    const dateStart = document.getElementById('date-start')?.value;
    const dateEnd = document.getElementById('date-end')?.value;
    const name = document.querySelector('input[name="name"]')?.value.trim();
    const email = document.querySelector('input[name="email"]')?.value.trim();
    const phone = document.querySelector('input[name="phone"]')?.value.trim();

    if (!carType || !dateStart || !dateEnd || !name || !email || !phone) {
      alert("Будь ласка, заповніть всі поля перед бронюванням!");
      return;
    }

    if (dateEnd < dateStart) {
      alert("Дата закінчення не може бути раніше за дату початку!");
      return;
    }

    if (!/^[А-Яа-яA-Za-zІіЇїЄєҐґ]{2,}( [А-Яа-яA-Za-zІіЇїЄєҐґ]{2,})?$/.test(name)) {
      alert("Введіть коректне ім’я (тільки літери, мінімум 2 символи).");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Введіть коректну адресу електронної пошти.");
      return;
    }

    if (!/^\+?[0-9\s\-]{10,15}$/.test(phone)) {
      alert("Введіть коректний номер телефону (10-15 цифр).");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    const alreadyBooked = bookings.some(b => 
      b.carType === carType &&
      !(dateEnd < b.dateStart || dateStart > b.dateEnd)
    );

    if (alreadyBooked) {
      alert("Ця машина вже заброньована на вибрані дати!");
      return;
    }

    const bookingData = {
      carType,
      dateStart,
      dateEnd,
      name,
      email,
      phone
    };

    bookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    console.log("Бронювання збережено:", bookingData);
    navigate('/yourbooks');
  };

  return saveBooking;
}

console.log("js rabotae");