// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import "./review-summary.css";

// interface DoctorData {
//   name: string | null;
//   specialization: string | null;
//   image: string | null;
//   date: string | null;
// }

// export default function ReviewSummaryPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [doctor, setDoctor] = useState<DoctorData | null>(null);

//   useEffect(() => {
//     setDoctor({
//       name: searchParams.get("name"),
//       specialization: searchParams.get("specialization"),
//       image: searchParams.get("image"),
//       date: searchParams.get("date"),
//     });
//   }, [searchParams]);
//     const handleClick = () => {
//     router.push("/patient");
//   };
// const handleViewAppointment = () => {
//   if (!doctor?.date) return;
// }

//   // // Example: combine date + fixed time
//   // const appointmentDateTime = new Date(`${doctor.date}T19:30:00`);
//   // const currentTime = new Date();

//   // if (currentTime > appointmentDateTime) {
//   //   // Slot expired → Go to Unable Book page
//   //   router.push("/unable-book");
//   // } else {
//   //   // Slot active → Stay or show appointment details
//   //   alert("Your appointment is still active!");
//   // }
//  // const handleViewAppointment = () => {
//  // if (!doctor?.date) return;

// //   // Appointment Date + Time
// //   const appointmentDateTime = new Date(`${doctor.date}T19:30:00`);
// //   const currentTime = new Date();

// //   // 2 hours before appointment
// //   const twoHoursBefore = new Date(
// //     appointmentDateTime.getTime() - 2 * 60 * 60 * 1000
// //   );

// //   if (currentTime > twoHoursBefore) {
// //     // Less than 2 hours remaining → Not allowed
// //     router.push("/unable-book");
// //   } else {
// //     alert("You can still access this appointment.");
// //   }
// // };
// // };

//   if (!doctor) return null;

//   return (
//     <div className="schedule-wrapper">
//       {/* Header */}
//       <div className="schedule-header">
//         <span className="back-btn" onClick={() => router.back()}>
//           ←
//         </span>
//         <h2>Appointment Scheduled</h2>
//       </div>

//       {/* Doctor Info Card */}
//       <div className="doctor-card">
//         <img
//           src={doctor.image || "/doctor.jpg"}
//           alt={doctor.name || "Doctor"}
//           className="doctor-img"
//         />

//         <div className="doctor-info">
//           <h3>{doctor.name}</h3>
//           <p className="specialization">{doctor.specialization}</p>
//           <p className="degree">MBBS, MD (Internal Medicine)</p>
//         </div>
//       </div>

//       {/* Appointment Details */}
//       <div className="appointment-card">
//         <p className="appointment-number">
//           Appointment Number: <strong>#34</strong>
//         </p>

//         <div className="status-section">
//           <div>
//             <p className="label">Status</p>
//             <span className="status-active">Active</span>
//           </div>

//           <div>
//             <p className="label">Reporting Time</p>
//             <span className="report-time">
//               {doctor.date} | 7:30 PM
//             </span>
//           </div>
//         </div>

//         <button className="calendar-btn">
//           📅 Add to calendar
//         </button>
//       </div>
// {/* 
//       {/* Add Patient *
//       <div className="add-patient">
//         <button>+ Add Patient Details</button>
//       </div> */}
//     <div className="add-patient">
//       <button onClick={handleClick}>
//         + Add Patient Details
//       </button>
//       </div>
//       {/* Bottom Button */}
//       <button
//         className="view-btn"
//         onClick={handleViewAppointment}
//       >
//         View My Appointment
//       </button>
//     </div>
//   );
//  }
// // "use client";

// // import { useSearchParams, useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import "./review-summary.css";

// // interface DoctorData {
// //   id: string | null;
// //   name: string | null;
// //   specialization: string | null;
// //   image: string | null;
// //   date: string | null;
// // }

// // export default function ReviewSummaryPage() {
// //   const searchParams = useSearchParams();
// //   const router = useRouter();

// //   const [doctor, setDoctor] = useState<DoctorData | null>(null);

// //   useEffect(() => {
// //     setDoctor({
// //       id: searchParams.get("doctorId"), // ✅ FIXED
// //       name: searchParams.get("name"),
// //       specialization: searchParams.get("specialization"),
// //       image: searchParams.get("image"),
// //       date: searchParams.get("date"),
// //     });
// //   }, [searchParams]);

// //   // ✅ Add Patient Button
// //   const handleClick = () => {
// //     if (!doctor?.id) return;
// //     router.push(`/patient?doctorId=${doctor.id}`);
// //   };

// //   // ✅ View Appointment Button
// //   const handleViewAppointment = () => {
// //     if (!doctor?.date) return;

// //     const appointmentDateTime = new Date(`${doctor.date}T19:30:00`);
// //     const currentTime = new Date();

// //     const twoHoursBefore = new Date(
// //       appointmentDateTime.getTime() - 2 * 60 * 60 * 1000
// //     );

// //     if (currentTime > twoHoursBefore) {
// //       router.push("/unable-book");
// //     } else {
// //       alert("You can still access this appointment.");
// //     }
// //   };

// //   if (!doctor) return null;

// //   return (
// //     <div className="schedule-wrapper">
// //       {/* Header */}
// //       <div className="schedule-header">
// //         <span className="back-btn" onClick={() => router.back()}>
// //           ←
// //         </span>
// //         <h2>Appointment Scheduled</h2>
// //       </div>

// //       {/* Doctor Info */}
// //       <div className="doctor-card">
// //         <img
// //           src={doctor.image || "/doctor.jpg"}
// //           alt={doctor.name || "Doctor"}
// //           className="doctor-img"
// //         />

// //         <div className="doctor-info">
// //           <h3>{doctor.name}</h3>
// //           <p className="specialization">{doctor.specialization}</p>
// //           <p className="degree">MBBS, MD (Internal Medicine)</p>
// //         </div>
// //       </div>

// //       {/* Appointment Details */}
// //       <div className="appointment-card">
// //         <p className="appointment-number">
// //           Appointment Number: <strong>#34</strong>
// //         </p>

// //         <div className="status-section">
// //           <div>
// //             <p className="label">Status</p>
// //             <span className="status-active">Active</span>
// //           </div>

// //           <div>
// //             <p className="label">Reporting Time</p>
// //             <span className="report-time">
// //               {doctor.date} | 7:30 PM
// //             </span>
// //           </div>
// //         </div>

// //         <button className="calendar-btn">
// //           📅 Add to calendar
// //         </button>
// //       </div>

// //       {/* Add Patient
// //       <div className="add-patient">
// //         <button onClick={handleClick}>
// //           + Add Patient Details
// //         </button>
// //       </div> */}
// // <div className="add-patient">
// //    <button onClick={handleClick}>
// //      + Add Patient Details
// //    </button>
// //    </div>
// //       {/* Bottom Button */}
// //       <button
// //         className="view-btn"
// //         onClick={handleViewAppointment}
// //       >
// //         View My Appointment
// //       </button>
// //     </div>
// //   );
// // }
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