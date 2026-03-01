"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./details.css";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  time: string;
  service: string;
  field: string;
  about: string;
  image: string;
}

export default function DoctorDetails() {
  const params = useParams();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
    const router = useRouter();

  useEffect(() => {
    if (params?.id) {
      fetch(`http://localhost:5000/doctors/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setDoctor(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [params]);
  
  // ✅ Navigate to Appointment Page
  const handleConfirmBooking = () => {
    if (doctor) {
      router.push(`/appointment/${doctor.id}`);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (!doctor) return <h2>Doctor Not Found</h2>;

  return (
    <div className="details-container">
    

      {/* Doctor Main Card */}
      <div className="doctor-card">
        <img
          src={doctor.image}
          width={120}
          height={120}
          alt={doctor.name}
        />

        <div>
          <h2>{doctor.name}</h2>
          <p className="blue">{doctor.specialization}</p>
          <p>{doctor.experience}</p>
          <p>⭐ {doctor.rating}</p>
          <p><strong>{doctor.time}</strong></p>
        </div>
      </div>

      {/* About Section */}
      <div className="section">
        <h3>About Doctor</h3>
        <p>{doctor.about}</p>
      </div>

      {/* Service Section */}
      <div className="section">
        <h3>Service & Specialization</h3>
        <p><strong>Service:</strong> {doctor.service}</p>
        <p><strong>Specialization:</strong> {doctor.field}</p>
      </div>

      {/* Availability */}
      <div className="section">
        <h3>Availability</h3>
        <p>{doctor.time}</p>
      </div>

      {/* <button className="book-btn">Confirm Booking</button> */}
      
       <button className="book-btn" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    
    </div>
  );
}