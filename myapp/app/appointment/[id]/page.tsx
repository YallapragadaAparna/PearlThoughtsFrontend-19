"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./appointment.css";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  availableTime: string;
  location: string;
  rating: number;
  image: string;
}

export default function AppointmentPage() {
  const { id } = useParams();
  const router = useRouter();

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const morningSlots = [
    "09:30 AM - 09:45 AM",
    "10:00 AM - 10:15 AM",
    "10:30 AM - 10:45 AM",
    "11:00 AM - 11:15 AM",
    "11:30 AM - 11:45 AM",
    "12:00 PM - 12:15 PM",
    "12:15 PM - 12:30 PM",
    "01:00 PM - 01:15 PM",
    "01:30 PM - 01:45 PM",
    "01:45 PM - 02:00 PM",
  ];

  const eveningSlots = [
    "04:00 PM - 04:30 PM",
    "04:30 PM - 05:00 PM",
    "05:00 PM - 05:30 PM",
    "06:00 PM - 06:30 PM",
    "06:30 PM - 07:00 PM",
    "07:00 PM - 07:30 PM",
    "07:30 PM - 08:00 PM",
    "08:00 PM - 08:30 PM",
    "08:30 PM - 09:00 PM",
    "09:00 PM - 09:30 PM",
    "09:30 PM - 10:00 PM",
  ];

  useEffect(() => {
    if (!id) return;

    fetch(`https://pearlthoughtsfrontend-19-6.onrender.com/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [id]);

  const handleBook = () => {
    if (!doctor) return;

    if (!selectedDate || !selectedSlot) {
      alert("Please select date and slot");
      return;
    }

    const query = new URLSearchParams({
      id: String(doctor.id),
      name: doctor.name,
      specialization: doctor.specialization,
      experience: doctor.experience,
      image: doctor.image,
      date: selectedDate,
      slot: selectedSlot,
    }).toString();

    router.push(`/review-summary?${query}`);
  };

  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="appointment-container">
      <div className="header-container">
        <h2>Book Appointment</h2>
      </div>

      <div className="main-card">
        {/* Doctor Card */}
        <div className="doctor-card">
          <img src={doctor.image} alt={doctor.name} />
          <div>
            <h3>{doctor.name}</h3>
            <p className="specialization">{doctor.specialization}</p>
            <p>{doctor.experience}</p>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="calendar-section">
          <label>Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="calendar-input"
          />
        </div>

        {/* Slot Section */}
        <div className="slot-section">
          <label>Select Slot</label>

          <div className="slot-wrapper">
            {/* Morning Column */}
            <div className="slot-column">
              <h4 className="slot-heading">Morning</h4>
              <div className="slot-grid">
                {morningSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={
                      selectedSlot === slot ? "slot active" : "slot"
                    }
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Evening Column */}
            <div className="slot-column">
              <h4 className="slot-heading">Evening</h4>
              <div className="slot-grid">
                {eveningSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={
                      selectedSlot === slot ? "slot active" : "slot"
                    }
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button className="book-btn" onClick={handleBook}>
          Book Appointment
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <span
          className="active"
          onClick={() => router.push(`/appointment/${doctor.id}`)}
        >
          Home
        </span>

        <span onClick={() => router.push(`/appointment/${doctor.id}`)}>
          Appointment
        </span>

        <span onClick={() => router.push("/records")}>
          Records
        </span>

        <span onClick={() => router.push("/profile")}>
          Profile
        </span>
      </div>
    </div>
  );
}