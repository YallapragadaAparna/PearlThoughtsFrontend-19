"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./review-summary.css";

interface DoctorData {
  id: string | null;
  name: string | null;
  specialization: string | null;
  image: string | null;
  date: string | null;
  slot: string | null;
  experience: string | null;
}

export default function ReviewSummaryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [doctor, setDoctor] = useState<DoctorData | null>(null);

  useEffect(() => {
    setDoctor({
      id: searchParams.get("id"),
      name: searchParams.get("name"),
      specialization: searchParams.get("specialization"),
      image: searchParams.get("image"),
      date: searchParams.get("date"),
      slot: searchParams.get("slot"),
      experience: searchParams.get("experience"),
    });
  }, [searchParams]);

  // ✅ FIXED: Pass doctor details to patient page
  const handleClick = () => {
    if (!doctor) return;

    const query = new URLSearchParams({
      id: doctor.id || "",
      name: doctor.name || "",
      specialization: doctor.specialization || "",
      experience: doctor.experience || "",
      image: doctor.image || "",
      date: doctor.date || "",
      slot: doctor.slot || "",
    }).toString();

    router.push(`/patient?${query}`);
  };

  if (!doctor) return null;

  return (
    <div className="schedule-wrapper">
      <div className="schedule-header">
        <span className="back-btn" onClick={() => router.back()}>
          ←
        </span>
        <h2>Appointment Scheduled</h2>
      </div>

      <div className="doctor-card">
        <img
          src={doctor.image || "/doctor.jpg"}
          alt={doctor.name || "Doctor"}
          className="doctor-img"
        />

        <div className="doctor-info">
          <h3>{doctor.name}</h3>
          <p className="specialization">{doctor.specialization}</p>
          <p className="degree">MBBS, MD (Internal Medicine)</p>
        </div>
      </div>

      <div className="appointment-card">
        <p className="appointment-number">
          Appointment Number: <strong>#34</strong>
        </p>

        <div className="status-section">
          <div>
            <p className="label">Status</p>
            <span className="status-active">Active</span>
          </div>

          <div>
            <p className="label">Reporting Time</p>
            <span className="report-time">
              {doctor.date} | {doctor.slot}
            </span>
          </div>
        </div>

        <button className="calendar-btn">
          📅 Add to calendar
        </button>
      </div>

      <div className="add-patient">
        <button onClick={handleClick}>
          + Add Patient Details
        </button>
      </div>
    </div>
  );
}