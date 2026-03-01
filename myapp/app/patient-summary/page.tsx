// // // // "use client";

// // // // import { useSearchParams } from "next/navigation";
// // // // import { useEffect, useState } from "react";
// // // // import styles from "./summary.module.css";

// // // // export default function PatientSummaryPage() {
// // // //   const searchParams = useSearchParams();
// // // //   const id = searchParams.get("id");

// // // //   const [patient, setPatient] = useState<any>(null);

// // // //   useEffect(() => {
// // // //     if (!id) return;

// // // //     const fetchPatient = async () => {
// // // //       const res = await fetch(`http://localhost:3001/patients/${id}`);
// // // //       const data = await res.json();
// // // //       setPatient(data);
// // // //     };

// // // //     fetchPatient();
// // // //   }, [id]);

// // // //   if (!patient) return <p>Loading...</p>;

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <h2>Patient Details</h2>

// // // //       <div className={styles.card}>
// // // //         <p><strong>Full Name</strong></p>
// // // //         <p>{patient.fullName}</p>

// // // //         <div className={styles.row}>
// // // //           <div>
// // // //             <p><strong>Age</strong></p>
// // // //             <p>{patient.age}</p>
// // // //           </div>

// // // //           <div>
// // // //             <p><strong>Weight</strong></p>
// // // //             <p>{patient.weight}</p>
// // // //           </div>

// // // //           <div>
// // // //             <p><strong>Relation</strong></p>
// // // //             <p>{patient.relation}</p>
// // // //           </div>
// // // //         </div>

// // // //         <p><strong>Problem</strong></p>
// // // //         <p>{patient.problem}</p>

// // // //         <p><strong>Mobile</strong></p>
// // // //         <p>{patient.mobile}</p>
// // // //       </div>

// // // //       <div>
// // // //         <h3>Visit Type</h3>
// // // //         <p>{patient.visitType}</p>
// // // //       </div>

// // // //       <div>
// // // //         <h3>Payment</h3>
// // // //         <p>Reduce your waiting time by paying consulting fee upfront</p>
// // // //       </div>

// // // //       <button>Pay Consulting Fee</button>
// // // //       <button>Quick Query</button>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import styles from "./summary.module.css";

// // // export default function PatientSummaryPage() {
// // //   const [patient, setPatient] = useState<any>(null);

// // //   useEffect(() => {
// // //     const savedData = localStorage.getItem("patientData");

// // //     if (savedData) {
// // //       setPatient(JSON.parse(savedData));
// // //     }
// // //   }, []);

// // //   if (!patient) return <p>Loading...</p>;

// // //   return (
// // //     <div className={styles.container}>
// // //       <h2>Patient Details</h2>

// // //       <div className={styles.card}>
// // //         <p><strong>Full Name</strong></p>
// // //         <p>{patient.fullName}</p>

// // //         <div className={styles.row}>
// // //           <div>
// // //             <p><strong>Age</strong></p>
// // //             <p>{patient.age}</p>
// // //           </div>
// // //           <div>
// // //             <p><strong>Weight</strong></p>
// // //             <p>{patient.weight}</p>
// // //           </div>
// // //           <div>
// // //             <p><strong>Relation</strong></p>
// // //             <p>{patient.relation}</p>
// // //           </div>
// // //         </div>

// // //         <p><strong>Problem</strong></p>
// // //         <p>{patient.problem}</p>

// // //         <p><strong>Mobile</strong></p>
// // //         <p>{patient.mobile}</p>
// // //       </div>

// // //       <button>Pay Consulting Fee</button>
// // //       <button>Quick Query</button>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useState } from "react";
// // import styles from "./summary.module.css";

// // export default function PatientSummaryPage() {
// //   const [patient, setPatient] = useState<any>(null);
// //   const [doctor, setDoctor] = useState<any>(null);

// //   useEffect(() => {
// //      setDoctor({
// //       name: searchParams.get("name"),
// //       specialization: searchParams.get("specialization"),
// //       image: searchParams.get("image"),
// //       date: searchParams.get("date"),
// //     });
// //     // Get Patient Data
// //     const savedPatient = localStorage.getItem("patientData");
// //     if (savedPatient) {
// //       setPatient(JSON.parse(savedPatient));
// //     }

// //     // Get Doctor ID
// //     const doctorId = localStorage.getItem("selectedDoctorId");

// //     if (doctorId) {
// //       fetch(`http://localhost:5000/doctors/${doctorId}`)
// //         .then((res) => res.json())
// //         .then((data) => {
// //           setDoctor(data);
// //         })
// //         .catch((err) => {
// //           console.error("Doctor fetch error:", err);
// //         });
// //     }
// //   }, []);

// //   // Only block if patient not available
// //   if (!patient) return <p>Loading patient details...</p>;

// //   return (
// //     <div className={styles.container}>
// //       <h2>Review Summary</h2>

// //       {/* ---------------- Patient Details ---------------- */}
// //       <div className={styles.card}>
// //         <h3>Patient Details</h3>

// //         <p><strong>Full Name</strong></p>
// //         <p>{patient.fullName}</p>

// //         <div className={styles.row}>
// //           <div>
// //             <p><strong>Age</strong></p>
// //             <p>{patient.age}</p>
// //           </div>
// //           <div>
// //             <p><strong>Weight</strong></p>
// //             <p>{patient.weight}</p>
// //           </div>
// //           <div>
// //             <p><strong>Relation</strong></p>
// //             <p>{patient.relation}</p>
// //           </div>
// //         </div>

// //         <p><strong>Problem</strong></p>
// //         <p>{patient.problem}</p>

// //         <p><strong>Mobile</strong></p>
// //         <p>{patient.mobile}</p>
// //       </div>

// //       {/* ---------------- Doctor Details ---------------- */}
    
// //          {/* Doctor Info Card */}
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
       
// //        {/* // <p>Loading doctor details...</p> */}
    

// //       <button>Pay Consulting Fee</button>
// //       <button>Quick Query</button>
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";   // ✅ FIX 1
// import styles from "./summary.module.css";

// export default function PatientSummaryPage() {
//   const [patient, setPatient] = useState<any>(null);
//   const [doctor, setDoctor] = useState<any>(null);

//   const searchParams = useSearchParams();  // ✅ FIX 2

//   useEffect(() => {
//     // Set doctor from URL params
//     setDoctor({
//       name: searchParams.get("name"),
//       specialization: searchParams.get("specialization"),
//       image: searchParams.get("image"),
//       date: searchParams.get("date"),
//     });

//     // Get Patient Data
//     const savedPatient = localStorage.getItem("patientData");
//     if (savedPatient) {
//       setPatient(JSON.parse(savedPatient));
//     }

//     // Get Doctor ID
//     const doctorId = localStorage.getItem("selectedDoctorId");

//     if (doctorId) {
//       fetch(`http://localhost:5000/doctors/${doctorId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setDoctor(data);
//         })
//         .catch((err) => {
//           console.error("Doctor fetch error:", err);
//         });
//     }
//   }, [searchParams]); // ✅ FIX 3 (dependency added)

//   // Only block if patient not available
//   if (!patient) return <p>Loading patient details...</p>;

//   return (
//     <div className={styles.container}>
//       <h2>Review Summary</h2>

//       {/* ---------------- Patient Details ---------------- */}
//       <div className={styles.card}>
//         <h3>Patient Details</h3>

//         <p><strong>Full Name</strong></p>
//         <p>{patient.fullName}</p>

//         <div className={styles.row}>
//           <div>
//             <p><strong>Age</strong></p>
//             <p>{patient.age}</p>
//           </div>
//           <div>
//             <p><strong>Weight</strong></p>
//             <p>{patient.weight}</p>
//           </div>
//           <div>
//             <p><strong>Relation</strong></p>
//             <p>{patient.relation}</p>
//           </div>
//         </div>

//         <p><strong>Problem</strong></p>
//         <p>{patient.problem}</p>

//         <p><strong>Mobile</strong></p>
//         <p>{patient.mobile}</p>
//       </div>

//       {/* ---------------- Doctor Details ---------------- */}
//       {doctor && (   // ✅ FIX 4 (prevent null error)
//         <div className="doctor-card">
//           <img
//             src={doctor.image || "/doctor.jpg"}
//             alt={doctor.name || "Doctor"}
//             className="doctor-img"
//           />

//           <div className="doctor-info">
//             <h3>{doctor.name}</h3>
//             <p className="specialization">{doctor.specialization}</p>
//             <p className="degree">MBBS, MD (Internal Medicine)</p>
//           </div>
//         </div>
//       )}

//       <button>Pay Consulting Fee</button>
//       <button>Quick Query</button>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useSearchParams,useRouter } from "next/navigation";
import styles from "./summary.module.css";
export default function PatientSummaryPage() {
  const searchParams = useSearchParams();
   const router = useRouter();
  const [patient, setPatient] = useState<any>(null);


  // ✅ Get doctor directly from query params
  const doctor = {
    id: searchParams.get("id"),
    name: searchParams.get("name"),
    specialization: searchParams.get("specialization"),
    experience: searchParams.get("experience"),
    image: searchParams.get("image"),
    date: searchParams.get("date"),
    slot: searchParams.get("slot"),
  };

  useEffect(() => {
    const savedPatient = localStorage.getItem("patientData");
    if (savedPatient) {
      setPatient(JSON.parse(savedPatient));
    }
  }, []);

  if (!patient) return <p>Loading patient details...</p>;
  

  return (
    <div className={styles.container}>
      <h2>Review Summary</h2>
      {/* ---------------- Doctor Details ---------------- */}
      {doctor.name && (
        <div className={styles.doctorCard}>
          <img
            src={doctor.image || "/doctor.jpg"}
            alt={doctor.name}
            className={styles.doctorImg}
          />

          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
            <p>{doctor.experience}</p>

            <p><strong>Date:</strong> {doctor.date}</p>
            <p><strong>Slot:</strong> {doctor.slot}</p>
          </div>
        </div>
)}
      {/* ---------------- Patient Details ---------------- */}
      <div className={styles.card}>
        <h3>Patient Details</h3>

        <p><strong>Full Name</strong></p>
        <p>{patient.fullName}</p>

        <div className={styles.row}>
          <div>
            <p><strong>Age</strong></p>
            <p>{patient.age}</p>
          </div>
          <div>
            <p><strong>Weight</strong></p>
            <p>{patient.weight}</p>
          </div>
          <div>
            <p><strong>Relation</strong></p>
            <p>{patient.relation}</p>
          </div>
        </div>

        <p><strong>Problem</strong></p>
        <p>{patient.problem}</p>

        <p><strong>Mobile</strong></p>
        <p>{patient.mobile}</p>
      </div>

    <div className={styles.buttonWrapper}>
      {/* <button className={styles.payBtn}>Pay Consulting Fee</button> */}
    <button
  className={styles.payBtn}
  onClick={() => router.push(
    //`/appointments?id=${doctor.id}&name=${doctor.name}&specialization=${doctor.specialization}&experience=${doctor.experience}&image=${doctor.image}&date=${doctor.date}&slot=${doctor.slot}`
 `/appointments?id=${doctor.id}
      &name=${doctor.name}
      &specialization=${doctor.specialization}
      &experience=${doctor.experience}
      &image=${doctor.image}
      &date=${doctor.date}
      &slot=${doctor.slot}
      &patientName=${patient.fullName}
      &age=${patient.age}
      &weight=${patient.weight}
      &relation=${patient.relation}
      &problem=${encodeURIComponent(patient.problem)}
      &mobile=${patient.mobile}`

  )}
>
  Pay Consulting Fee
</button>
      <button className={styles.queryBtn}>Quick Query</button>
    </div>
    </div>
  );
}