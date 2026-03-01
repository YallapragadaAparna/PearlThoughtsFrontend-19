"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import "./appointment-details.css";

export default function AppointmentDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "upcoming";

  const [appointment, setAppointment] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("latestAppointment");
    if (stored) {
      setAppointment(JSON.parse(stored));
    }
  }, []);

  // Doctor Details
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const specialization = searchParams.get("specialization");
  const experience = searchParams.get("experience");
  const image = searchParams.get("image");
  const date = searchParams.get("date");
  const slot = searchParams.get("slot");

  // Patient Details
  const patientName = searchParams.get("patientName");
  const age = searchParams.get("age");
  const weight = searchParams.get("weight");
  const problem = searchParams.get("problem");

  // Appointment Status
  const [status, setStatus] = useState("Waiting"); 
  // Waiting | Completed | Canceled

  // -------- Live Tracking Logic --------
  const patientsAhead = 10;
  const consultationTimePerPatient = 5; // minutes

  let expectedTime = "";

  if (slot) {
    const converted = convertTo24Hour(slot);
    const slotDate = new Date(`1970-01-01T${converted}:00`);

    const totalMinutes = patientsAhead * consultationTimePerPatient;
    slotDate.setMinutes(slotDate.getMinutes() + totalMinutes);

    expectedTime = slotDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function convertTo24Hour(time: string) {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = String(parseInt(hours) + 12);
    }

    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    return `${hours}:${minutes}`;
  }

  // -------- Payment Handler --------
  const handlePayment = () => {
    const confirmPayment = window.confirm(
      "Do you want to complete the payment?"
    );
     const appointment = {
    id,
    name,
    specialization,
    experience,
    image,
    date,
    slot,
    patientName,
    age,
    weight,
    problem,
    status: confirmPayment ? "Completed" : "Canceled",
  };
     // Save to localStorage
  localStorage.setItem("latestAppointment", JSON.stringify(appointment));

// Build query string with all details
  const query = `id=${id}
    &name=${encodeURIComponent(name || "")}
    &specialization=${encodeURIComponent(specialization || "")}
    &experience=${experience}
    &image=${encodeURIComponent(image || "")}
    &date=${date}
    &slot=${slot}
    &patientName=${encodeURIComponent(patientName || "")}
    &age=${age}
    &weight=${weight}
    &problem=${encodeURIComponent(problem || "")}`;

  if (confirmPayment) {
    setStatus("Completed");
    router.push(`/appointments?tab=completed&${query}`);
  } else {
    setStatus("Canceled");
    router.push(`/appointments?tab=canceled&${query}`);
  }
};
  //   if (confirmPayment) {
  //     setStatus("Completed");
  //     router.push("/appointments?tab=completed");
  //   } else {
  //     setStatus("Canceled");
  //     router.push("/appointments?tab=canceled");
  //   }
  // };

  return (
    <div className="details-container">
      <div className="main-wrapper">

        {/* Header */}
        <div className="header-container">
          <span className="back" onClick={() => router.back()}>←</span>
          <h2>Appointments Details</h2>
        </div>

        {/* Doctor Card */}
        <div className="doctor-card">
          <img src={image || "/doctor.jpg"} alt="doctor" />
          <div>
            <h3>{name}</h3>
            <p>{specialization} - Dombivli</p>
            <p>{experience}</p>
            <p>{date} | {slot}</p>
          </div>
        </div>

        {/* Status */}
        <div className="status-card">
          <span>Appointment Status</span>
          <span
            className={
              status === "Completed"
                ? "completed"
                : status === "Canceled"
                ? "canceled"
                : "waiting"
            }
          >
            {status}
          </span>
        </div>

        {/* Patient Details */}
        <div className="card">
          <h4>Full Name</h4>
          <p>{patientName}</p>

          <div className="row">
            <div>
              <h4>Age</h4>
              <p>{age}</p>
            </div>
            <div>
              <h4>Weight</h4>
              <p>{weight}</p>
            </div>
          </div>

          <h4>Problem</h4>
          <p>{problem}</p>
        </div>
        {appointment && appointment.status === "Completed" && activeTab === "completed" && (
  <div className="card">
    <h3>{appointment.name}</h3>
    <p>{appointment.specialization}</p>
    <p>{appointment.date} | {appointment.slot}</p>
    <p>Status: Completed</p>
  </div>
)}

{appointment && appointment.status === "Canceled" && activeTab === "canceled" && (
  <div className="card">
    <h3>{appointment.name}</h3>
    <p>{appointment.specialization}</p>
    <p>{appointment.date} | {appointment.slot}</p>
    <p>Status: Canceled</p>
  </div>
)}

        {/* Live Tracking */}
        <div className="card">
          <h4>Live Tracking</h4>
          <p>
            {patientsAhead} Patients Ahead <br />
            Expected consulting time: {expectedTime}
          </p>

          <div className="btn-row">
            <button
              className="outline"
              onClick={() => router.push(`/appointment/${id}`)}
            >
              Reschedule
            </button>
            <button
              className="outline"
              onClick={() => {
                setStatus("Canceled");
                router.push("/appointments?tab=canceled");
              }}
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment">
          <h4>Payment</h4>
          <p>
            Reduce your waiting time by paying the consulting fee upfront
          </p>

          <button className="pay-btn" onClick={handlePayment}>
            Make Payment
          </button>
        </div>


        {/* Bottom Nav */}
        <div className="bottom-nav">
          <span onClick={() => router.push("/home")}>Find Doctor</span>
          <span className="active">Appoint.</span>
          <span onClick={() => router.push("/records")}>Records</span>
          <span onClick={() => router.push("/profile")}>Profile</span>
        </div>

      </div>
    </div>
  );
}