// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Doctor {
//   id: number;
//   name: string;
//   specialization: string;
//   experience: string;
//   availableTime: string;
//   location: string;
//   rating: number;
//   image: string;
// }

// export default function AppointmentPage() {
//   const { id } = useParams();
//   const [doctor, setDoctor] = useState<Doctor | null>(null);

//   useEffect(() => {
//     if (!id) return;

//     fetch(
//       `https://pearlthoughtsfrontend-19-6.onrender.com/doctors/${id}`
//     )
//       .then((res) => res.json())
//       .then((data) => setDoctor(data))
//       .catch((err) => console.error("Error fetching doctor:", err));
//   }, [id]);

//   if (!doctor) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Book Appointment</h2>

//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: 20,
//           borderRadius: 10,
//           maxWidth: 400,
//         }}
//       >
//         <img
//           src={doctor.image}
//           alt={doctor.name}
//           style={{
//             width: 120,
//             height: 120,
//             borderRadius: 10,
//             objectFit: "cover",
//           }}
//         />

//         <h3>{doctor.name}</h3>
//         <p>Specialization: {doctor.specialization}</p>
//         <p>Experience: {doctor.experience}</p>
//         <p>Available Time: {doctor.availableTime}</p>
//         <p>Location: {doctor.location}</p>
//         <p>⭐ {doctor.rating}</p>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import "./appointment.css";

// interface Doctor {
//   id: number;
//   name: string;
//   specialization: string;
//   experience: string;
//   availableTime: string;
//   location: string;
//   rating: number;
//   image: string;
// }

// export default function AppointmentPage() {
//   const { id } = useParams();
//   const router = useRouter();

//   const [doctor, setDoctor] = useState<Doctor | null>(null);
//  // const [selectedDate, setSelectedDate] = useState<number | null>(14);
//  const [selectedDate, setSelectedDate] = useState<string>("");
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

//   const slots = [
//     "09:30 AM - 09:45 AM",
//     "10:00 AM - 10:15 AM",
//     "10:30 AM - 10:45 AM",
//     "11:00 AM - 11:15 AM",
//     "11:30 AM - 11:45 AM",
//     "12:00 PM - 12:15 PM",
//     "12:15 PM - 12:30 PM",
//     "01:00 PM - 01:15 PM",
//     "01:30 PM - 01:45 PM",
//     "01:45 PM - 02:00 PM",
//     "04:00 PM - 04:30 PM",
//     "04:30 PM - 05:00 PM",
//     "05:00 PM - 05:30 PM",
//      "06:00 PM - 06:30 PM",
//      "06:30 PM - 07:00 PM",
//      "07:00 PM - 07:30 PM",
//      "07:30 PM - 08:00 PM",
//      "08:00 PM - 08:30 PM",
//     "08:30 PM - 09:00 PM",
//     "09:00 PM - 09:30 PM",
//     "09:30 PM - 10:00 PM",
//   ];

//   useEffect(() => {
//     if (!id) return;

//     fetch(
//       `https://pearlthoughtsfrontend-19-6.onrender.com/doctors/${id}`
//     )
//       .then((res) => res.json())
//       .then((data) => setDoctor(data));
//   }, [id]);

//   // const handleBook = () => {
//   //   if (!selectedDate || !selectedSlot) {
//   //     alert("Please select date and slot");
//   //     return;
//   //   }

//   //   alert(
//   //     `Appointment booked with ${doctor?.name}\nDate: ${selectedDate}\nTime: ${selectedSlot}`
//   //   );

//   //   router.push("/home");
//   // };
//   const handleBook = () => {
//      if (!doctor) return;
//   if (!selectedDate || !selectedSlot) {
//     alert("Please select date and slot");
//     return;
//   }

//   const query = new URLSearchParams({
//     id: String(doctor.id),
//     name: doctor.name,
//     specialization: doctor.specialization,
//     experience: doctor.experience,
//     image: doctor.image,
//     date: selectedDate,
//     slot: selectedSlot,
//   }).toString();

//   router.push(`/review-summary?${query}`);
//  // router.push(`/patient-summary?${query}`);
// };

//   if (!doctor) return <p>Loading...</p>;

//   return (
    
//     <div className="appointment-container">
//       <div className="header-container">
//         <h2>Book Appointment</h2>
//       </div>
//         {/* MAIN CARD */}
//       <div className="main-card">
//       <div className="doctor-card">
//         <img src={doctor.image} alt={doctor.name} />
//         <div>
//           <h3>{doctor.name}</h3>
//           <p className="specialization">{doctor.specialization}</p>
//           <p>{doctor.experience}</p>
//         </div>
//       </div>

//       {/* <div className="date-section">
//         <h4>July, 2023</h4>
//         <div className="date-list">
//           {[13, 14, 16, 17, 18].map((date) => (
//             <button
//               key={date}
//               onClick={() => setSelectedDate(date)}
//               className={
//                 selectedDate === date ? "date active" : "date"
//               }
//             >
//               {date}
//             </button>
//           ))}
//         </div>
//       </div> */}
      
// {/* Calendar Section */}
//       <div className="calendar-section">
//         <label>Select Date</label>
//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className="calendar-input"
//         />
//       </div>
//       <div className="slot-section">
//         <label>Select Slot</label>
//         <div className="slot-grid">
//           {slots.map((slot) => (
//             <button
//               key={slot}
//               onClick={() => setSelectedSlot(slot)}
//               className={
//                 selectedSlot === slot ? "slot active" : "slot"
//               }
//             >
//               {slot}
//             </button>
//           ))}
//         </div>
//       </div>

//       <button className="book-btn" onClick={handleBook}>
//         Book Appointment
//       </button>
//     </div>
  
//     {/* BOTTOM NAVIGATION */}
//       <div className="bottom-nav">
//         <span
//           className="active"
//           onClick={() => router.push(`/appointment/${doctor.id}`)}
//         >
//           Home
//         </span>

//         <span onClick={() => router.push(`/appointment/${doctor.id}`)}>
//           Appointment
//         </span>

//         <span onClick={() => router.push("/records")}>
//           Records
//         </span>

//         <span onClick={() => router.push("/profile")}>
//           Profile
//         </span>
//       </div>
//       </div>
//   );
// }
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

  // ✅ Morning Slots
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

  // ✅ Evening Slots
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

    fetch(
      `https://pearlthoughtsfrontend-19-6.onrender.com/doctors/${id}`
    )
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

          {/* Morning */}
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

          {/* Evening */}
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